import { Request, ResponseToolkit } from "@hapi/hapi";
import { db } from "../models/db.js";

export const rostersController = {
    index: {
      handler: async function (request: Request, h: ResponseToolkit) {
        const loggedInUser = request.auth.credentials;
        const agencies = await db.agencyStore.find();
        return h.view("roster", 
          { title: "Record Roster",
            user: loggedInUser,
            agencies: agencies,
          });
      },
    },

    roster: {
        handler: async function (request: Request, h: ResponseToolkit) {
          try {
            const loggedInUser = request.auth.credentials;
            const rosterPayload = request.payload as any;
            const roster = {
              hour: rosterPayload.hour,
              profession: rosterPayload.profession,
              staff: loggedInUser.email,
              agency: rosterPayload.agency,
              lat: rosterPayload.lat,
              lng: rosterPayload.lng,
            };
            await db.rosterStore.add(roster);
    
            return h.redirect("/roster");
          } catch (err) {
            return h.view("Main", { errors: [{ message: err.message }] });
          }
        },
      },
      report: {
        handler: async function (request: Request, h: ResponseToolkit) {
          const loggedInUser = request.auth.credentials;
          const rosters = await db.rosterStore.find();
          return h.view("Report", {
            title: "Report",
            user: loggedInUser,
            rosters: rosters,
          });
        },
      },
  };
  