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
import AccountLeftM from "@/vectors/account/accountLeftM";
import AccountBox from "@/vectors/account/accountBox";
import { motion } from "framer-motion";

export default function AccountPage() {
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [roles, setRoles] = useState("");
  const [haveGems, setHaveGems] = useState(false);
  const [isStaff, setIsStaff] = useState(false);

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
      if (response.data.gems != "") {
        setHaveGems(true);
      }
      setUsername(response.data.username);
      setFirstName(response.data.name);
      setLastName(response.data.surname);
      setRoles(response.data.role);
      if (response.data.isstaff === true) {
        setIsStaff(true);
      }
    } catch (error) {}
  }

  const router = useRouter();

  function handleSignout() {
    signOut();
  }

  useEffect(() => {
    hasAccountRequest();
  }, [status]);

  return (
    <div className=" w-screen h-screen relative overflow-hidden bg-gradient-to-br from-[#2D258C] via-[#581CD8] to-[#2C2488] ">
      <div className=" absolute right-0 top-0 max-md:hidden">
        <AccountRight className=" " />
      </div>
      <div className=" absolute left-[20%] -translate-x-[20%] top-1/2 -translate-y-1/2 max-md:hidden  ">
        <AccountLeft className="lg:w-auto lg:h-auto md:w-[633px] md:h-[858px]" />
      </div>
      <div className=" absolute left-1/2 -translate-x-1/2 md:hidden">
        <AccountLeftM />
      </div>
      <div className=" absolute top-1/2 -translate-y-1/2 lg:right-1/3 lg:translate-x-1/3 md:right-1/4 md:translate-x-1/4 sm:right-1/2 sm:translate-x-1/2 z-50">
        <AccountBox className=" md:hidden" />
        <div className="">
          <div className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF53C5] from-0% to-[#FFFBE7] to-100% lg:text-[72px] md:text-[60px] text-[48px] leading-normal	 font-Figerona   font-bold drop-shadow-glow overflow-visible ">
            {username}
          </div>
        </div>
        <div className=" text-[#F7F0EA] font-semibold lg:text-4xl md:text-3xl sm:text-2xl">
          {firstName} {lastName}
        </div>
        <div className=" flex text-[#F7F0EA] items-center lg:text-xl md:text-lg ">
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
        <div className=" md:mt-10 mt-7 flex justify-between md:gap-5 gap-3 lg:text-2xl md:text-xl sm:text-sm font-semibold max-md:w-[270px]">
          <Link href="/account/ticket" className="   ">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`text-center cursor-pointer w-fit break-keep md:px-10 sm:px-8 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]`}
            >
              E-Ticket
            </motion.div>
          </Link>
          {isStaff ? (
            <Link href="/account/staff" className="  ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer w-fit break-keep px-12 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]`}
              >
                staff
              </motion.div>
            </Link>
          ) : (
            <Link href="/account/stamp" className="  ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer w-fit break-keep md:px-10 sm:px-8 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]`}
              >
                สะสมแสตมป์
              </motion.div>
            </Link>
          )}
        </div>
        <div>
          {haveGems ? (
            <Link href="/account/gems" className="  ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer w-full break-keep md:mt-4 mt-3 lg:text-2xl md:text-xl sm:text-sm font-semibold md:px-10 sm:px-8 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]`}
              >
                อัญมณีประจำตัว
              </motion.div>
            </Link>
          ) : (
            <Link href="/account/quiz" className="  ">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer w-full break-keep md:mt-4 mt-3 lg:text-2xl md:text-xl sm:text-sm font-semibold md:px-10 sm:px-8 py-2 bg-gradient-to-r from-[#FFFBE7] to-[#BCA1FF] rounded-full text-[#380086]`}
              >
                แบบทดสอบอัญมณี
              </motion.div>
            </Link>
          )}
        </div>
      </div>
      <div className=" absolute bottom-0 lg:right-[28%] lg:translate-x-[28%] md:right-[10%] md:translate-x-[10%] sm:right-1/2 sm:translate-x-1/2 max-md:-mr-5  ">
        <AccountBottom className=" lg:w-auto lg:h-auto md:w-[545px] md:h-[601px] sm:w-[425px] sm:h-[530px] " />
      </div>
    </div>
  );
}
