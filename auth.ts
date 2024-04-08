import NextAuth, { NextAuthConfig } from "next-auth";
import github from "next-auth/providers/github";
import google from "next-auth/providers/google";

export const config: NextAuthConfig = {
  providers: [
    github({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    }),
    google({
      clientId: process.env.AUTH_GOOGLE_ID,
      clientSecret: process.env.AUTH_GOOGLE_SECRET,
    }),
  ],
  basePath: "/api/auth",
  callbacks: {
    authorized({ request, auth }) {
      try {
        const { pathname } = request.nextUrl;
        if (pathname === "/data") {
          return !!auth;
        }
        return true;
      } catch (error) {
        console.log(error);
      }
    },
    jwt({ token, trigger, session }) {
      if (trigger === "update") {
        token.name = session.user.name;
      }
      return token;
    },
  },
};

export const { handlers, auth, signIn, signOut } = NextAuth(config);
