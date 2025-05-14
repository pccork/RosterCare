import { agenciesApi } from "./api/agencies-api.js";
import { rostersApi } from "./api/rosters-api.js";
import { userApi } from "./api/users-api.js";
export const apiRoutes = [
    { method: "GET", path: "/api/users", config: userApi.find },
    { method: "POST", path: "/api/users", config: userApi.create },
    { method: "DELETE", path: "/api/users", config: userApi.deleteAll },
    { method: "GET", path: "/api/users/{id}", config: userApi.findOne },
    { method: "POST", path: "/api/users/authenticate", config: userApi.authenticate },
    { method: "GET", path: "/api/agencies", config: agenciesApi.find },
    { method: "GET", path: "/api/agencies/{id}", config: agenciesApi.findOne },
    { method: "POST", path: "/api/agencies", config: agenciesApi.create },
    { method: "DELETE", path: "/api/agencies/{id}", config: agenciesApi.deleteOne },
    { method: "DELETE", path: "/api/agencies", config: agenciesApi.deleteAll },
    { method: "GET", path: "/api/rosters", config: rostersApi.findAll },
    { method: "GET", path: "/api/agencies/{id}/rosters", config: rostersApi.findByAgency },
    { method: "POST", path: "/api/agencies/{id}/rosters", config: rostersApi.makeRoster },
    { method: "DELETE", path: "/api/rosters", config: rostersApi.deleteAll },
];
