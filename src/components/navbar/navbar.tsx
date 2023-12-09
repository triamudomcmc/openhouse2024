import React from "react";
import Link from "next/dist/client/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect } from "react";
import Hamburger from "./hamburger";
import { useRouter } from "next/router";
import OPHLogo from "@/vectors/OPHLogo";
import OPHLogoM from "@/vectors/OPHLogoM";

export default function Navbar() {
  const { data: session } = useSession();
  const [inSession, SetInSession] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      SetInSession(true);
      console.log(inSession);
    } else {
      SetInSession(false);
      console.log(inSession);
    }
  });

  return (
    <div className=" fixed top-0 w-full z-[999]">
      <nav className=" max-md:hidden bg-[#935AE3] bg-opacity-90 flex align-middle  justify-between gap-10 text-center z-20 top-0 h-16 text-white ">
        <div className="flex w-2/5 justify-center h-full items-center">
          <p className="font-[700] text-[20px] leading-[24px]">
            TRIAM UDOM
            <span className="font-[400] block text-[15px] leading-[18px]">
              OPEN HOUSE 2024
            </span>
          </p>
        </div>
        <div className="flex w-full justify-end gap-[60px] mr-[60px] h-full items-center  ">
          <div
            className={
              router.pathname === "/"
                ? " text-center py-1 my-2 font-semibold underline "
                : "text-center py-1 my-2 "
            }
          >
            <Link href="/">หน้าแรก</Link>
          </div>
          <div
            className={
              router.pathname === "/clubs"
                ? " text-center py-1 my-2 font-semibold underline "
                : "text-center py-1 my-2 "
            }
          >
            <Link href="/clubs">ชมรม</Link>
          </div>

          <div
            className={
              router.pathname === "/shows"
                ? " text-center py-1 my-2 font-semibold underline "
                : "text-center py-1 my-2"
            }
          >
            <Link href="/shows">การแสดง</Link>
          </div>

          <div
            className={
              router.pathname === "/directions"
                ? " text-center py-1 my-2 font-semibold underline "
                : "text-center py-1 my-2"
            }
          >
            <Link href="/directions">การเดินทางมาโรงเรียนเตรียมฯ</Link>
          </div>

          <div className={inSession ? " block " : "hidden"}>
            <div
              className={
                router.pathname === "/account"
                  ? " text-center py-1 my-2 font-semibold underline "
                  : "text-center py-1 my-2 "
              }
            >
              <Link href="/account"> Account </Link>
            </div>
          </div>
          <div className={inSession ? " hidden " : " block "}>
            <div
              className={
                router.pathname === "/auth"
                  ? " text-center py-1 my-2 font-semibold underline "
                  : "text-center py-1 my-2 "
              }
            >
              <Link href="/auth"> เข้าสู่ระบบ </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" md:hidden bg-[#935AE3] bg-opacity-80 flex align-middle  justify-between px-5 gap-20 h-16  text-center z-20 top-0 ">
        <Link href="/" className=" items-center flex justify-center">
          <p className="font-[700] text-[20px] leading-[24px] text-white">
            TRIAM UDOM
            <span className="font-[400] block text-[15px] leading-[18px]">
              OPEN HOUSE 2024
            </span>
          </p>
        </Link>
        <div className=" my-auto">
          <Hamburger />
        </div>
      </nav>
    </div>
  );
}
