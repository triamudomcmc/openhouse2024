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

    secret: process.env.NEXTAUTH_SECRET
})