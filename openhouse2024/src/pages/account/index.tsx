"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../../components/UserCard";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";

export default function AccountPage() {
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login')// The user is not authenticated, handle it here.
    },
  });
  const router = useRouter();
  function handleSignout() {
    signOut()
  }
  function handleClub() {
    router.push('/club')
  }
  function handleForm() {
    router.push('/account/form')
  }

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

        <button type="button" onClick={handleForm} className=" absolute left-1/2 -translate-x-1/2 w-1/3 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 ">Form</button>
        <button type="button" onClick={handleClub} className=" absolute mt-48 left-1/2 -translate-x-1/2 w-1/3 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 ">Club</button>
        <button type="button" onClick={handleSignout} className=" absolute left-1/2 mt-96  -translate-x-1/2 w-1/3 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 ">Sign out</button>
      </>
    );
  }
