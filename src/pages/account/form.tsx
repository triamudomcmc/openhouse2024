import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import FormLeft from "@/vectors/form/formLeft";
import { Radio } from "@material-tailwind/react";
import FormRight from "@/vectors/form/formRight";

export default function Form() {
  const [username, setUsername] = useState("");
  const [usernameError, setUsernameError] = useState(false);
  const [prefix, setPrefix] = useState("");
  const [prefixError, setPrefixError] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastName, setLastName] = useState("");
  const [lastNameError, setLastNameError] = useState(false);
  const [roles, setRoles] = useState("");
  const [rolesError, setRolesError] = useState(false);
  const [student, setStudent] = useState(false);
  const [school, setSchool] = useState("");
  const [schoolError, setSchoolError] = useState(false);
  const [grade, setGrade] = useState("");
  const [gradeError, setGradeError] = useState(false);
  const [platform, setPlatform] = useState<Array<string>>([]);
  const [platformError, setPlatformError] = useState(false);
  const [purpose, setPurpose] = useState<Array<string>>([]);
  const [purposeError, setPurposeError] = useState(false);
  const [otherPurpose, setOtherPurpose] = useState(false);
  const [otherPurposeInfo, setOtherPurposeInfo] = useState("");
  const [otherPurposeInfoError, setOtherPurposeInfoError] = useState(false);
  const router = useRouter();
  const axios = require("axios");
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/get`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function accountCheck() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(config);
        if (response.data === true) {
          router.push("/account");
        } else {
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  let postData = JSON.stringify({
    email: session?.user?.email,
    roles: roles,
    username: username,
    name: firstName,
    surname: lastName,
    platform: platform,
    purpose: purpose,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let postConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/add",
    headers: {
      "Content-Type": "application/json",
    },
    data: postData,
  };

  async function postRequest() {
    try {
      const response = await axios.request(postConfig);
      console.log(JSON.stringify(response.data));
    } catch (error) {
      console.log(error);
    }
  }

  function handleSumit() {
    if (username.trim() === "") {
      setUsernameError(true);
    } else {
      setUsernameError(false);
    }
    if (firstName.trim() === "") {
      setFirstNameError(true);
    } else {
      setFirstNameError(false);
    }
    if (prefix.trim() === "") {
      setPrefixError(true);
    } else {
      setPrefixError(false);
    }
    if (lastName.trim() === "") {
      setLastNameError(true);
    } else {
      setLastNameError(false);
    }
    if (roles.trim() === "") {
      setRolesError(true);
    } else {
      setRolesError(false);
    }
    if (student === true) {
      if (school.trim() === "") {
        setSchoolError(true);
      } else {
        setSchoolError(false);
      }
      if (grade.trim() === "") {
        setGradeError(true);
      } else {
        setGradeError(false);
      }
    }

    if (student === false) {
      setSchoolError(false);
      setGradeError(false);
    }

    if (otherPurpose === true) {
      setPurposeError(false);
      if (otherPurposeInfo.trim() === "") {
        setOtherPurposeInfoError(true);
      } else {
        setOtherPurposeInfoError(false);
      }
    }

    if (otherPurpose === false) {
      setOtherPurposeInfoError(false);
      if (platform.every((platform) => platform.trim() === "")) {
        setPlatformError(true);
      } else {
        setPlatformError(false);
      }
      if (purpose.every((purpose) => purpose.trim() === "")) {
        setPurposeError(true);
      } else {
        setPurposeError(false);
      }
    }
    if (
      usernameError === false &&
      firstNameError === false &&
      lastNameError === false &&
      rolesError === false &&
      prefixError === false &&
      schoolError === false &&
      gradeError === false &&
      platformError === false &&
      purposeError === false &&
      otherPurposeInfoError === false
    ) {
      postRequest();
      setTimeout(() => {
        router.push("/account");
      }, 1000);
    }
    if (otherPurpose === true) {
      if (otherPurposeInfo.trim() !== "") {
        setPurpose((prevSelected) => [...prevSelected, otherPurposeInfo]);
      }
    }
  }

  function studentChange() {
    setRoles("นักเรียน");
    setStudent(true);
  }

  function parentChange() {
    setRoles("ผู้ปกครอง");
    setStudent(false);
  }

  function teacherChange() {
    setRoles("ครู / บุคลากรโรงเรียน");
    setStudent(false);
  }

  function otherChange() {
    setRoles("อื่น ๆ");
    setStudent(false);
  }

  const platformChange = (value: string) => {
    // Check if the value is already selected
    if (platform.includes(value)) {
      // If selected, remove from the array
      setPlatform((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
    } else {
      // If not selected, add to the array
      setPlatform((prevSelected) => [...prevSelected, value]);
    }
  };

  const purposeChange = (value: string) => {
    // Check if the value is already selected
    if (purpose.includes(value)) {
      // If selected, remove from the array
      setPurpose((prevSelected) =>
        prevSelected.filter((option) => option !== value)
      );
    } else {
      // If not selected, add to the array
      setPurpose((prevSelected) => [...prevSelected, value]);
    }
  };

  useEffect(() => {
    accountCheck();
  }, [session]);

  useEffect(() => {
    console.log(purpose);
  }, [purpose]);

  return (
    <>
      <div className=" w-screen min-h-[100vh] bg-[#000340] relative overflow-hidden">
        <div className=" text-white text-center pt-20 pb-5  flex justify-center items-center  ">
          <div className=" block">
            <div className="  text-white text-5xl font-medium "> ลงทะเบียน</div>
            <div className=" flex justify-center items-center gap-4 text-xl font-light mt-3  ">
              <div className="w-20 h-[0px] border border-white"></div>
              กรอกข้อมูลผู้ใช้งาน
              <div className="w-20 h-[0px] border border-white"></div>
            </div>
            <div className=" block mt-8">
              <div className=" justify-start flex w-auto">
                <div className=" text-white text-sm font-normal leading-tight ">
                  ชื่อผู้ใช้ (username)
                </div>
              </div>
              <input
                type="text"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                maxLength={16}
                placeholder="ความยาวไม่เกิน 16 ตัวอักษร"
                onChange={(event) => {
                  setUsername(event.target.value);
                }}
              />
              {usernameError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
            </div>
            <div className=" mt-8 block ">
              <div className=" text-white text-sm font-normal leading-tight text-left ">
                คำนำหน้าชื่อ
              </div>
              <select
                id="prefix"
                name="prefix"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340] "
                placeholder="เลือกคำนำหน้าชื่อ"
                onChange={(event) => {
                  setPrefix(event.target.value);
                }}
              >
                <option value=""></option>
                <option value="ด.ช.">ด.ช.</option>
                <option value="ด.ญ.">ด.ญ.</option>
                <option value="นาย">นาย</option>
                <option value="นางสาว">นางสาว</option>
                <option value="นาง">นาง</option>
                <option value="อื่นๆ">อื่นๆ</option>
                <option value="อื่นๆ">อื่นๆ</option>
              </select>
              {prefixError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องเลือก
                </div>
              )}
            </div>
            <div className=" block mt-8">
              <div className=" justify-start flex w-auto">
                <div className="text-white text-sm font-normal leading-tight ">
                  ชื่อ (ไม่ต้องมีคำนำหน้า)
                </div>
              </div>
              <input
                type="text"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                placeholder="เรียนเด่น"
                onChange={(event) => {
                  setFirstName(event.target.value);
                }}
              />
              {firstNameError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
            </div>
            <div className=" block mt-8">
              <div className=" justify-start flex w-auto">
                <div className="text-white text-sm font-normal leading-tight ">
                  นามสกุล
                </div>
              </div>
              <input
                type="text"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                placeholder="เล่นดี"
                onChange={(event) => {
                  setLastName(event.target.value);
                }}
              />
              {lastNameError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
            </div>
            <hr className=" w-full h-0 my-6 border" />
            <div className=" flex justify-start">
              <div className=" block text-left align-middle  ">
                <div className="text-white text-base font-medium leading-normal ">
                  สถานภาพ
                </div>
                <label className="block mt-4">
                  <input
                    type="radio"
                    value="นักเรียน"
                    name="roles"
                    onClick={studentChange}
                  />{" "}
                  นักเรียน
                </label>
                <label className="block mt-4">
                  <input
                    type="radio"
                    value="ผู้ปกครอง"
                    name="roles"
                    onClick={parentChange}
                  />{" "}
                  ผู้ปกครอง
                </label>
                <label className="block mt-4">
                  <input
                    type="radio"
                    value="ครู / บุคลากรโรงเรียน"
                    name="roles"
                    onClick={teacherChange}
                  />{" "}
                  ครู / บุคลากรโรงเรียน
                </label>
                <label className="block mt-4">
                  <input
                    type="radio"
                    value="อื่น ๆ"
                    name="roles"
                    onClick={otherChange}
                  />{" "}
                  อื่น ๆ
                </label>
              </div>
            </div>
            {rolesError && (
              <div className=" text-red-500 text-sm text-left mt-1">
                {" "}
                *จำเป็นต้องเลือก
              </div>
            )}
            <hr className=" w-full h-0 my-6 border" />
            <div
              className={
                student
                  ? " opacity-100 transition-all "
                  : " opacity-0 hidden transition-all "
              }
            >
              <div className=" justify-start flex w-auto">
                <div className="text-white text-sm font-normal leading-tight ">
                  โรงเรียน
                </div>
              </div>
              <input
                type="text"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                placeholder="โรงเรียนเตรียมอุดมศึกษา"
                onChange={(event) => {
                  setSchool(event.target.value);
                }}
              />
              {schoolError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
              <div className=" justify-start flex w-auto mt-6">
                <div className="text-white text-sm font-normal leading-tight ">
                  ระดับชั้น
                </div>
              </div>
              <input
                type="text"
                className=" w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                placeholder="ม.3"
                onChange={(event) => {
                  setGrade(event.target.value);
                }}
              />
              {gradeError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
              <hr className=" w-full h-0 my-6 border" />
            </div>
            <div className=" block text-left align-middle  ">
              <div className="text-white text-base font-medium leading-normal ">
                ได้รับข่าวสารของ Triam Udom Open House 2024
                <br />
                จากทางไหน
                <br />
                <span className=" text-sm opacity-60">
                  (ตอบได้มากกว่า 1 ข้อ)
                </span>
              </div>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="Facebook"
                  onChange={() => platformChange("Facebook")}
                  checked={platform.includes("Facebook")}
                />{" "}
                Facebook Page: Triam Udom Open House
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="Instagram"
                  onChange={() => platformChange("Instagram")}
                  checked={platform.includes("Instagram")}
                />
                Instagram: @triamudom.oph <br /> / @tucmc_official
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="Twitter"
                  onChange={() => platformChange("Twitter")}
                  checked={platform.includes("Twitter")}
                />
                Twitter: @triamudomoph
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="TikTok"
                  onChange={() => platformChange("TikTok")}
                  checked={platform.includes("TikTok")}
                />
                TikTok: @triamudom.oph
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="studygram"
                  onChange={() => platformChange("studygram")}
                  checked={platform.includes("studygram")}
                />{" "}
                เพจ studygram
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="website"
                  onChange={() => platformChange("website")}
                  checked={platform.includes("website")}
                />
                เว็บและเพจข่าวสารการศึกษา
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="triamudomStudent"
                  onChange={() => platformChange("triamudomStudent")}
                  checked={platform.includes("triamudomStudent")}
                />
                นักเรียนโรงเรียนเตรียมอุดมศึกษา
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="Friends"
                  onChange={() => platformChange("Friends")}
                  checked={platform.includes("Friends")}
                />
                เพื่อน
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="Parent"
                  onChange={() => platformChange("Parent")}
                  checked={platform.includes("Parent")}
                />
                ผู้ปกครอง
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="School"
                  onChange={() => platformChange("School")}
                  checked={platform.includes("School")}
                />
                โรงเรียน
              </label>
              {platformError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก
                </div>
              )}
              <hr className=" w-full h-0 my-6 border" />
            </div>
            <div className=" block text-left align-middle  ">
              <div className="text-white text-base font-medium leading-normal ">
                จุดประสงค์ในการเข้าร่วม Triam Udom
                <br />
                Open House 2024
                <br />
                <span className=" text-sm opacity-60">
                  (ตอบได้มากกว่า 1 ข้อ)
                </span>
              </div>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="find info"
                  onChange={() => purposeChange("find info")}
                  checked={purpose.includes("find info")}
                />
                หาข้อมูลการสอบเข้าโรงเรียนเตรียมฯ
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="watch activity"
                  onChange={() => purposeChange("watch activity")}
                  checked={purpose.includes("watch activity")}
                />
                เข้าชมกิจกรรมการแสดง
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="watch booth"
                  onChange={() => purposeChange("watch booth")}
                  checked={purpose.includes("watch booth")}
                />
                เข้าชมซุ้มกิจกรรม
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="find info (considers joining)"
                  onChange={() =>
                    purposeChange("find info (considers joining)")
                  }
                  checked={purpose.includes("find info (considers joining)")}
                />
                หาข้อมูลเกี่ยวกับโรงเรียนเตรียมอุดมศึกษา
                <br /> เพื่อประกอบการตัดสินใจ
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="inspiration"
                  onChange={() => purposeChange("inspiration")}
                  checked={purpose.includes("inspiration")}
                />{" "}
                หาแรงบันดาลใจในการสอบเข้า
                <br />
                โรงเรียนเตรียมอุดมศึกษา
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="consultation"
                  onChange={() => purposeChange("consultation")}
                  checked={purpose.includes("consultation")}
                />
                ขอคำปรึกษาเกี่ยวกับการสอบเข้า
                <br />
                โรงเรียนเตรียมอุดมศึกษา
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="watch view"
                  onChange={() => purposeChange("watch view")}
                  checked={purpose.includes("watch view")}
                />
                ชมบรรยากาศของโรงเรียน
              </label>
              <label className="block mt-4">
                <input
                  type="checkbox"
                  value="other"
                  onChange={(event) => setOtherPurpose(event.target.checked)}
                />
                อื่น ๆ โปรดระบุ :
                <input
                  type="text "
                  className={
                    otherPurpose
                      ? " w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]   "
                      : "hidden"
                  }
                  placeholder="อื่นๆ"
                  onChange={(event) => setOtherPurposeInfo(event.target.value)}
                  checked={purpose.includes("other")}
                />
                <input
                  type="text "
                  className={
                    otherPurpose
                      ? " hidden "
                      : " w-full p-2 text-sm font-light rounded-md shadow mt-1 text-[#000340]"
                  }
                  placeholder="อื่นๆ"
                  onChange={(event) => purposeChange(event.target.value)}
                  checked={purpose.includes("other")}
                  disabled
                />
              </label>
              {purposeError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องเลือกอย่างน้อย 1 ตัวเลือก
                </div>
              )}
              {otherPurposeInfoError && (
                <div className=" text-red-500 text-sm text-left mt-1">
                  {" "}
                  *จำเป็นต้องใส่
                </div>
              )}
              <hr className=" w-full h-0 my-6 border" />
            </div>
            <button
              className="w-full bg-[#3E47F7] py-2 leading-tight rounded-3xl text-white text-sm "
              onClick={handleSumit}
            >
              ลงทะเบียน
            </button>
          </div>
        </div>
        <div className=" absolute left-0 top-0">
          <FormLeft className=" xl:w-auto xl:h-auto lg:w-[402px] lg:h-[724px] md:w-[258px] md:h-[475px] max-md:hidden " />
        </div>
        <div className=" absolute bottom-0 right-0">
          <FormRight className="xl:w-auto xl:h-auto lg:w-[540px] lg:h-[674px] md:w-[345px] md:h-[431px] max-md:hidden" />
        </div>
      </div>
    </>
  );
}
