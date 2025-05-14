import Mongoose from "mongoose";
import { User } from "../../types/roster-types";

const { Schema } = Mongoose;

const userSchema = new Schema<User>({
  firstName: String,
  lastName: String,
  email: String,
  password: String,
});

export const UserMongoose = Mongoose.model("User", userSchema);
