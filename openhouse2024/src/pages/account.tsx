"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../components/UserCard";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function LoginComponents() {
  const { data: session } = useSession();
  const router = useRouter();
  function handleSignout() {
    signOut()
    router.push('/')
  }

  useEffect(() => {
    if (!session) {
        router.push('/')
      }
    }
    )
    return (
      <>
        <button
          onClick={handleSignout}
          type="button"
          className="bg-blue-500 rounded-md mt-20"
        >
          Sign Out of google
        </button>

        <UserCard user={session?.user} />
      </>
    );
  }
