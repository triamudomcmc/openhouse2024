"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import ClubWidget from "@/vectors/club/clubwidget";
import WhitePencilIcon from "@/vectors/club/whitePencil";
import axios from "axios";

export default function Gifted() {
  const router = useRouter();
  const [gifted, setGifted] = useState("");
  const [clubsE, setClubsE] = useState("");
  const [members, setMembers] = useState("");
  const [aprrove, setAprove] = useState(false);
  const [deny, setDeny] = useState(false);
  const [review, setReview] = useState(false);
  const [NoEdit, setNoEdit] = useState(false);

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login"); // The user is not authenticated, handle it here.
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/roles/info`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function makeRequest() {
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data.info.name));
      setGifted(response.data.info.name);
      setMembers(response.data.info.members);
      console.log("succes");
      if (response.data.info.status === "ยังไม่มีการแก้ไข") {
        setNoEdit(true);
        setAprove(false);
        setDeny(false);
        setReview(false);
        console.log("ยังไม่มีการแก้ไข");
      } else if (response.data.info.status === "อยู่ระหว่างการตรวจสอบ") {
        setNoEdit(false);
        setAprove(false);
        setDeny(false);
        setReview(true);
      } else if (response.data.info.status === "ไม่ผ่านการตรวจสอบ") {
        setNoEdit(false);
        setAprove(false);
        setDeny(true);
        setReview(false);
      } else if (response.data.info.status === "ผ่านการตรวจสอบ") {
        setNoEdit(false);
        setAprove(true);
        setDeny(false);
        setReview(false);
      }
    } catch (error) {
      console.log(error);
    }
  }

  function HandleClick() {
    router.push("/gifted/edit");
  }

  function HandlePreview() {
    router.push("/gifted/preview");
  }

  useEffect(() => {
    makeRequest();
  });

  return (
    <>
      <div className="flex justify-center h-[calc(100dvh)] md:bg-gray-50 ">
        <div className=" align-middle my-auto  w-full md:w-1/2 lg:w-1/3 md:shadow-lg md:border-t-8   border-[#81109D] rounded-2xl justify-center flex-wrap text-center py-5 bg-white">
          <p className=" text-[#141547] md:mb-6 font-Thaiai ">ข้อมูลหน่วยงาน</p>
          <p className=" font-extrabold text-transparent md:text-5xl sm:text-4xl  bg-clip-text bg-gradient-to-b from-[#81109D] to-[#D738A4] font-Thai ">
            {" "}
            {gifted}
          </p>
          <p className=" text-[#141547] font-Thai opacity-60">
            สมาชิก {members} คน
          </p>
          <div className="  w-full flex justify-center">
            <div className="w-4/5">
              <ClubWidget />
            </div>
          </div>

          <button
            onClick={HandleClick}
            className=" flex m-auto w-1/2 rounded-2xl  bg-gradient-to-r from-[#7533A8] to-[#D62C9F] items-center justify-center text-center drop-shadow "
          >
            <span className=" text-white ml-3 text-2xl mr-2 font-Thai text-center">
              แก้ไข
            </span>
            <WhitePencilIcon />
          </button>
          <div>
            <button
              onClick={HandlePreview}
              className=" mt-5 flex m-auto w-1/2 rounded-full border-[#7533A8] border-2 items-center justify-center text-center drop-shadow "
            >
              <span className=" text-[#7533A8] ml-3 text-2xl mr-2  font-Thai">
                Preview
              </span>
            </button>
          </div>
          <div
            className={
              NoEdit ? "flex items-center justify-center my-3" : " hidden"
            }
          >
            <p className="text-[#141547] flex items-center justify-center font-Thai">
              สถานะ :
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mx-2 "
              >
                <circle cx="10" cy="10" r="10" fill="#9E9E9E" />
              </svg>
            </p>
            <p className=" text-[#9E9E9E] font-Thai"> ยังไม่มีการแก้ไข </p>
          </div>
          <div
            className={
              deny ? "flex items-center justify-center my-3" : " hidden"
            }
          >
            <p className="text-[#141547] flex items-center justify-center my-3 font-Thai">
              สถานะ :
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mx-2 "
              >
                <circle cx="10" cy="10" r="10" fill="#E80808" />
              </svg>
            </p>
            <p className=" text-[#E80808] font-Thai"> ไม่ผ่านการตรวจสอบ </p>
          </div>
          <div
            className={
              review ? "flex items-center justify-center my-3" : "hidden"
            }
          >
            <p className="text-[#141547] flex items-center justify-center my-3 font-Thai">
              สถานะ :
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mx-2 "
              >
                <circle cx="10" cy="10" r="10" fill="#FCB52B" />
              </svg>
            </p>
            <p className=" text-[#FCB52B] font-Thai"> อยู่ระหว่างการตรวจสอบ </p>
          </div>
          <div
            className={
              aprrove ? "flex items-center justify-center my-3" : " hidden"
            }
          >
            <p className="text-[#141547] flex items-center justify-center my-3 font-Thai">
              สถานะ :
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className=" mx-2 "
              >
                <circle cx="10" cy="10" r="10" fill="#19C57C" />
              </svg>
            </p>
            <p className=" text-[#19C57C] font-Thai"> ผ่านการตรวจสอบ </p>
          </div>
          <p className=" text-[#141547] mt-6 font-Thai ">
            {" "}
            แก้ไขข้อมูลหน่วยงาน{" "}
          </p>
          <p className=" text-[#141547] opacity-60 font-Thai">
            {" "}
            ข้อมูลจะแสดงผลในหน้าเว็บไซต์{" "}
          </p>
        </div>
      </div>
    </>
  );
}
