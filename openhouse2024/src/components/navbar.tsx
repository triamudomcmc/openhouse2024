import React from "react";
import LoginComponents from "@/pages/Login";
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
    <nav className="bg-white flex align-middle  justify-end gap-10 border-2 text-center z-20  ">
    <div className="flex w-1/3 justify-evenly ">
      <div className=" text-center py-2 ">
          <Link href="/" >Home</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link2</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link3</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link4</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/Login" className={inSession ? " flex text-center" : "hidden"} > account </Link>
          <button className={inSession ? "hidden" : " flex text-center"} 
          onClick={() => signIn()}
          type="button"> 
          sign in
          </button>
      </div>
      
    </div>
  </nav>
);
}