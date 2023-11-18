"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../../components/UserCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import AccountBrick from "@/vectors/account/brick";
import Link from "next/link";
import AccountMain from "@/vectors/account/main";
import AccountProfile from "@/vectors/account/profile";
import AccountMainM from "@/vectors/account/mainM";

export default function AccountPage() {
  const [club, setClub] = useState(false);
  const [program, setProgram] = useState(false);
  const [gifted, setGifted] = useState(false);
  const [organization, setOrganization] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [none, setNone] = useState(false);

  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/Login"); // The user is not authenticated, handle it here.
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/roles/info",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function makeRequest() {
    try {
      const response = await axios.request(config);
      console.log(response.data.tag);
      console.log("succes");
      if (response.data.tag === "ชมรม") {
        setClub(true);
        setNone(false);
        setProgram(false);
        setGifted(false);
        setOrganization(false);
        setAdmin(false);
        console.log("club");
      } else if (response.data.tag === "สายการเรียน") {
        setProgram(true);
        setNone(false);
        setClub(false);
        setGifted(false);
        setOrganization(false);
        setAdmin(false);
      } else if (response.data.tag === "โครงการพัฒนาความสามารถ") {
        setGifted(true);
        setNone(false);
        setProgram(false);
        setClub(false);
        setOrganization(false);
        setAdmin(false);
      } else if (response.data.tag === "องค์กรนักเรียน") {
        setOrganization(true);
        setNone(false);
        setProgram(false);
        setGifted(false);
        setClub(false);
        setAdmin(false);
      } else if (response.data.tag === "admin") {
        setOrganization(false);
        setNone(false);
        setProgram(false);
        setGifted(false);
        setClub(false);
        setAdmin(true);
      }
    } catch (error) {
      console.log(error);
      setNone(true);
    }
  }

  const router = useRouter();
  function handleSignout() {
    signOut();
  }

  useEffect(() => {
    makeRequest();
    console.log(session?.user?.email);
  }, [status]);

  return (
    <div className=" relative w-full h-[calc(100dvh)] overflow-hidden bg-gradient-to-b from-[#BF9EFF] to-[#434FA7]">
      <div className=" h-[calc(100dvh)] overflow-hidden absolute top-0 z-0 flex justify-center  ">
        <AccountBrick />
      </div>
      <div className=" relative h-full  ">
        <div className=" md:block hidden absolute h-[90%] bottom-0 left-1/2 -translate-x-1/2 z-50 ">
          <AccountMain />
        </div>
          <svg
            height="90vh"
            viewBox="0 0 473 836"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" md:hidden block absolute bottom-0 left-1/2 -translate-x-1/2 z-50"
          >
            <path
              d="M33.4598 231.937C33.4598 115.601 127.769 21.2926 244.105 21.2926V21.2926C360.44 21.2926 454.749 115.601 454.749 231.937V824.328H33.4598V231.937Z"
              fill="url(#paint0_linear_159_2081)"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M473 235.74C473 240.849 472.837 245.92 472.516 250.949H473L473 836.495H434.977V363.981L434.977 250.949L434.977 241.063C434.977 131.447 346.116 42.5852 236.5 42.5852C126.884 42.5852 38.0225 131.447 38.0225 241.063V363.981L38.0225 836.495H0L-2.67917e-05 223.572H0.309584C6.66191 99.0316 109.979 0 236.5 0C367.115 0 473 105.544 473 235.74Z"
              fill="url(#paint1_linear_159_2081)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_159_2081"
                x1="245.066"
                y1="-128.807"
                x2="244.151"
                y2="824.328"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="white" />
                <stop offset="0.463542" stop-color="#B1AAD8" />
                <stop offset="1" stop-color="#4853AA" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_159_2081"
                x1="233.458"
                y1="-41.0643"
                x2="233.458"
                y2="836.46"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#3D46A1" />
                <stop offset="0.401042" stop-color="#372F81" />
                <stop offset="1" stop-color="#31155B" />
              </linearGradient>
            </defs>
          </svg>
        <div className=" absolute left-1/2 -translate-x-1/2 w-[250px] z-[51] top-1/2 -translate-y-1/2 text-[#AFB3F8] ">
          <div className=" relative z-[52]">
            <AccountProfile />
            {session?.user?.image && (
              <img
                src={session.user.image}
                className="absolute z-50 top-2 left-1/2 -translate-x-1/2 w-40 rounded-full"
              />
            )}
          </div>

          <p className="  w-full text-[#0F114C] text-center font-bold text-xl mt-10">
            {session?.user?.name}
          </p>
          <div className=" mt-10">
            <Link
              href="/organization"
              className={
                organization
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center  "
                  : " hidden"
              }
            >
              ข้อมูลองค์กรนักเรียน
            </Link>
            <Link
              href="/club"
              className={
                club
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
                  : " hidden"
              }
            >
              ข้อมูลชมรม
            </Link>
            <Link
              href="/program"
              className={
                program
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
                  : " hidden"
              }
            >
              ข้อมูลสายการเรียน
            </Link>
            <Link
              href="/gifted"
              className={
                gifted
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
                  : " hidden"
              }
            >
              ข้อมูลโครงการพัฒนาความสามารถ
            </Link>
            <Link
              href="/account/form"
              className={
                none
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
                  : "hidden"
              }
            >
              Form
            </Link>
            <Link
              href="/admin"
              className={
                admin
                  ? " absolute  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
                  : " hidden"
              }
            >
              Admin
            </Link>
          </div>
          <button
            type="button"
            onClick={handleSignout}
            className=" mt-24  w-full shadow-xl bg-gradient-to-br from-[#27217E] to-[#533B9E] rounded-full text-xl px-5 py-3 text-center "
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
