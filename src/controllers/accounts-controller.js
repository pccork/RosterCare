import { db } from "../models/db.js";
import bcrypt from 'bcrypt';
export const accountsController = {
    index: {
        auth: false,
        handler: async function (request, h) {
            return h.view("Main", { title: "Welcome to RosterCare" });
        },
    },
    showSignup: {
        auth: false,
        handler: async function (request, h) {
            return h.view("Signup", { title: "Sign up for RosterCare" });
        },
    },
    signup: {
        auth: false,
        handler: async function (request, h) {
            const user = request.payload;
            await db.userStore.add(user);
            return h.redirect("/");
        },
    },
    showLogin: {
        auth: false,
        handler: async function (request, h) {
            return h.view("Login", { title: "Login to RosterCare" });
        },
    },
    login: {
        auth: false,
        handler: async function (request, h) {
            const { email, password } = request.payload;
            const user = await db.userStore.findBy(email);
            if (!user) {
                return h.redirect("/");
            }
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (!passwordMatch) {
                return h.redirect("/");
            }
            request.cookieAuth.set({ id: user._id });
            return h.redirect("/roster");
        },
    },
    logout: {
        handler: async function (request, h) {
            request.cookieAuth.clear();
            return h.redirect("/");
        },
    },
    async validate(request, session) {
        const user = await db.userStore.findOne(session.id);
        if (!user) {
            return { isValid: false };
        }
        return { isValid: true, credentials: user };
    },
};
