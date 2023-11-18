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
      <nav className=" max-md:hidden bg-white bg-opacity-70 flex align-middle  justify-between gap-10 text-center z-20 top-0 ">
        <div className="relative top-0 z-50">
          <svg
            height="100%"
            viewBox="0 0 634 68"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M-108 -13L496 -28L634 109L-54 133L-108 -13Z"
              fill="url(#paint0_linear_116_1091)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_116_1091"
                x1="263"
                y1="-28"
                x2="263"
                y2="133"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#7625B9" />
                <stop offset="1" stop-color="#4924D1" />
              </linearGradient>
            </defs>
          </svg>
          <div className=" absolute left-0 top-0 z-[49]">
            <svg
              height="48px"
              viewBox="0 0 696 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 -34H540.078L696 121H0V-34Z"
                fill="url(#paint0_linear_116_1087)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_116_1087"
                  x1="348"
                  y1="-34"
                  x2="348"
                  y2="121"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.171875" stop-color="#8A4ECF" />
                  <stop
                    offset="0.744792"
                    stop-color="#4B69E9"
                    stop-opacity="0.58"
                  />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className=" absolute top-0 left-0 z-[48]">
            <svg
              height="48"
              viewBox="0 0 751 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 -41H582.756L751 126H0V-41Z"
                fill="url(#paint0_linear_130_1061)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_130_1061"
                  x1="375.5"
                  y1="-41"
                  x2="375.5"
                  y2="126"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#935AE3" />
                  <stop offset="1" stop-color="#7F66F0" stop-opacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div className=" h-12 w-[400px] absolute top-0 items-center flex justify-center left-0 mx-auto z-[51] ">
            <Link href="/">
              <OPHLogo />
            </Link>
          </div>
        </div>
        <div className="flex w-2/5 justify-evenly ">
          <div
            className={
              router.pathname === "/"
                ? " text-center py-1 my-2 w-24 bg-gradient-to-b from-[#8656D4] to-[#8284E8] rounded-2xl "
                : "text-center py-1 my-2 w-24"
            }
          >
            <Link href="/">Home</Link>
          </div>
          <div
            className={
              router.pathname === "/account/form"
                ? " text-center py-1 my-2 w-24 bg-gradient-to-b from-[#8656D4] to-[#8284E8] rounded-2xl "
                : "text-center py-1 my-2 w-24"
            }
          >
            <Link href="/account/form">Form</Link>
          </div>

          <div className={inSession ? " block " : "hidden"}>
            <div
              className={
                router.pathname === "/account"
                  ? " text-center py-1 my-2 w-24 bg-gradient-to-b from-[#8656D4] to-[#8284E8] rounded-2xl "
                  : "text-center py-1 my-2 w-24"
              }
            >
              <Link href="/account"> Account </Link>
            </div>
          </div>
          <div className={inSession ? " hidden " : " block "}>
            <div
              className={
                router.pathname === "/Login"
                  ? " text-center py-1 my-2 w-24 bg-gradient-to-b from-[#8656D4] to-[#8284E8] rounded-2xl "
                  : "text-center py-1 my-2 w-24"
              }
            >
              <Link href="/Login"> Login </Link>
            </div>
          </div>
        </div>
      </nav>
      <nav className=" md:hidden bg-white bg-opacity-70 flex align-middle  justify-between px-5 gap-20 border-2 text-center z-20 top-0 ">
        <Link href="/" className=" items-center flex justify-center">
          <OPHLogoM />
        </Link>
        <Hamburger />
      </nav>
    </div>
  );
}
