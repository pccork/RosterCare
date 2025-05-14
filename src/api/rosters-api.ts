import Boom from "@hapi/boom";
import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";
import { Agency, Roster } from "../types/roster-types.js";

export const rostersApi = {
  findAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      try {
        const rosters = await db.rosterStore.find();
        return h.response(rosters).code(200);
      } catch (err) {
        return Boom.serverUnavailable("Database Error");
      }
    },
  },

  findByAgency: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const rosters = (await db.rosterStore.findBy(request.params.id)) as Roster;
      return h.response(rosters).code(200);
    },
  },

  makeRoster: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      const agency = (await db.agencyStore.findOne(request.params.id)) as Agency;
      if (agency === null) {
        return Boom.notFound("No Agency with this id");
      }
      const rosterPayload = request.payload as Roster;
      const roster = {
        hour: rosterPayload.hour,
        profession: rosterPayload.profession,
        staff: request.auth.credentials._id,
        agency: agency,
        lat: rosterPayload.lat,
        lng: rosterPayload.lng,
      };
      const newRoster = (await db.rosterStore.add(roster)) as Roster;
      return h.response(newRoster).code(200);
    },
  },

  deleteAll: {
    auth: {
      strategy: "jwt",
    },
    handler: async function (request: Request, h: ResponseToolkit) {
      console.log("delete...");
      await db.rosterStore.delete();
      return h.response().code(204);
    },
  },
};
