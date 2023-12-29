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

export default function E_Ticket() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [id, setId] = useState("");
  const [imageLoaded, setImageLoaded] = useState(false);
  const elementRef = useRef(null);

  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  const handleImageLoad = () => {
    setImageLoaded(true);
  };


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

  const htmlToImageConvert = () => {
    if (!imageLoaded) {
      // Image is not loaded yet, you can handle this case accordingly
      console.log('Image is not loaded yet.');
      return;
    }

    toPng(elementRef.current!, { cacheBust: false})
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'e-ticket.png';
        link.href = dataUrl;
        link.click();
      })
      .catch((err) => {
        console.error(err);
      });
  };

  useEffect(() => {
    hasAccountRequest();
  }, [status]);

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
          <Image
            alt="ticket"
            src="/assets/ticket.png"
            width={280}
            height={552}
            onLoad={handleImageLoad}
            className="sm:w-[280px] sm:h-[552px] "
          />
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
      <div className=" flex items-center justify-center h-full pt-8 z-10 absolute -top-[1230px] left-[0px] w-full">
        <div className=" relative ">
          <Image
            alt="ticket"
            src="/assets/ticket.png"
            width={840}
            height={1656}
            priority
            className="w-[840px] h-[1656px] "
          />
          <div className=" flex justify-center items-center gap-2 absolute top-6 z-50 left-1/2 -translate-x-1/2 w-full text-[#1B0C76] text-5xl ">
            <hr className=" w-[120px] border-[3px] border-[#1B0C76] bg-[#1B0C76] " />
            ID: {id}
            <hr className=" w-[120px] border-[3px] border-[#1B0C76] bg-[#1B0C76]" />
          </div>
          <div className=" absolute left-12 top-[120px] text-transparent bg-clip-text bg-gradient-to-r from-[#3E47F7] to-[#FF25A1] text-[108px] font-bold font-Figerona w-fit  ">
            {username}
            <div className=" text-[#0E1150] text-5xl font-medium font-Thai leading-tight  ">
              {firstName}
              <br />
              {lastName}
              <div className=" flex font-Thai items-center text-[#1B0C76] text-2xl ">
                <svg
                  width="36"
                  height="39"
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
          className=" flex items-center px-3 py-1 rounded-full bg-white "
          onClick={htmlToImageConvert}
        >
          <ArrowDownTrayIcon className="w-5" /> Download
        </button>
      </div>
    </div>
  );
}
