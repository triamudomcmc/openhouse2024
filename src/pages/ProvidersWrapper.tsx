"use client"
import { SessionProvider } from "next-auth/react"; 

export default function ProvidersWrapper({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <SessionProvider>
            {children} {/* Entire app -> has access to NextAuth */}
        </SessionProvider>
    )
}