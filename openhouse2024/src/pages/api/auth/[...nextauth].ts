import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: process.env.CLIENT_ID!,
            clientSecret: process.env.CLIENT_SECRET!,
        })
    ],
    pages: {
        newUser: '/account/form'
    },

    jwt: {
        maxAge: 60 * 60 * 24 * 30,
    },

    secret: process.env.NEXTAUTH_SECRET
})