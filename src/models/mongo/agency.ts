import Mongoose from "mongoose";
import { Agency } from "../../types/roster-types";

const { Schema } = Mongoose;
const agencySchema = new Schema<Agency>({
  AgencyName: String,
  code: String,
  office: String,
});

export const AgencyMongoose = Mongoose.model("Agency", agencySchema);
