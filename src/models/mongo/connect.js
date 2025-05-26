import * as dotenv from "dotenv";
import Mongoose from "mongoose";
// @ts-ignore
import * as mongooseSeeder from "mais-mongoose-seeder";
import { userStore } from "./user-store.js";
import { seedData as rawSeedData } from "./seed-data.js";
import { rosterStore } from "./roster-store.js";
import { agencyStore } from "./agency-store.js";
import bcrypt from "bcrypt";
const saltRounds = 10;
const seedLib = mongooseSeeder.default;
export async function seed() {
    // Clone seedData so original remains unchanged
    const seedData = structuredClone(rawSeedData);
    // Hash passwords
    if (seedData.users) {
        for (const key in seedData.users) {
            if (key !== "_model" && seedData.users[key].password) {
                const plainPassword = seedData.users[key].password;
                const hashedPassword = await bcrypt.hash(plainPassword, saltRounds);
                seedData.users[key].password = hashedPassword;
            }
        }
    }
    const seeder = seedLib(Mongoose);
    const dbData = await seeder.seed(seedData, { dropDatabase: false, dropCollections: true });
    console.log(dbData);
}
console.log("Seeding complete.");
export function connectMongo(db) {
    dotenv.config();
    Mongoose.set("strictQuery", true);
    Mongoose.connect(process.env.db);
    const mongoDb = Mongoose.connection;
    db.userStore = userStore;
    db.agencyStore = agencyStore;
    db.rosterStore = rosterStore;
    mongoDb.on("error", (err) => {
        console.log(`database connection error: ${err}`);
    });
    mongoDb.on("disconnected", () => {
        console.log("database disconnected");
    });
    mongoDb.once("open", function () {
        console.log(`database connected to ${mongoDb.name} on ${mongoDb.host}`);
        seed();
    });
}
