import Mongoose from "mongoose";
const { Schema } = Mongoose;
const agencySchema = new Schema({
    AgencyName: String,
    code: String,
    office: String,
});
export const AgencyMongoose = Mongoose.model("Agency", agencySchema);
