import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/navigation'
import { useEffect } from "react";
import LoginLeft from "@/vectors/login/LoginLeft";
import GoogleLogin from "@/vectors/login/LoginGoogle";
import Tower from "@/vectors/login/tower";
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
      <div className="w-screen h-screen bg-gradient-to-b from-[#444DAF] from-0% via-[#8C7BD7] via-30% to-[#FAFAEE] to-100% shadow relative  " >
        <div className=" absolute top-1/2 -translate-y-1/2   xl:mr-[100px]  lg:mr-[00px] lg:right-40 max-lg:left-1/2 sm:top-1/2 lg:translate-x-0  sm:-translate-x-1/2  z-30  ">
        <button onClick={() => signIn('google')} 
        className="px-8 py-5 border  gap-2 border-slate-200 bg-white opacity-80 backdrop-blur-sm rounded-full text-slate-700  hover:border-slate-400 lg:w-[400px] sm:w-[300px] hover:text-slate-900 hover:shadow transition duration-150 flex justify-center">
            <GoogleLogin />
            <span className=" ml-3 lg:text-2xl sm:text-lg">Sign up with Google</span>
        </button>
        </div>

        <div className=" h-screen items-center flex">
          <div className=" w-[400px] ml-[200px] ">
          <div className=" flex justify-center w-full ">
            <p className="w-[615px] text-center text-white text-9xl font-bold font-Thai z-10 lg:flex hidden">Register</p>
          </div>
          <div className=" flex justify-center lg:mt-8 md:mt-40 w-full ">
            <p className="w-[371px] text-center bg-gradient-to-r from-[#D738A4] to-[#7533A8] bg-clip-text text-transparent text-7xl font-semibold font-Thai z-10 lg:flex hidden">ลงทะเบียน</p>
          </div>
          <div className=" justify-center w-full z-10 max-md:bottom-0 relative  lg:flex hidden">
            <Tucmc />
          </div>
        </div>
        </div>
        <div className=" lg:hidden flex justify-center absolute top-28 left-1/2 -translate-x-1/2 ">
            <p className="text-center text-white   text-7xl font-bold font-Thai z-10">Register</p>
          </div>
          <div className=" lg:hidden flex justify-center absolute top-48 left-1/2 -translate-x-1/2 ">
            <p className="text-center bg-gradient-to-r from-[#D738A4] to-[#7533A8] bg-clip-text text-transparent text-4xl font-semibold font-Thai z-10">ลงทะเบียน</p>
          </div>
          <div className="lg:hidden flex justify-center absolute bottom-28 w-1/2 left-1/2 -translate-x-1/2 ">
            <Tucmc />
          </div>
        
      </div>
      <div className=" absolute w-screen bottom-0    ">
        <LoginLeft />
      </div>
      <div className=" absolute right-36  bottom-0 z-0 lg:block hidden ">
        <Tower />
      </div>
    </>
    );
  }
