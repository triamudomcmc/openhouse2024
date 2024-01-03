import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";
import Lottie from "lottie-react";
import checkmark from "@/vectors/checkmark.json";

export default function Staff() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [staffTag, setStaffTag] = useState("");
  const [orgName, setOrgName] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [stampError, setStampError] = useState(false);
  const [stampSuccess, setStampSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [text, setText] = useState("");
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
      if (response.data.isstaff === false) {
        router.push("/account");
      }
      setStaffTag(response.data.staff.tag);
      setOrgName(response.data.staff.organizationName);
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
  }, [status]);

  useEffect(() => {
    staffCheck();
  }, [staffTag]);

  function staffCheck() {
    if (staffTag === "register") {
      setText("ลงทะเบียน");
    } else {
      setText("แจกแสตมป์");
    }
  }

  function summit() {
    if (isProcessing === false) {
      if (staffTag === "register") {
        setIsProcessing(true);
        registerRequest();
      }
      if (staffTag === "stamp") {
        setIsProcessing(true);
        stampRequest();
      }
    } else {
    }
  }

  let registerData = JSON.stringify({
    id: id,
    gate: orgName,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let registerConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/register2",
    headers: {
      "Content-Type": "application/json",
    },
    data: registerData,
  };

  async function registerRequest() {
    try {
      const response = await axios.request(registerConfig);
      console.log(JSON.stringify(response.data));
      setIsProcessing(false);
      setRegisterSuccess(true);
      setShowConfirm(false);
      setTimeout(() => {
        setRegisterSuccess(false)
      }, 2500);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
      setRegisterSuccess(false);
      setShowConfirm(false);
    }
  }

  async function userSearchRequest(id: string) {
    try {
      const userSearchData = JSON.stringify({
        id: id,
        environmentKeys: process.env.ENVIRONMENT_KEY,
      });

      const userSearchConfig = {
        method: "post",
        maxBodyLength: Infinity,
        url: `https://openhouse2024-backend.vercel.app/api/user/getbyID`,
        headers: {
          "Content-Type": "application/json",
        },
        data: userSearchData,
      };

      const response = await axios.request(userSearchConfig);

      setUsername(response.data.username);
      setFirstName(response.data.name);
      setLastName(response.data.surname);
      setShowSearch(true);
    } catch (error) {
      setShowSearch(false);
    }
  }

  let stampData = JSON.stringify({
    id: id,
    verifyestamp: orgName,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let stampConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/estamp/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: stampData,
  };

  async function stampRequest() {
    try {
      const response = await axios.request(stampConfig);
      console.log(JSON.stringify(response.data));
      setIsProcessing(false);
      setStampSuccess(true);
      setStampError(false);
      setShowConfirm(false);
      setTimeout(() => {
        setStampSuccess(false)
      }, 2500);
    } catch (error) {
      console.log(error);
      setStampError(true);
      setStampSuccess(false);
      setIsProcessing(false);
      setShowConfirm(false);
    }
  }

  function handleIdChange(event: any) {
    if (event.target.value === "") {
      setUsername("");
      setFirstName("");
      setLastName("");
      setShowSearch(false);
    } else {
      setId(event.target.value);
      userSearchRequest(event.target.value);
    }
    //setShowSearch(false);
    setStampError(false);
    setStampSuccess(false);
    setRegisterSuccess(false);
  }

  return (
    <div className=" w-screen min-h-screen bg-gradient-to-b from-[#6D1490] to-[#623AD4] ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />
          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className=" flex justify-center">
        <div className=" mt-2 text-center">
          <div className="text-[#FFA9E2] lg:text-6xl md:text-4xl text-3xl font-Montserrat font-semibold">
            CODE
          </div>
          <div className="text-white">กรอก code ของผู้ร่วมงานเพื่อ{text}</div>
          <div className="mt-5">
            <input
              type="number"
              className=" text-center placeholder:font-bold placeholder:text-xl font-bold h-[50px] w-[270px] rounded-2xl  "
              placeholder="12345"
              min="0"
              max="99999"
              onChange={handleIdChange}
            ></input>
          </div>

          <div className=" py-6 px-7 mt-14 rounded-2xl bg-white">
            <div className=" text-left">
              <div className="text-[#622684]">Username : </div>
              <input
                type="text"
                readOnly
                className=""
                placeholder="tobetu87"
                value={username}
              />
              <div className="text-[#622684]">ชื่อ : </div>
              <input
                type="text"
                readOnly
                className=""
                placeholder="เรียนเด่น"
                value={firstName}
              />
              <div className="text-[#622684]">นามสกุล : </div>
              <input
                type="text"
                readOnly
                className=""
                placeholder="เล่นดี"
                value={lastName}
              />
            </div>
          </div>
          {!showSearch && (
            <button
              disabled
              className=" text-white font-Montserrat text-xl font-bold text-center px-6 py-2 bg-gray-600 rounded-xl mt-6  "
            >
              Stamp
            </button>
          )}
          {showSearch && (
            <div>
              <button
                onClick={() => setShowConfirm(true)}
                className=" text-white font-Montserrat text-xl font-bold text-center px-6 py-2 bg-[#FC53C3] rounded-xl mt-6  "
              >
                Stamp
              </button>
              {/*
              {registerSuccess && (
                <div className="mt-4 text-green-500">ลงทะเบียนสำเร็จ</div>
              )}
              {stampSuccess && (
                <div className="mt-4 text-green-500">บันทึกstampสำเร็จ</div>
              )}
              */}
              {stampError && (
                <div className="mt-4 text-red-500">บัญชีนี้มีstampนี้แล้ว</div>
              )}
            </div>
          )}
        </div>
      </div>
      {showConfirm && (
        <div className=" fixed top-0 left-0 h-screen w-screen bg-black bg-opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" text-center bg-white px-8 py-11 w-[300px] rounded-2xl">
              <div>
                <div className=" text-[#FC53C3] text-2xl font-semibold">
                  ยืนยันการ{text}
                </div>
                <div className=" text-[#8B8B8B] text-sm">
                  ยืนยันการ{text}ให้กับผู้ใช้งานนี้
                </div>
                <div className=" flex w-full justify-around mt-4">
                  <button
                    className=" text-[#929292] w-[100px] py-2 bg-[#D9D9D9] rounded-full"
                    onClick={() => {
                      setShowConfirm(false);
                    }}
                  >
                    ยกเลิก
                  </button>
                  <button
                    className=" text-white w-[100px] py-2 bg-[#FC53C3] rounded-full"
                    onClick={summit}
                  >
                    ยืนยัน
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {registerSuccess && (
        <div className=" fixed top-0 left-0 h-screen w-screen bg-black  bg-opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" flex justify-center text-center bg-white text-[#FC53C3] text-2xl font-semibold px-8 py-11 w-[300px] rounded-2xl">
              <div>
                <Lottie
                  className=" flex justify-center w-full "
                  animationData={checkmark}
                  loop={false}
                />
                ลงทะเบียนสำเร็จ
              </div>
            </div>
          </div>
        </div>
      )}
      {stampSuccess && (
        <div className=" fixed top-0 left-0 h-screen w-screen bg-black  bg-opacity-30">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <div className=" flex justify-center text-center bg-white text-[#FC53C3] text-2xl font-semibold px-8 py-11 w-[300px] rounded-2xl">
              <div>
                <Lottie
                  className=" flex justify-center w-full "
                  animationData={checkmark}
                  loop={false}
                />
                บันทึกstampสำเร็จ
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
