import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import GemsStamp from "@/vectors/gemStamp";

export default function Stamp() {
  const [gems, setGems] = useState(0);
  const [username, setUsername] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  let userData = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let hasAccountConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/has-account`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function hasAccountRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(hasAccountConfig);
        if (response.data === false) {
          router.push("/account/form");
        } else {
          userRequest();
        }
      } catch (error) {}
    }
  }

  async function userRequest() {
    try {
      const response = await axios.request(config);
      setUsername(response.data.username);+
      setGems(response.data.estamp)
    } catch (error) {}
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/get",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  useEffect(() => {
    hasAccountRequest();
    router.push("/maintenance")
  }, [status]);

//   function addGems(gems: number) {
//     setGems(gems + 1);
//     if (gems >= 12) {
//       setGems(0);
//     }
//   }

//   useEffect(() => {
//     setTimeout(() => {
//       addGems(gems);
//     }, 300);
//   }, [gems]);

  return (
    <div className=" w-screen min-h-screen bg-gradient-to-b from-[#622279] to-[#623AD4] relative ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />

          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className=" flex  justify-center h- z-10">
        <div className=" block text-center bg-white py-6 px-6 md:py-10 md:px-10  rounded-3xl mt-[10vh]">
          <div className=" flex justify-center">
            <div className=" text-[#893098] bg-[#FFC6EC] w-fit rounded-full px-4 py-1 text-lg md:text-2xl font-bold ">
              แสตมป์ของ {username}
            </div>
          </div>
          <div className=" flex justify-center">
          <div className=" mt-9">{GemsStamp(gems)}</div></div>
          <div className=" mt-3 text-[#9C9C9C]">สะสมแล้ว {gems} / 12</div>
        </div>
      </div>
    </div>
  );
}
