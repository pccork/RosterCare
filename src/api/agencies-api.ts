import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const agenciesApi = {
  find: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const agencies = await db.agencyStore.find();
      return h.response(agencies).code(200);
    },
  },

  findOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const agency = await db.agencyStore.findOne(request.params.id);
        if (agency === null) {
          return Boom.notFound("No Agency with this id");
        }
        return h.response(agency).code(200);
      } catch (err) {
        return Boom.notFound("No Agency with this id");
      }
    },
  },

  create: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
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
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.agencyStore.delete();
      return h.response().code(204);
    },
  },

  deleteOne: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      await db.agencyStore.deleteOne(request.params.id);
      return h.response().code(204);
    },
  },
};
