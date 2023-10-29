import axios from "axios";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import ReviewCard from "@/vectors/club/reviewCard";
import ReviewCardR from "@/vectors/club/reviewCardR";
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
    organizationdo : string;
    position : string;
    working : string;
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
    image1: {
      data: string;
      contenttype: string;
    };
    image2: {
      data: string;
      contenttype: string;
    };
    image3: {
      data: string;
      contenttype: string;
    };
    imgprofile1: {
      data: string;
      contenttype: string;
    };
    imgprofile2: {
      data: string;
      contenttype: string;
    };
    imgprofile3: {
      data: string;
      contenttype: string;
    };
    isOpen: boolean;
  }

  const router = useRouter();
  const axios = require("axios");
  const [items, setItems] = useState<Item[]>([]);
  const [info, setInfo] = useState<Item[]>([]);
  const [approve,setApprove] =useState(false);
  const [deny,setDeny] =useState(false)

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

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/Login");
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
  });

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/admin/pendings",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function pendingRequest() {
    try {
      const response = await axios.request(config);
      setInfo(response.data);
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
      "https://openhouse2024-backend.vercel.app/api/admin/approve";

    // Define the data you want to send (assuming JSON data)
    const postData = {
      email: session?.user?.email,
      type: itemToPost.tag,
      name: itemToPost.name,
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
        setApprove(true)
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
      "https://openhouse2024-backend.vercel.app/api/admin/decline";

    // Define the data you want to send (assuming JSON data)
    const postData = {
      email: session?.user?.email,
      type: itemToPost.tag,
      name: itemToPost.name,
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
        setDeny(true)
        console.log("Data posted successfully:", data);
      })
      .catch((error) => {
        console.error("Error posting data:", error);
      });
  };

  useEffect(() => {
    pendingRequest();
  }, [approve,deny]);

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
                <p className=" py-5 mx-5 h-full text-white  text-1xl  font-Thai align-middle">
                  {item.name}
                </p>
                <button
                  onClick={() => toggleItem(item.uuid)}
                  className={
                    item.isOpen
                      ? " hidden"
                      : "bg-gradient-to-r from-[#7533A8] to-[#D738A4] text-white px-20 rounded-full mx-5 my-2 py-3 h-full font-Thai align-middle"
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
                <div className=" justify-center flex mt-10 text-2xl md:hidden">
                  <p>ชมรมนี้ทำอะไร</p>
                </div>
                <div className=" flex justify-center mt-10 gap-3 ">
                  <p className=" text-7xl  text-left font-Thai mt-4 hidden md:block ">
                    ชมรมนี้
                    <br />
                    ทำอะไร
                  </p>
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border  "
                    src={`data:${item.image1?.contenttype};base64,${item.image1?.data}`}
                  />
                </div>
                <div className="flex justify-center mt-7 ">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai h-60 md:w-[750px] sm:w-[400px] md:h-72 sm:h-[500px] bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.clubsactivity}
                    {item.admission}
                    {item.organizationdo}
                  </p>
                </div>
                <div className=" justify-center flex mt-10 text-2xl md:hidden">
                  <p>ประโยชน์ที่ได้รับจากการเข้าชมรม</p>
                </div>
                <div className=" flex justify-center mt-4 gap-3 ">
                
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border  "
                    src={`data:${item.image2?.contenttype};base64,${item.image2?.data}`}
                  />
                  <div>
                    <p className=" text-7xl hidden md:block  text-left font-Thai mt-4">
                      ประโยชน์
                      <br />
                      ที่ได้รับ
                    </p>
                    <p className=" text-4xl hidden md:block  text-left font-Thai ">
                      จากการเข้าชมรม
                    </p>
                  </div>
                </div>
                <div className="flex justify-center mt-7">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai h-60 md:w-[750px] sm:w-[400px] md:h-72 sm:h-[500px] bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.benefits}
                    {item.subjects}
                    {item.position}
                  </p>
                </div>
                <div className=" justify-center flex mt-10 text-2xl md:hidden">
                  <p>ผลงานของชมรม</p>
                </div>
                <div className=" flex justify-center mt-10 gap-3 ">
                  <div>
                    <p className=" text-7xl  text-left font-Thai mt-4 hidden md:block">ผลงาน</p>
                    <p className=" text-4xl  text-left font-Thai hidden md:block ">ของชมรม</p>
                  </div>
                  <img
                    className="  lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl object-cover border "
                    src={`data:${item.image3?.contenttype};base64,${item.image3?.data}`}
                  />
                </div>
                <div className="flex justify-center mt-7">
                  <p className=" text-[#582A88]  text-lg break-words font-Thai h-60 md:w-[750px] sm:w-[400px] md:h-72 sm:h-[500px] bg-transparent align-top text-left resize-none overflow-y-scroll whitespace-pre-line border">
                    {item.workings}
                    {item.interests}
                    {item.working}
                  </p>
                </div>
                <p className=" text-black text-5xl mt-5 font-Thai">
                  รีวิวจากรุ่นพี่
                </p>
                <div className=" flex justify-center mt-10">
                  <div className="relative z-0 md:w-[850px] sm:w-[500px]">
                    <div className="absolute z-10 top-5 left-5 ">
                      <img
                        className=" top-0 z-20 flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px] rounded-3xl border "
                        src={`data:${item.imgprofile1?.contenttype};base64,${item.imgprofile1?.data}`}
                      />
                      <p className="  md:mt-[20px] sm:mt-[5px] text-2xl w-40 text-left font-Thai">
                        {item.review_1.name}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-40 text-left font-Thai">
                        เตรียมอุดม {item.review_1.gen}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-40 text-left font-Thai">
                        {item.review_1.contact}
                      </p>
                    </div>
                    <p className=" absolute border  top-5 right-12 z-0 mt-[5px] text-black text-left  text-md break-words font-Thai  md:w-[480px] md:ml-[240px] md:h-[266px] sm:w-[250px] sm:ml-[140px] sm:h-[120px] bg-transparent align-top resize-none overflow-y-scroll whitespace-pre-line">
                      {item.review_1.review}
                    </p>

                    <ReviewCardLine />
                  </div>
                </div>
                <div className=" flex justify-center mt-10">
                  <div className="relative z-0 md:w-[850px] sm:w-[500px]">
                    <p className=" absolute border  top-5 md:-left-44 sm:-left-24  z-10 mt-[5px] text-black text-left  text-md break-words font-Thai  md:w-[480px] md:ml-[240px] md:h-[266px] sm:w-[250px] sm:ml-[140px] sm:h-[120px] bg-transparent align-top resize-none overflow-y-scroll whitespace-pre-line">
                      {item.review_2.review}
                    </p>
                    <div className="absolute z-10 top-5 right-5 w-60   ">
                      <div className=" flex justify-end">
                        <img
                          className=" top-0 z-20 flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px]  rounded-3xl border"
                          src={`data:${item.imgprofile2?.contenttype};base64,${item.imgprofile2?.data}`}
                        />
                      </div>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-2xl w-60 text-right font-Thai">
                        {item.review_2.name}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-60 text-right font-Thai">
                        เตรียมอุดม {item.review_2.gen}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-60 text-right font-Thai">
                        {item.review_2.contact}
                      </p>
                    </div>

                    <ReviewCardLineR />
                  </div>
                </div>
                <div className=" flex justify-center mt-10">
                  <div className="relative z-0 md:w-[850px] sm:w-[500px]">
                    <div className="absolute z-10 top-5 left-5 ">
                      <img
                        className=" top-0 z-20 flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px] rounded-3xl border"
                        src={`data:${item.imgprofile3?.contenttype};base64,${item.imgprofile3?.data}`}
                      />
                      <p className="  md:mt-[20px] sm:mt-[5px] text-2xl w-40 text-left font-Thai">
                        {item.review_3.name}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-40 text-left font-Thai">
                        เตรียมอุดม {item.review_3.gen}
                      </p>
                      <p className="  md:mt-[20px] sm:mt-[5px] text-xl w-40 text-left font-Thai">
                        {item.review_3.contact}
                      </p>
                    </div>
                    <p className=" absolute border  top-5 right-12 z-0 mt-[5px] text-black text-left  text-md break-words font-Thai  md:w-[480px] md:ml-[240px] md:h-[266px] sm:w-[250px] sm:ml-[140px] sm:h-[120px] bg-transparent align-top resize-none overflow-y-scroll whitespace-pre-line">
                      {item.review_3.review}
                    </p>

                    <ReviewCardLine />
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
