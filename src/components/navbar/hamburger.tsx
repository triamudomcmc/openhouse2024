import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

export default function Hamburger() {
  const navbarRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[3px] rounded-full bg-white transition ease transform duration-300`;
  const arrow = `w-2 h-[2px] bg-white transition ease transform duration-300`;
  const { data: session, status } = useSession();
  const [inSession, SetInSession] = useState(false);
  const [showShows, setShowShows] = useState(false);
  const [showOther, setShowOther] = useState(false);

  useEffect(() => {
    if (session) {
      SetInSession(true);
    } else {
      SetInSession(false);
    }
  }, [status, session]);

  useEffect(() => {
    setShowOther(false);
    setShowShows(false);

    const detectOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const isNavbarClicked =
        isOpen && navbarRef.current && !navbarRef.current.contains(target);
      const isButtonClicked =
        buttonRef.current && buttonRef.current.contains(target);

      if (isNavbarClicked && !isButtonClicked) {
        setIsOpen(false);
      }
    };

    document.body.addEventListener("mousedown", detectOutside);

    return () => {
      document.body.removeEventListener("mousedown", detectOutside);
    };
  }, [isOpen]);

  return (
    <>
      <button
        ref={buttonRef}
        className="flex flex-col h-10  w-10  rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-[10px] opacity-80 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-[10px] opacity-80 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>

      <div
        ref={navbarRef}
        className={
          isOpen
            ? "overflow-x-hidden absolute left-0 translate-x-0  z-10 w-full bg-[#7f52bd] overflow-hidden  bg-opacity-80 top-16 duration-500 ease-out transition-all  "
            : "absolute z-60 w-full bg-[#7f52bd] overflow-hidden bg-opacity-80 top-16 translate-x-full duration-500 ease-out transition-all"
        }
      >
        <Link
          className=" w-full"
          href="/"
          onClick={() => {
            setShowShows(false);
            setShowOther(false);
            setIsOpen(false);
          }}
        >
          <div className=" text-left pl-4 text-white py-2 text-lg">หน้าแรก</div>
        </Link>
        <button
          className={
            showShows
              ? " text-left px-4 text-white py-2 text-lg w-full flex justify-between items-center bg-[#462A86] bg-opacity-80 transition-all  "
              : "text-left px-4 text-white py-2 text-lg w-full flex justify-between items-center transition-all"
          }
          onClick={() => {
            setShowShows(!showShows);
          }}
        >
          ตารางการแสดง
          <div className=" flex relative">
            <div
              className={`${arrow} ${
                showShows
                  ? " rounded-l-full absolute -left-[5px] top-0    "
                  : "rotate-45  absolute -left-[5px] top-0 rounded-l-full "
              }`}
            ></div>
            <div
              className={`${arrow} ${
                showShows ? " rounded-r-full   " : "-rotate-45  rounded-r-full "
              }`}
            ></div>
          </div>
        </button>
        {showShows && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
            }}
          >
            <Link
              className=" w-full "
              href="/theatre"
              onClick={() => {
                setShowShows(false);
                setShowOther(false);
                setIsOpen(false);
              }}
            >
              <div className=" text-left pl-8 text-white bg-[#462A86] bg-opacity-80 py-2 text-sm">
                หอประชุมฯ
              </div>
            </Link>
            <Link
              className=" w-full "
              href="/larn70"
              onClick={() => {
                setShowShows(false);
                setShowOther(false);
                setIsOpen(false);
              }}
            >
              <div className=" text-left pl-8 text-white bg-[#462A86] bg-opacity-80 py-2 text-sm">
                ลาน 70 ปีฯ
              </div>
            </Link>
          </motion.div>
        )}
        <Link
          className=" w-full "
          href="/clubs"
          onClick={() => {
            setShowShows(false);
            setShowOther(false);
            setIsOpen(false);
          }}
        >
          <div className=" text-left pl-4 text-white py-2 text-lg">ชมรม</div>
        </Link>
        <button
          className={
            showOther
              ? " text-left px-4 text-white py-2 text-lg w-full flex justify-between items-center bg-[#462A86] bg-opacity-80 transition-all  "
              : "text-left px-4 text-white py-2 text-lg w-full flex justify-between items-center transition-all"
          }
          onClick={() => {
            setShowOther(!showOther);
          }}
        >
          ข้อมูลเพิ่มเติม
          <div className=" flex relative">
            <div
              className={`${arrow} ${
                showOther
                  ? " rounded-l-full absolute -left-[5px] top-0    "
                  : "rotate-45  absolute -left-[5px] top-0 rounded-l-full "
              }`}
            ></div>
            <div
              className={`${arrow} ${
                showOther ? " rounded-r-full   " : "-rotate-45  rounded-r-full "
              }`}
            ></div>
          </div>
        </button>
        {showOther && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.3,
              delay: 0,
            }}
          >
            <Link
              className=" w-full "
              href="/admission"
              onClick={() => {
                setShowShows(false);
                setShowOther(false);
                setIsOpen(false);
              }}
            >
              <div className=" text-left pl-8 text-white bg-[#462A86] bg-opacity-80 py-2 text-sm">
                การสอบเข้า ม.4
              </div>
            </Link>
            <Link
              className=" w-full "
              href="/directions"
              onClick={() => {
                setShowShows(false);
                setShowOther(false);
                setIsOpen(false);
              }}
            >
              <div className=" text-left pl-8 text-white bg-[#462A86] bg-opacity-80 py-2 text-sm">
                การเดินทางมาโรงเรียน
              </div>
            </Link>
            <Link
              className=" w-full "
              href="/map"
              onClick={() => {
                setShowShows(false);
                setShowOther(false);
                setIsOpen(false);
              }}
            >
              <div className=" text-left pl-8 text-white bg-[#462A86] bg-opacity-80 py-2 text-sm">
                ผังงาน
              </div>
            </Link>
          </motion.div>
        )}
        <Link
          className={inSession ? " text-left  lext-white" : "hidden"}
          onClick={() => {
            setShowShows(false);
            setShowOther(false);
            setIsOpen(false);
          }}
          href="/account"
        >
          <div className=" text-left pl-4 text-white py-2 text-lg">บัญชี</div>
        </Link>
        <Link
          className={inSession ? "hidden " : " text-left  lext-white"}
          onClick={() => {
            setShowShows(false);
            setShowOther(false);
            setIsOpen(false);
          }}
          href="/auth"
        >
          <div className=" text-left pl-4 text-white py-2 text-lg">
            เข้าสู่ระบบ
          </div>
        </Link>
      </div>
    </>
  );
}
