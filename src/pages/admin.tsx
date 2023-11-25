import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReviewCardLine from "@/vectors/club/reviewCardLine";
import ReviewCardLineR from "@/vectors/club/reviewCardLineR";
import { v4 as uuidv4 } from "uuid";

export default function Adminpanel() {
  interface Item {
    uuid: string;
    id: number;
    name: string;
    tag: string;
    status: string;
    members: string;
    ig: string;
    facebook: string;
    others: string;
    admission: string;
    subjects: string;
    interests: string;
    clubsactivity: string;
    benefits: string;
    workings: string;
    organizationdo: string;
    position: string;
    working: string;
    review_1: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    review_2: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    review_3: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    image1: string;
    image2: string;
    image3: string;
    imgprofile1: string;
    imgprofile2: string;
    imgprofile3: string;
    logo: string;
    isOpen: boolean;
  }

  const router = useRouter();
  const axios = require("axios");
  const [items, setItems] = useState<Item[]>([]);
  const [info, setInfo] = useState<Item[]>([]);
  const [approve, setApprove] = useState(false);
  const [deny, setDeny] = useState(false);

  useEffect(() => {
    const itemsWithOpenState = info.map((item) => ({
      ...item,
      isOpen: false,
      uuid: uuidv4(),
    }));
    setItems(itemsWithOpenState);
  }, [info]);

  const toggleItem = (itemUUID: string): void => {
    setItems((prevItems) => {
      return prevItems.map((item) => {
        if (item.uuid === itemUUID) {
          return { ...item, isOpen: !item.isOpen };
        }
        return item;
      });
    });
  };

  const { data: session,status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/Login");
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
    "environmentKeys" : process.env.ENVIRONMENT_KEY
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/admin/pendings`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function pendingRequest() {
    try {
      const response = await axios.request(config);
      setInfo(response.data);
      console.log(response.data)
    } catch (error) {
      console.log(error);
    }
  }

  const approveRequest = (itemUUID: string): void => {
    const itemToPost = items.find((item) => item.uuid === itemUUID);

    if (!itemToPost) {
      console.error("Item not found for posting.");
      return;
    }

    // Define the API endpoint where you want to send the data
    const apiEndpoint =
      `https://openhouse2024-backend.vercel.app/api/admin/approve`;

    // Define the data you want to send (assuming JSON data)
    const postData = {
      email: session?.user?.email,
      type: itemToPost.tag,
      name: itemToPost.name,
      "environmentKeys" : process.env.ENVIRONMENT_KEY
      // Include other relevant properties here
    };

    // Send a POST request to the API
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setApprove(true);
        console.log("Data posted successfully:", data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  const rejectRequest = (itemUUID: string): void => {
    const itemToPost = items.find((item) => item.uuid === itemUUID);

    if (!itemToPost) {
      console.error("Item not found for posting.");
      return;
    }

    // Define the API endpoint where you want to send the data
    const apiEndpoint =
      `${process.env.BASE_URL}/api/admin/decline"`

    // Define the data you want to send (assuming JSON data)
    const postData = {
      email: session?.user?.email,
      type: itemToPost.tag,
      name: itemToPost.name,
      "environmentKeys" : process.env.ENVIRONMENT_KEY
      // Include other relevant properties here
    };

    // Send a POST request to the API
    fetch(apiEndpoint, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        setDeny(true);
        console.log("Data posted successfully:", data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  useEffect(() => {
    pendingRequest();
  }, [approve, deny ,status]);

  return (
    <>
      <div className=" w-full justify-center flex mt-[100px]">
        <p className=" text-3xl font-bold font-Thai ">
          ตรวจสอบข้อมูลหน่วยงานบนเว็บไซต์
        </p>
      </div>
      <div className=" w-full justify-center flex mt-[100px]"></div>
      <div className=" w-full justify-center flex">
        <svg
          width="1151"
          height="2"
          viewBox="0 0 1151 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 1L1151 1.0001" stroke="black" stroke-width="2" />
        </svg>
      </div>
      {items.map((item) => (
        <div key={item.uuid} className="">
          <div className=" justify-center flex w-full mt-5">
            <div className="  lg:w-3/5 md:w-5/6 sm:w-full border-black border rounded-xl">
              <div className=" flex justify-between bg-[#4A1B6E] rounded-xl ">
                <p className=" py-5 mx-5 h-full text-white  text-1xl  font-Thai align-middle sm:w-20 md:w-auto">
                  {item.name}
                </p>
                <button
                  onClick={() => toggleItem(item.uuid)}
                  className={
                    item.isOpen
                      ? " hidden"
                      : "bg-gradient-to-r from-[#7533A8] to-[#D738A4] text-white px-20 rounded-full md:mx-5 md:w-auto md:text-base sm:text-sm sm:w-60 my-2 py-3 h-full font-Thai align-middle"
                  }
                >
                  ดูข้อมูลหน่วยงาน
                </button>
                <div
                  className={
                    item.isOpen ? "flex mx-5 align-middle gap-4 " : "hidden"
                  }
                >
                  <button onClick={() => approveRequest(item.uuid)}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 52 52"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M0 11C0 4.92487 4.92487 0 11 0H41C47.0751 0 52 4.92487 52 11V41C52 47.0751 47.0751 52 41 52H11C4.92487 52 0 47.0751 0 41V11Z"
                        fill="#19C57C"
                      />
                      <path
                        d="M17.25 27.25L22.25 32.25L34.75 19.75"
                        stroke="white"
                        stroke-width="3"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </button>
                  <button onClick={() => rejectRequest(item.uuid)}>
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 57 53"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g filter="url(#filter0_d_364_388)">
                        <path
                          d="M4 11C4 4.92487 8.92487 0 15 0H45C51.0751 0 56 4.92487 56 11V41C56 47.0751 51.0751 52 45 52H15C8.92487 52 4 47.0751 4 41V11Z"
                          fill="#F83E3E"
                        />
                      </g>
                      <g filter="url(#filter1_d_364_388)">
                        <path
                          d="M22.5 33.5L37.5 18.5M22.5 18.5L37.5 33.5"
                          stroke="white"
                          stroke-width="4"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </g>
                      <defs>
                        <filter
                          id="filter0_d_364_388"
                          x="0"
                          y="0"
                          width="60"
                          height="60"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_364_388"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_364_388"
                            result="shape"
                          />
                        </filter>
                        <filter
                          id="filter1_d_364_388"
                          x="11"
                          y="11"
                          width="38"
                          height="38"
                          filterUnits="userSpaceOnUse"
                          color-interpolation-filters="sRGB"
                        >
                          <feFlood
                            flood-opacity="0"
                            result="BackgroundImageFix"
                          />
                          <feColorMatrix
                            in="SourceAlpha"
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                            result="hardAlpha"
                          />
                          <feOffset dy="4" />
                          <feGaussianBlur stdDeviation="2" />
                          <feComposite in2="hardAlpha" operator="out" />
                          <feColorMatrix
                            type="matrix"
                            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                          />
                          <feBlend
                            mode="normal"
                            in2="BackgroundImageFix"
                            result="effect1_dropShadow_364_388"
                          />
                          <feBlend
                            mode="normal"
                            in="SourceGraphic"
                            in2="effect1_dropShadow_364_388"
                            result="shape"
                          />
                        </filter>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
              {
                //on off
              }
              <div className={item.isOpen ? "w-full text-center" : "hidden"}>
                <div className=" flex justify-center">
                <img className=" w-[200px] h-[200px]" src={item.logo} />
                </div>
                <p className=" text-[#0F114C] text-5xl font-Thai mt-5">
                  {item.name}
                </p>
                <p className=" text-black text-xl mt-5 font-Thai">
                  สมาชิก :{item.members}
                </p>
                <div className=" flex justify-center">
                  <p className=" text-black text-left text-xl mt-5 w-[200px] font-Thai">
                    IG :{item.ig}
                  </p>
                </div>
                <div className=" flex justify-center">
                  <p className=" text-black text-left text-xl mt-5 w-[200px] font-Thai">
                    FB :{item.facebook}
                  </p>
                </div>
                <div className=" flex justify-center">
                  <p className=" text-black text-left text-xl mt-5 w-[200px] font-Thai">
                    อื่นๆ {item.others}
                  </p>
                </div>
                <div className=" justify-center flex mt-10 text-2xl lg:hidden">
                  <p>ชมรมนี้ทำอะไร</p>
                </div>
                <div className=" flex justify-center mt-10 gap-3 ">
                  <p className=" text-7xl  text-left font-Thai mt-4 hidden lg:block ">
                    ชมรมนี้
                    <br />
                    ทำอะไร
                  </p>
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border  "
                    src={item.image1}
                  />
                </div>
                <div className="flex justify-center mt-7 ">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai min-h-[200px] md:w-[750px] sm:w-[400px]  bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.clubsactivity}
                    {item.admission}
                    {item.organizationdo}
                  </p>
                </div>
                <div className=" justify-center flex mt-10 text-2xl lg:hidden">
                  <p>ประโยชน์ที่ได้รับจากการเข้าชมรม</p>
                </div>
                <div className=" flex justify-center mt-4 gap-3 ">
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border  "
                    src={item.image2}
                  />
                  <div>
                    <p className=" text-7xl hidden lg:block  text-left font-Thai mt-4">
                      ประโยชน์
                      <br />
                      ที่ได้รับ
                    </p>
                    <p className=" text-4xl hidden lg:block  text-left font-Thai ">
                      จากการเข้าชมรม
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai min-h-[200px] md:w-[750px] sm:w-[400px] bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.benefits}
                    {item.subjects}
                    {item.position}
                  </p>
                </div>
                <div className=" justify-center flex mt-10 text-2xl lg:hidden">
                  <p>ผลงานของชมรม</p>
                </div>
                <div className=" flex justify-center mt-10 gap-3 ">
                  <div>
                    <p className=" text-7xl  text-left font-Thai mt-4 hidden lg:block">
                      ผลงาน
                    </p>
                    <p className=" text-4xl  text-left font-Thai hidden lg:block ">
                      ของชมรม
                    </p>
                  </div>
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border "
                    src={item.image3}
                  />
                </div>
                <div className="flex justify-center mt-7">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai min-h-[200px] md:w-[750px] sm:w-[400px] bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.workings}
                    {item.interests}
                    {item.working}
                  </p>
                </div>
                <p className=" text-black text-5xl mt-5 font-Thai">
                  รีวิวจากรุ่นพี่
                </p>
                <div className=" flex justify-center mt-10">
                  <div className=" w-full relative">
                    <ReviewCardLine />
                    <div className=" absolute top-0 mt-5 md:left-5 sm:left-2 h-full ">
                      <img
                        className=" left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                        src={item.imgprofile1}
                      />
                      <div className=" block md:mt-1 text-left  z-50 relative">
                        <p className="  md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px] text-[#291A54]  bg-transparent font-Thai">
                          {item.review_1.name}
                        </p>

                        <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                          {" "}
                          เตรียมอุดม {item.review_1.gen}
                        </p>
                        <div className=" flex">
                          <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai">
                            {item.review_1.contact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" absolute w-full top-5 h-3/4 right-0 flex text-left justify-end">
                      <p className=" text-black  text-md break-words font-Thai md:mr-10 sm:mr-5   w-3/5  h-full   bg-transparent align-top resize-none overflow-scroll whitespace-pre-line">
                        {item.review_1.review}
                      </p>
                    </div>
                  </div>
                </div>
                <div
                  className= " w-full relative mt-10"
                >
                  <ReviewCardLineR />
                  <div className=" absolute top-0 mt-5 md:right-5 sm:right-2 h-full justify-end ">
                    <div className=" flex justify-end">
                      <svg
                        className="block lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px]"
                        viewBox="0 0 153 153"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect
                          width="152.941"
                          height="152.941"
                          rx="30"
                          fill="#D9D9D9"
                        />
                      </svg>

                      <img
                        className="absolute top-0 right-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                        src={item.imgprofile2}
                      />
                    </div>
                    <div className=" block md:mt-1  relative z-50">
                      <p className=" text-black md:text-2xl sm:text-md sm:w-[100px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai text-right">
                        {item.review_2.name}
                      </p>

                      <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai text-right ">
                        {" "}
                        เตรียมอุดม {item.review_2.gen}
                      </p>
                      <div className=" flex">
                        <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai text-right">
                          {item.review_2.contact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute w-full top-5 h-3/4 left-0 flex justify-start">
                    <textarea
                      className=" text-black  text-md break-words font-Thai md:ml-10 sm:ml-5   w-3/5  h-full  bg-transparent align-top resize-none overflow-scroll whitespace-pre-line"
                      value={item.review_2.review}
                    ></textarea>
                  </div>
                </div>
                <div className=" flex justify-center mt-10">
                  <div className=" w-full relative">
                    <ReviewCardLine />
                    <div className=" absolute top-0 mt-5 md:left-5 sm:left-2 h-full ">
                      <img
                        className=" left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                        src={item.imgprofile3}
                      />
                      <div className=" block md:mt-1 text-left  z-50 relative">
                        <p className="  md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px] text-[#291A54]  bg-transparent font-Thai">
                          {item.review_3.name}
                        </p>

                        <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                          {" "}
                          เตรียมอุดม {item.review_3.gen}
                        </p>
                        <div className=" flex">
                          <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai">
                            {item.review_3.contact}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className=" absolute w-full top-5 h-3/4 right-0 flex text-left justify-end">
                      <p className=" text-black  text-md break-words font-Thai md:mr-10 sm:mr-5   w-3/5  h-full   bg-transparent align-top resize-none overflow-scroll whitespace-pre-line">
                        {item.review_3.review} 
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
