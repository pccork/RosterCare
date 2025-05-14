import { Roster } from "../../types/roster-types.js";
import { RosterMongoose } from "./roster.js";

export const rosterStore = {
  async find(): Promise<Roster[]> {
    const rosters = await RosterMongoose.find().populate("staff").populate("agency").lean(); 
    return rosters;
  },

  async findBy(id: string): Promise<Roster | null> {
    const roster = await RosterMongoose.findOne({ agency: id });
    if (!roster) {
      return null;
    }
    return roster;
  },

  async add(roster: Roster): Promise<Roster | null> {
    let newRoster = new RosterMongoose({ ...roster });
    await newRoster.save();
    return newRoster;
  },

  async delete() {
    await RosterMongoose.deleteMany({});
  },
};
