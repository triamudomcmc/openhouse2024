import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
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
      router.push("/account");
    }
  });

  return (
    <>
      <div className="  relative w-full h-full  ">
        <div className="bg-gradient-to-b from-[#444DAF] from-0% via-[#8C7BD7] via-30% to-[#FAFAEE] to-100% shadow w-screen h-screen"></div>

        <div className=" absolute bottom-0 w-full">
          <LoginLeft />
        </div>
        {
          //desktop version
        }
        <div className=" absolute left-[75%]  bottom-0 z-0 lg:block hidden ">
          <Tower />
        </div>
        <div className=" absolute top-1/2 -translate-y-1/2 left-[10%] lg:block hidden ">
          <p className="text-center text-white   text-9xl font-bold font-Thai z-10">
            Register
          </p>
          <p className="text-center bg-gradient-to-r from-[#D738A4] to-[#7533A8] bg-clip-text text-transparent text-7xl font-semibold font-Thai z-10">
            ลงทะเบียน
          </p>
          <div className=" flex w-full justify-center">
            <Tucmc />
          </div>
        </div>

        <div className=" absolute top-1/2 -translate-y-1/2 left-[60%] hidden lg:block ">
          <button
            onClick={() => signIn("google")}
            className="px-8 py-5 border h-20  gap-2 border-slate-200 bg-white opacity-80 backdrop-blur-sm rounded-full text-slate-700  hover:border-slate-400  w-full hover:text-slate-900 hover:shadow transition duration-150 flex justify-center"
          >
            <GoogleLogin />
            <p className=" ml-3 h-full align-middle flex text-2xl items-center">
              Sign up with Google
            </p>
          </button>
        </div>
        {
          //mobile version
        }
        <div className=" absolute top-[25%] -translate-y-1/2 w-full lg:hidden block ">
          <p className="text-center text-white   text-7xl font-bold font-Thai z-10">
            Register
          </p>
          <p className="text-center bg-gradient-to-r from-[#D738A4] to-[#7533A8] bg-clip-text text-transparent text-4xl font-semibold font-Thai z-10">
            ลงทะเบียน
          </p>
        </div>

        <div className=" absolute bottom-[15%] -translate-y-1/2 w-full justify-center lg:hidden flex ">
          <Tucmc />
        </div>

        <div className=" absolute top-1/2 -translate-y-1/2 lg:hidden flex w-full justify-center ">
          <button
            onClick={() => signIn("google")}
            className="px-8 py-5 border h-20 w-auto  gap-2 border-slate-200 bg-white opacity-80 backdrop-blur-sm rounded-full text-slate-700  hover:border-slate-400  hover:text-slate-900 hover:shadow transition duration-150 flex justify-center"
          >
            <GoogleLogin />
            <p className=" ml-3 h-full align-middle flex text-2xl items-center">
              Sign up with Google
            </p>
          </button>
        </div>
      </div>
    </>
  );
}
