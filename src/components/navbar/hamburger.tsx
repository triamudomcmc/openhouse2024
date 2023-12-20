import { useState, useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";

export default function Hamburger() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-[3px] rounded-full bg-white transition ease transform duration-300`;
  const { data: session } = useSession();
  const [inSession, SetInSession] = useState(false);

  useEffect(() => {
    if (session) {
      SetInSession(true);
    } else {
      SetInSession(false);
    }
  });

  return (
    <>
      <button
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
        className={
          isOpen
            ? " overflow-x-hidden absolute left-0 translate-x-0  z-10 w-full bg-[#935AE3] overflow-hidden  bg-opacity-80 top-16 duration-500 ease-out transition-all "
            : "absolute z-60 w-full bg-[#935AE3] overflow-hidden bg-opacity-80 top-16 translate-x-full duration-500 ease-out transition-all"
        }
      >
        <Link className=" w-full" href="/">
          <div className=" text-right pr-4 text-white border-y border-gray-100 py-2 text-2xl">
            หน้าแรก
          </div>
        </Link>
        <Link className=" w-full " href="/clubs">
          <div className=" text-right pr-4 text-white border-b border-gray-100 py-2 text-2xl">
            ชมรม
          </div>
        </Link>
        <Link className=" w-full " href="/directions">
          <div className=" text-right pr-4 text-white border-b border-gray-100 py-2 text-2xl">
            การเดินทางมาโรงเรียนเตรียมฯ
          </div>
        </Link>
        {/* <Link
          className={inSession ? " text-right h-16  text-white" : "hidden"}
          href="/account"
        >
          <div className=" text-right pr-4 text-white border-b border-gray-100 py-2 text-2xl">
            Account
          </div>
        </Link>
        <Link
          className={inSession ? "hidden " : " text-right pr-4 text-white"}
          href="/auth"
        >
          <div className=" text-right pr-4 text-white border-b border-gray-100 py-2 text-2xl">
          เข้าสู่ระบบ
          </div>
        </Link> */}
      </div>
    </>
  );
}
