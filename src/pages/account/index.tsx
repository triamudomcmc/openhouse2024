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
        <div className=" absolute h-[90%] bottom-0 left-1/2 -translate-x-1/2 z-50 ">
          <AccountMain />
        </div>
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
