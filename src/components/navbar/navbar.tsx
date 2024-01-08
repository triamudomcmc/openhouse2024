import React from "react";
import Link from "next/dist/client/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { useState, useEffect, useRef } from "react";
import Hamburger from "./hamburger";
import { useRouter } from "next/router";
import OPHLogo from "@/vectors/OPHLogo";
import { motion } from "framer-motion";
import OPHLogoM from "@/vectors/OPHLogoM";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import OPHText from "@/vectors/OPHText";

export default function Navbar() {
  const { data: session, status } = useSession();
  const navbarRef = useRef<HTMLDivElement>(null);
  const [inSession, SetInSession] = useState(false);
  const [showShows, setShowShows] = useState(false);
  const [showOther, setShowOther] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (session) {
      SetInSession(true);
    } else {
      SetInSession(false);
    }
  }, [status]);

  useEffect(() => {
    const handleOutsideClick = (event: MouseEvent) => {
      const target = event.target as HTMLElement;

      if (
        (showShows && !target.closest(".showShows")) ||
        (showOther &&
          !target.closest(".showOther") &&
          !target.closest(".showShows"))
      ) {
        setShowShows(false);
        setShowOther(false);
      }
    };

    document.body.addEventListener("mousedown", handleOutsideClick);

    return () => {
      document.body.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [showShows, showOther]);

  return (
    <div ref={navbarRef} className="fixed top-0 w-full z-[999]">
      <div className=" fixed top-0 w-full z-[999]">
        <nav className=" max-md:hidden bg-[#935AE3] bg-opacity-90 flex align-middle  justify-between gap-10 text-center z-20 top-0 h-16 text-white ">
          <div className="flex w-1/2 justify-center h-full items-center">
            <Link className=" w-fit flex items-center " href="/">
              <OPHLogo className=" h-12" />
              <p className="font-[700] text-[20px] leading-[24px]">
                TRIAM UDOM
                <span className="font-[400] block text-[15px] leading-[18px]">
                  OPEN HOUSE 2024
                </span>
              </p>
            </Link>
          </div>
          <div className="flex w-full justify-end lg:gap-[60px] md:gap-5 mr-[60px] h-full items-center lg:text-base md:text-sm ">
            <div
              className={
                router.pathname === "/"
                  ? " text-center py-1 my-2 font-semibold underline "
                  : "text-center py-1 my-2 "
              }
            >
              <Link
                href="/"
                onClick={() => {
                  setShowShows(false);
                  setShowOther(false);
                }}
              >
                หน้าแรก
              </Link>
            </div>
            <div
              className={
                router.pathname === "/theatre" || router.pathname === "/larn70"
                  ? "text-center py-1 my-2 font-semibold underline flex  relative "
                  : "text-center py-1 my-2 flex  relative"
              }
            >
              <button
                onClick={() => {
                  setShowShows(!showShows);
                }}
                className=" flex items-center"
              >
                ตารางการแสดงฯ
                <ChevronDownIcon
                  className={
                    showShows
                      ? " w-4 rotate-180 transition-transform duration-150 "
                      : "w-4 rotate-0 transition-transform duration-150"
                  }
                />
              </button>
              {showShows && (
                <motion.div
                  className=" absolute block top-9 -left-[25px]  shadow-xl py-2  w-40  bg-[#774CB4] bg-opacity-90  rounded-xl text-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                >
                  <Link
                    href="/theatre"
                    className="showShows block w-full  font-normal px-2 pb-2 border-b"
                    onClick={() => {
                      setShowShows(false);
                      setShowOther(false);
                    }}
                  >
                    หอประชุมฯ
                  </Link>
                  <Link
                    href="/larn70"
                    className="showShows block w-full  font-normal mt-2 px-2"
                    onClick={() => {
                      setShowShows(false);
                      setShowOther(false);
                    }}
                  >
                    ลาน 70 ปีฯ
                  </Link>
                </motion.div>
              )}
            </div>
            <div
              className={
                router.pathname === "/clubs"
                  ? " text-center py-1 my-2 font-semibold underline "
                  : "text-center py-1 my-2 "
              }
            >
              <Link
                href="/clubs"
                onClick={() => {
                  setShowShows(false);
                  setShowOther(false);
                }}
              >
                ชมรม
              </Link>
            </div>

            <div
              className={
                router.pathname === "/admission" ||
                router.pathname === "/directions"
                  ? " text-center py-1 my-2 font-semibold underline flex  relative "
                  : "text-center py-1 my-2 flex  relative"
              }
            >
              <button
                onClick={() => {
                  setShowOther(!showOther);
                }}
                className=" flex items-center"
              >
                ข้อมูลเพิ่มเติม
                <ChevronDownIcon
                  className={
                    showOther
                      ? " w-4 rotate-180 transition-transform duration-150 "
                      : "w-4 rotate-0 transition-transform duration-150"
                  }
                />
              </button>
              {showOther && (
                <motion.div
                  className=" absolute block top-9 -left-[25px]  shadow-xl   w-40  bg-[#774CB4] bg-opacity-90  rounded-xl text-center"
                  initial={{ opacity: 0, y: -10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: 0,
                  }}
                >
                  <Link
                    href="/admission"
                    className="showOther block w-full  font-normal px-2 py-2 border-b"
                    onClick={() => {
                      setShowOther(false);
                      setShowShows(false);
                    }}
                  >
                    การสอบเข้า ม.4
                  </Link>
                  <Link
                    href="/directions"
                    className="showOther block w-full  font-normal py-2 px-2 border-b"
                    //className="showOther block w-full  font-normal py-2 px-2 "
                    onClick={() => {
                      setShowOther(false);
                      setShowShows(false);
                    }}
                  >
                    การเดินทางมาโรงเรียน
                  </Link>
                  <Link
                    href="/map"
                    className="showOther block w-full  font-normal py-2 px-2"
                    onClick={() => {
                      setShowOther(false);
                      setShowShows(false);
                    }}
                  >
                    ผังงาน
                  </Link>
                </motion.div>
              )}
            </div>

            <div className={inSession ? " block " : "hidden"}>
              <div
                className={
                  router.pathname === "/account"
                    ? " text-center py-1 my-2 font-semibold underline "
                    : "text-center py-1 my-2 "
                }
              >
                <Link
                  href="/account"
                  onClick={() => {
                    setShowShows(false);
                    setShowOther(false);
                  }}
                >
                  บัญชี
                </Link>
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
                <Link
                  href="/auth"
                  onClick={() => {
                    setShowShows(false);
                    setShowOther(false);
                  }}
                >
                  เข้าสู่ระบบ
                </Link>
              </div>
            </div>
          </div>
        </nav>
        <nav className=" md:hidden bg-[#935AE3] bg-opacity-80 flex align-middle justify-between px-2 gap-10 h-16  text-center z-20 top-0 ">
          <Link href="/" className=" items-center flex justify-center  ">
            <OPHLogo className=" h-8 w-auto" />
            <OPHText className=" h-10" />
          </Link>
          <div className=" my-auto">
            <Hamburger />
          </div>
        </nav>
      </div>
    </div>
  );
}
