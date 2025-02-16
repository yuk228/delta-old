import NextAuth, { NextAuthConfig } from "next-auth"
import Discord from "next-auth/providers/discord"

export const config: NextAuthConfig = {
    providers: [Discord({clientId: process.env.AUTH_DISCORD_ID, clientSecret: process.env.AUTH_DISCORD_SECRET})],
    basePath: "/api/auth",
    callbacks: {
        authorized({ request, auth }) {
            try {
                const { pathname } = request.nextUrl;
                if (pathname === "/dashboard") return !!auth;
                return true;
            } catch (err) {
                console.log(err);
            }
        },
        jwt({token, trigger, session}) {
            if (trigger === "update") token.name = session.user.name;
            return token;
        }
    },
};
export const { handlers, auth, signIn, signOut } = NextAuth(config);