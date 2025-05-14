import { agenciesApi } from "./api/agencies-api.js";
import { rostersApi } from "./api/rosters-api.js";
import { userApi } from "./api/users-api.js";

export const apiRoutes = [
  { method: "GET" as const, path: "/api/users", config: userApi.find },
  { method: "POST" as const, path: "/api/users", config: userApi.create },
  { method: "DELETE" as const, path: "/api/users", config: userApi.deleteAll },
  { method: "GET" as const, path: "/api/users/{id}", config: userApi.findOne },
  { method: "POST" as const, path: "/api/users/authenticate", config: userApi.authenticate },

  { method: "GET" as const, path: "/api/agencies", config: agenciesApi.find },
  { method: "GET" as const, path: "/api/agencies/{id}", config: agenciesApi.findOne },
  { method: "POST" as const, path: "/api/agencies", config: agenciesApi.create },
  { method: "DELETE" as const, path: "/api/agencies/{id}", config: agenciesApi.deleteOne },
  { method: "DELETE" as const, path: "/api/agencies", config: agenciesApi.deleteAll },
  { method: "GET" as const, path: "/api/rosters", config: rostersApi.findAll },
  { method: "GET" as const, path: "/api/agencies/{id}/rosters", config: rostersApi.findByAgency },
  { method: "POST" as const, path: "/api/agencies/{id}/rosters", config: rostersApi.makeRoster },
  { method: "DELETE" as const, path: "/api/rosters", config: rostersApi.deleteAll },
];
