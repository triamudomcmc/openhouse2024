"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import LoginBg from "@/vectors/bg/LoginBg";
import LoginBgM from "@/vectors/bg/LoginBgM";
import LoginRight from "@/vectors/login/LoginRight";
import LoginLeft from "@/vectors/login/LoginLeft";
import LoginCircle from "@/vectors/login/LoginCircle";
import LoginCircle2 from "@/vectors/login/LoginCircle2";
import LoginLight from "@/vectors/login/LoginLight";
import GoogleLogin from "@/vectors/login/LoginGoogle";
import Register from "@/vectors/login/register";
import Tucmc from "@/vectors/tucmc";

export default function LoginPage() {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (session) {
        router.push('/account')
      }
    }
    )

    return (
      <> 
      <div className="overflow-hidden flex w-full">
      <div className="overflow-hidden relative w-full hidden lg:block h-screen bg-gradient-to-r from-[#2E1A56] to-[#381B5B]  -z-10">
        <LoginBg/>
        </div>
        <div className="overflow-hidden relative w-full h-screen block lg:hidden  from-[#2E1A56] to-[#381B5B]  -z-10">
        <LoginBgM/>
        </div>
        <div className=" hidden lg:flex absolute bottom-0 left-0  ">
        <LoginLeft/>
        </div>
        <div className=" flex absolute top-0 right-0  ">
        <LoginRight/>
        </div>
        <div className="hidden lg:flex absolute bottom-10 right-52  ">
        <LoginCircle/>
        </div>
        <div className=" absolute flex items-center align-middle justify-center max-lg:w-11/12 max-lg:h-screen z-10 max-lg:left-1/2 max-lg:-translate-x-1/2 lg:bottom-72  lg:right-60 lg:mr-10">
        <button onClick={() => signIn('google')} 
        className="px-12 py-5 border flex gap-2 border-slate-200 bg-white opacity-80 backdrop-blur-sm rounded-full text-slate-700  hover:border-slate-400  hover:text-slate-900 hover:shadow transition duration-150">
            <GoogleLogin />
            <span className=" ml-3 text-2xl">Sign up with Google</span>
        </button>
        </div>
       <div className="hidden lg:block absolute top-0 left-10 h-screen overflow-hidden">
        <LoginLight/>
        </div>
        <div className=" hidden lg:block absolute top-60 lg:left-32 left-11 text-right ">
        <Register />
        </div>
        <div className="hidden lg:flex absolute bottom-0 right-0 text-right ">
        <LoginCircle2 />
        </div>

        <div className="flex lg:hidden absolute bottom-0 left-1/2 -translate-x-1/2 text-right ">
        <Tucmc />
        </div>
        
    </div>
    </>
    );
  }
