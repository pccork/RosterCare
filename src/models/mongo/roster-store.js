import { RosterMongoose } from "./roster.js";
export const rosterStore = {
    async find() {
        const rosters = await RosterMongoose.find().populate("staff").populate("agency").lean();
        return rosters;
    },
    async findBy(id) {
        const roster = await RosterMongoose.findOne({ agency: id });
        if (!roster) {
            return null;
        }
        return roster;
    },
    /*
  
    async add(roster: Roster): Promise<Roster | null> {
      let newRoster = new RosterMongoose({ ...roster });
      await newRoster.save();
      return newRoster;
    },
  
    */
    async add(roster) {
        let newRoster = new RosterMongoose({ ...roster });
        await newRoster.save();
        const populatedRoster = await RosterMongoose.findById(newRoster._id).populate("staff").populate("agency").lean();
        return populatedRoster;
    },
    async delete() {
        await RosterMongoose.deleteMany({});
    },
};
