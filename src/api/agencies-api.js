import Boom from "@hapi/boom";
import { db } from "../models/db.js";
export const agenciesApi = {
    find: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const agencies = await db.agencyStore.find();
            return h.response(agencies).code(200);
        },
    },
    findOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            try {
                const agency = await db.agencyStore.findOne(request.params.id);
                if (agency === null) {
                    return Boom.notFound("No Agency with this id");
                }
                return h.response(agency).code(200);
            }
            catch (err) {
                return Boom.notFound("No Agency with this id");
            }
        },
    },
    create: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            const agency = await db.agencyStore.add(request.payload);
            if (agency !== null) {
                return h.response(agency).code(201);
            }
            return Boom.badImplementation("error creating agency");
        },
    },
    deleteAll: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            await db.agencyStore.delete();
            return h.response().code(204);
        },
    },
    deleteOne: {
        auth: {
            strategy: "jwt",
        },
        handler: async function (request, h) {
            await db.agencyStore.deleteOne(request.params.id);
            return h.response().code(204);
        },
    },
};
