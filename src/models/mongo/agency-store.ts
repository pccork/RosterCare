import { Agency } from "../../types/roster-types.js";
import { AgencyMongoose } from "./agency.js";

export const agencyStore = {
  async find(): Promise<Agency[]> {
    const agencies = await AgencyMongoose.find().lean();
    return agencies;
  },

  async findOne(id: string): Promise<Agency | null> {
    const agency = await AgencyMongoose.findOne({ _id: id }).lean();
    return agency;
  },

  async findBy(code: string, AgencyName: string): Promise<Agency | null> {
    const agency = await AgencyMongoose.findOne({
      code,
      AgencyName,
    }).lean();
    return agency;
  },
};
