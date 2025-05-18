import { AgencyMongoose } from "./agency.js";
export const agencyStore = {
    async find() {
        const agencies = await AgencyMongoose.find().lean();
        return agencies;
    },
    async findOne(id) {
        const agency = await AgencyMongoose.findOne({ _id: id }).lean();
        return agency;
    },
    async findBy(code, AgencyName) {
        const agency = await AgencyMongoose.findOne({
            AgencyName,
            code,
        }).lean();
        return agency;
    },
};
