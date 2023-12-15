"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../../components/UserCard";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import AccountRight from "@/vectors/account/accountRight";
import AccountLeft from "@/vectors/account/accountLeft";
import AccountBottom from "@/vectors/account/accountBottom";

export default function AccountPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");

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
      } catch (error) {
        console.log(error);
      }
    }
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

  async function userRequest() {
    try {
      const response = await axios.request(config);
      setUsername(response.data.username);
      setFirstName(response.data.name);
      setLastName(response.data.surname);
      setRoles(response.data.role);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  const router = useRouter();

  function handleSignout() {
    signOut();
  }

  useEffect(() => {
    hasAccountRequest();
    console.log(session?.user?.email);
  }, [status]);

  return (
    <div className=" w-screen h-screen relative overflow-hidden bg-gradient-to-br from-[#2D258C] via-[#581CD8] to-[#2C2488] ">
      <div className=" absolute right-0 top-0">
        <AccountRight className=" " />
      </div>
      <div className=" absolute left-[20%] -translate-x-[20%] top-1/2 -translate-y-1/2 ">
        <AccountLeft />
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 right-1/3 translate-x-1/3 z-50">
        <div>
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF53C5] from-0% to-[#FFFBE7] to-100% text-7xl font-Figerona font-bold w-fit drop-shadow-glow ">
            {username}
          </div>
        </div>
        <div className=" text-[#F7F0EA] font-semibold text-4xl mt-2">
          {firstName} {lastName}
        </div>
        <div className=" flex text-[#F7F0EA] items-center text-xl">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M12.1772 10.6394C14.054 10.6394 15.5754 9.11801 15.5754 7.24123C15.5754 5.36445 14.054 3.84302 12.1772 3.84302C10.3004 3.84302 8.77899 5.36445 8.77899 7.24123C8.77899 9.11801 10.3004 10.6394 12.1772 10.6394Z"
              fill="#F7F0EA"
            />
            <path
              d="M4.24805 20.8341C4.24805 16.4549 7.79805 12.9049 12.1772 12.9049C16.5564 12.9049 20.1064 16.4549 20.1064 20.8341H4.24805Z"
              fill="#F7F0EA"
            />
          </svg>
          {roles}
        </div>
        <div className=" mt-10 flex justify-between gap-5 text-2xl font-semibold">
          <button className=" w-fit px-10 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]  ">
            E-Ticket
          </button>
          <button className=" w-fit px-10 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]  ">
          สะสมแสตมป์
          </button>
        </div>
      </div>
      <div className=" absolute bottom-0 right-1/4 translate-x-1/4">
        <AccountBottom />
      </div>
    </div>
  );
}
