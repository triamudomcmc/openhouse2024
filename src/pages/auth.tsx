import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import GoogleLogin from "@/vectors/login/LoginGoogle";
import Tucmc from "@/vectors/tucmc";
import LoginRight from "@/vectors/login/LoginRight";
import Link from "next/link";
import LoginRightM from "@/vectors/login/LoginRightM";

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
      <div className="  relative w-screen h-[calc(100dvh)] overflow-hidden  ">
        <div className=" bg-[#010557] shadow w-full h-full">
          <div className=" absolute left-0 top-0 md:h-[75vh] h-[50vh] w-20 bg-gradient-to-b from-[#AC0B98] via-[#AC0B98]/ to-[#7623E6]/[.0] "></div>
          <LoginRight className=" absolute right-0 top-0 max-md:hidden" />
          <LoginRightM className=" absolute right-0 -bottom-20" />
          <div className=" absolute md:left-[20%] md:-translate-x-[20%] left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 ">
            <div className=" text-center text-white">
              <div className=" lg:text-8xl md:text-7xl sm:text-6xl  font-Montserrat mt-40 ">REGISTER</div>
              <div className=" font-light md:text-4xl text-xl md:mb-16 mb-7 mt-2">ลงทะเบียน</div>
              <div className=" flex justify-center w-full">
                <button
                  className=" flex gap-6"
                  onClick={() => {
                    signIn("google");
                  }}
                >
                  <div className=" bg-white flex items-center justify-center gap-6 py-4 px-14  rounded-full text-[#000340] lg:text-2xl md:text-xl text-sm ">
                    <GoogleLogin />
                    Sign up with Google
                  </div>
                </button>
              </div>
              <div className=" mt-6 text-white md:text-sm text-xs font-medium">
                การลงทะเบียนถือว่ายอมรับ
                <Link
                  href="/privacy-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FF9DE9] underline"
                >
                  นโยบายความเป็นส่วนตัว
                </Link>
                <br />
                และ
                <Link
                  href="/tos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" text-[#FF9DE9]  underline"
                >
                  ข้อตกลงการใช้งาน
                </Link>
              </div>
              <div className=" justify-center flex mt-40"><Tucmc /></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
