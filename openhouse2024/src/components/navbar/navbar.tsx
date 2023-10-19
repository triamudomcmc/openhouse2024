import React from "react";
import Link from "next/dist/client/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";

export default function Navbar() {
    const { data: session } = useSession();
    const [inSession,SetInSession] = useState(false);

    useEffect(() => {
    if (session) {
        SetInSession(true);
        console.log(inSession);
      } else {
        SetInSession(false);
        console.log(inSession);
      }
    }
    )

    return (
    <div className=" fixed top-0 w-full">
    <nav className="bg-white flex align-middle  justify-end gap-10 border-2 text-center z-20 top-0 ">
    <div className="flex w-1/3 justify-evenly ">
      <div className=" text-center py-2 ">
          <Link href="/" >Home</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/form">form</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link3</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link4</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/account" className={inSession ? " flex text-center" : "hidden"} > account </Link>
          <Link href="/login" className={inSession ? " hidden " : " flex text-center"} > login </Link>
      </div>
    </div>
  </nav>
  </div>
);
}