import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import axios from "axios";
import Ticket from "@/vectors/ticket";
import { ArrowDownTrayIcon } from "@heroicons/react/24/solid";
import { toPng } from "html-to-image";
import Image from "next/image";
import { NextApiRequest } from "next";

export default function E_Ticket(req: any, res: any) {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [id, setId] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const [baseURL, setBaseURL] = useState("");
  const elementRef = useRef(null);
  const [isLoading, setIsLoading] = useState(false);

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
      setUsername(response.data.username);
      setFirstName(response.data.name);
      setLastName(response.data.surname);
      setRoles(response.data.role);
      setId(response.data.id);
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

  let screenshotData = JSON.stringify({
    url: `https://openhouse2024-alpha.vercel.app/ticket?id=${id}&username=${username}&firstName=${firstName}&lastName=${lastName}&roles=${roles}`,
  });

  let screenshotConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/screenshot",
    headers: {
      "Content-Type": "application/json",
    },
    data: screenshotData,
  };

  async function screenshotRequest() {
    try {
      const response = await axios.request(screenshotConfig);
      const a = document.createElement("a");
      a.href = window.URL.createObjectURL(await new Blob([response.data]));
      a.download = `ticket.png`;
      document.body.appendChild(a);
      a.click();
      a.remove();
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  const handleDownload = async () => {
    setIsLoading(true)
    const response = await fetch(
      "https://openhouse2024-backend.vercel.app/api/user/screenshot",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          url: `${baseURL}/ticket?id=${id}&username=${username}&firstName=${firstName}&lastName=${lastName}&roles=${roles}`,
        }),
      }
    );
    const blob = await response.blob();

    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "screenshot.png";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    setIsLoading(false)
  };

  useEffect(() => {
    hasAccountRequest();
  }, [status]);

  useEffect(() => {
    const baseUrl = window.location.origin;
    setBaseURL(baseUrl);
  }, []);

  return (
    <div className=" w-screen min-h-screen overflow-hidden bg-gradient-to-b from-[#622279] to-[#623AD4] relative ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />

          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className=" flex items-center justify-center h-full pt-8 z-10">
        <div className=" relative  " ref={elementRef}>
          <Ticket className="sm:w-[280px] sm:h-[552px] rounded-2xl " />
          <div className=" flex justify-center items-center gap-2 absolute top-2 z-50 left-1/2 -translate-x-1/2 w-full text-[#1B0C76] ">
            <hr className=" w-10 border border-[#1B0C76] " />
            ID: {id}
            <hr className=" w-10 border border-[#1B0C76]" />
          </div>
          <div className=" absolute left-4 top-10 text-transparent bg-clip-text bg-gradient-to-r from-[#3E47F7] to-[#FF25A1] text-4xl font-bold font-Figerona w-fit  ">
            {username}
            <div className=" text-[#0E1150] text-base font-medium font-Thai leading-tight  ">
              {firstName}
              <br />
              {lastName}
              <div className=" flex font-Thai items-center text-[#1B0C76] text-xs ">
                <svg
                  width="12"
                  height="13"
                  viewBox="0 0 12 13"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6.00371 5.55996C6.94743 5.55996 7.71247 4.77102 7.71247 3.7978C7.71247 2.82459 6.94743 2.03564 6.00371 2.03564C5.05999 2.03564 4.29495 2.82459 4.29495 3.7978C4.29495 4.77102 5.05999 5.55996 6.00371 5.55996Z"
                    fill="#1B0C76"
                  />
                  <path
                    d="M2.0166 10.8464C2.0166 8.57561 3.80169 6.73473 6.00371 6.73473C8.20573 6.73473 9.99081 8.57561 9.99081 10.8464H2.0166Z"
                    fill="#1B0C76"
                  />
                </svg>

                {roles}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex justify-center mt-5 pb-5 text-[#622D9F]">
        <button
          className=" flex items-center px-3 py-1 rounded-full gap-2 bg-white "
          onClick={handleDownload}
        >
          {isLoading ? (
            <div>
              <svg
                aria-hidden="true"
                className="inline w-5 h- text-gray-200 animate-spin dark:text-white fill-purple-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
            </div>
          ) : (
            <ArrowDownTrayIcon className="w-5" />
          )}{" "}
          Download
        </button>
      </div>
    </div>
  );
}
