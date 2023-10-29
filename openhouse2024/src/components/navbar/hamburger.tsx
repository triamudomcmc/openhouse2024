import { useState ,useEffect } from "react";
import Link from "next/link";
import { useSession } from "next-auth/react";


export default function Hamburger() {
    const [isOpen, setIsOpen] = useState(false);
    const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;
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
    })
   
    return(
        <>
        <button
        className="flex flex-col h-10  w-10  rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
    >
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "rotate-45 translate-y-3 opacity-80 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
        <div className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"}`} />
        <div
            className={`${genericHamburgerLine} ${
                isOpen
                    ? "-rotate-45 -translate-y-3 opacity-80 group-hover:opacity-100"
                    : "opacity-50 group-hover:opacity-100"
            }`}
        />
    </button>

    <div className= {isOpen ? " overflow-x-hidden absolute left-0  z-10 w-full bg-white opacity-80 top-11 duration-500 ease-out transition-all " : "absolute z-60 w-full h-64 bg-white opacity-80 top-11 translate-x-[770px] duration-500 ease-out transition-all"}>
          <Link className=" w-full" href="/" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Home
            </div>
          </Link>
          <Link className=" w-full " href="/account/form" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Form
            </div>
          </Link>
          <Link className=" w-full " href="/account/form" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Link3
            </div>
          </Link>
          <Link className=" w-full " href="/account/form" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Link4
            </div>
          </Link>
          <Link  className={inSession ? " text-center" : "hidden"} href="/account" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Account
            </div>
          </Link>
          <Link  className={inSession ? "hidden " : " text-center"} href="/Login" >
            <div className=" text-end border-b border-slate-500 py-2 pr-11 text-2xl">
                Login
            </div>
          </Link>
        </div>


</>
    )
}