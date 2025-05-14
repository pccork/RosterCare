import Mongoose from "mongoose";
const { Schema } = Mongoose;
const rosterSchema = new Schema({
    hour: Number,
    profession: String,
    staff: {
        type: Schema.Types.ObjectId,
        ref: "User",
    },
    agency: {
        type: Schema.Types.ObjectId,
        ref: "Agency",
    },
    lat: String,
    lng: String,
});
export const RosterMongoose = Mongoose.model("Roster", rosterSchema);
