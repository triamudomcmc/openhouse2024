import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
        }),
        FacebookProvider({
            clientId: process.env.FACEBOOK_CLIENT_ID!,
            clientSecret: process.env.FACEBOOK_CLIENT_SECRET!
          })
    ],
    pages: {
        newUser: process.env.NEXTAUTH_SECRET
    },

    secret: "e29442e61ad354e5cb0831e2e8359e8fb50cf024ad5a8f407c8f9de63bdf7371"
})