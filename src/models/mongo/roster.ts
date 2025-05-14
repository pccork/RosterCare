import Mongoose from "mongoose";
import { Roster } from "../../types/roster-types";

const { Schema } = Mongoose;
const rosterSchema = new Schema<Roster>({
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
