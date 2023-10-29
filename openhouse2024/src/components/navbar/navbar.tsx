import React from "react";
import Link from "next/dist/client/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Hamburger from "./hamburger";

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
    <div className=" fixed top-0 w-full z-50">
    <nav className=" max-md:hidden bg-white bg-opacity-70 flex align-middle  justify-end gap-10 border-y-2 text-center z-20 top-0 ">
    
    <div className="flex w-1/3 justify-evenly ">
      <div className=" text-center py-2 ">
          <Link href="/" >Home</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/account/form">Form</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link3</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/">Link4</Link>
      </div>
      <div className=" text-center py-2 ">
          <Link href="/account" className={inSession ? " flex text-center" : "hidden"} > Account </Link>
          <Link href="/Login" className={inSession ? " hidden " : " flex text-center"} > Login </Link>
      </div>
    </div>
    </nav>
    <nav className=" md:hidden bg-white bg-opacity-70 flex align-middle  justify-end gap-10 border-2 text-center z-20 top-0 ">
    <div className="flex w-1/3 justify-end ">
        <Hamburger/>
    </div>
  </nav>
  </div>
);
}