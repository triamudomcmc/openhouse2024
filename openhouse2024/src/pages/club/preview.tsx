import ClubBg from "@/vectors/bg/club";
import ClubTop from "@/vectors/club/ClubTop";
import BackArrow from "@/vectors/backarrow";
import { useRouter } from "next/navigation";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import ClubWidget from "@/vectors/club/clubwidget";
import axios from "axios";
import UserIcon from "@/vectors/club/user";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import PencilIcon from "@/vectors/club/pencil";
import ClubBottom from "@/vectors/club/clubBottom";
import TextBox from "@/vectors/club/textbox";
import ClubBgM from "@/vectors/bg/ClubM";
import ClubStar from "@/vectors/club/star";
import ReviewWidget from "@/vectors/club/reviewWidget";
import ReviewCard from "@/vectors/club/reviewCard";
import ReviewCardR from "@/vectors/club/reviewCardR";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import FormData from "form-data";
import Head from "next/head";
import ReviewCard3 from "@/vectors/club/reviewCard3";

export default function ClubPreview() {
  const [clubs, setClubs] = useState("");
  const [clubsE, setClubsE] = useState("");
  const [member, setMember] = useState("");
  const [ig, setIg] = useState("");
  const [fb, setFb] = useState("");
  const [other, setOther] = useState("");
  const [clubsactivity, setClubActivity] = useState("");
  const [benefits, setBenefits] = useState("");
  const [workings, setWorkings] = useState("");
  const [review1, setReview1] = useState("");
  const [review1Name, setReview1Name] = useState("");
  const [review1Gen, setReview1Gen] = useState("");
  const [review1Contact, setReview1Contact] = useState("");
  const [review2, setReview2] = useState("");
  const [review2Name, setReview2Name] = useState("");
  const [review2Gen, setReview2Gen] = useState("");
  const [review2Contact, setReview2Contact] = useState("");
  const [review3, setReview3] = useState("");
  const [review3Name, setReview3Name] = useState("");
  const [review3Gen, setReview3Gen] = useState("");
  const [review3Contact, setReview3Contact] = useState("");
  const [image1, setImage1] = useState("");
  const [image1Type, setImage1Type] = useState("");
  const [image2, setImage2] = useState("");
  const [image2Type, setImage2Type] = useState("");
  const [image3, setImage3] = useState("");
  const [image3Type, setImage3Type] = useState("");
  const [review1Profile, setReview1Profile] = useState("");
  const [review1ProfileType, setReview1ProfileType] = useState("");
  const [review2Profile, setReview2Profile] = useState("");
  const [review2ProfileType, setReview2ProfileType] = useState("");
  const [review3Profile, setReview3Profile] = useState("");
  const [review3ProfileType, setReview3ProfileType] = useState("");
  const [showReview2, setShowReview2] = useState(false);
  const [showReview3, setShowReview3] = useState(false);

  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login"); // The user is not authenticated, handle it here.
    },
  });

  let image1Data = JSON.stringify({
    email: session?.user?.email,
    imageType: "image1",
  });

  let image1Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-image",
    headers: {
      "Content-Type": "application/json",
    },
    data: image1Data,
  };

  async function image1Request() {
    try {
      const response = await axios.request(image1Config);
      setImage1(response.data.data);
      setImage1Type(response.data.contenttype);
    } catch (error) {
      console.log(error);
    }
  }

  let image2Data = JSON.stringify({
    email: session?.user?.email,
    imageType: "image2",
  });

  let image2Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-image",
    headers: {
      "Content-Type": "application/json",
    },
    data: image2Data,
  };

  async function image2Request() {
    try {
      const response = await axios.request(image2Config);
      setImage2(response.data.data);
      setImage2Type(response.data.contenttype);
    } catch (error) {
      console.log(error);
    }
  }

  let image3Data = JSON.stringify({
    email: session?.user?.email,
    imageType: "image3",
  });

  let image3Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-image",
    headers: {
      "Content-Type": "application/json",
    },
    data: image3Data,
  };

  async function image3Request() {
    try {
      const response = await axios.request(image3Config);
      setImage3(response.data.data);
      setImage3Type(response.data.contenttype);
    } catch (error) {
      console.log(error);
    }
  }

  let profile1Data = JSON.stringify({
    email: session?.user?.email,
    imgprofileType: "imgprofile1",
  });

  let profile1Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-profile",
    headers: {
      "Content-Type": "application/json",
    },
    data: profile1Data,
  };

  async function profile1Request() {
    try {
      const response = await axios.request(profile1Config);
      console.log(JSON.stringify(response.data));
      setReview1Profile(response.data.data);
      setReview1ProfileType(response.data.contenttype);
    } catch (error) {
      console.log(error);
    }
  }

  let profile2Data = JSON.stringify({
    email: session?.user?.email,
    imgprofileType: "imgprofile2",
  });

  let profile2Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-profile",
    headers: {
      "Content-Type": "application/json",
    },
    data: profile2Data,
  };

  async function profile2Request() {
    try {
      const response = await axios.request(profile2Config);
      console.log(JSON.stringify(response.data));
      setReview2Profile(response.data.data);
      setReview2ProfileType(response.data.contenttype);
      setShowReview2(true);
    } catch (error) {
      console.log(error);
    }
  }

  let profile3Data = JSON.stringify({
    email: session?.user?.email,
    imgprofileType: "imgprofile3",
  });

  let profile3Config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/get-profile",
    headers: {
      "Content-Type": "application/json",
    },
    data: profile3Data,
  };

  async function profile3Request() {
    try {
      const response = await axios.request(profile3Config);
      console.log(JSON.stringify(response.data));
      setReview3Profile(response.data.data);
      setReview3ProfileType(response.data.contenttype);
      setShowReview3(true);
    } catch (error) {
      console.log(error);
    }
  }

  const data = JSON.stringify({
    email: session?.user?.email,
  });

  const config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/roles/info",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  function request() {
    axios
      .request(config)
      .then((response) => {
        setClubs(response.data.info.name);
        setMember(response.data.info.members);
        setIg(response.data.info.ig);
        setFb(response.data.info.facebook);
        setOther(response.data.info.others);
        setClubActivity(response.data.info.clubsactivity);
        setBenefits(response.data.info.benefits);
        setWorkings(response.data.info.workings);
        setReview1Name(response.data.info.review_1.name);
        setReview1Gen(response.data.info.review_1.gen);
        setReview1Contact(response.data.info.review_1.contact);
        setReview1(response.data.info.review_1.review);
        setReview2Name(response.data.info.review_2.name);
        setReview2Gen(response.data.info.review_2.gen);
        setReview2Contact(response.data.info.review_2.contact);
        setReview2(response.data.info.review_2.review);
        setReview3Name(response.data.info.review_3.name);
        setReview3Gen(response.data.info.review_3.gen);
        setReview3Contact(response.data.info.review_3.contact);
        setReview3(response.data.info.review_3.review);
        console.log("success");
      })
      .catch((error) => {
        console.log(error);
        router.push("/club");
      });
  }

  useEffect(() => {
    // User email is available, make the API request
    request();
    image1Request();
    image2Request();
    image3Request();
    profile1Request();
    profile2Request();
    profile3Request();
  }, []);

  function back() {
    router.push("/club");
  }

  return (
    <>
      <div className=" bg-[#5A2561] h-full sm:min-h-[3500px]">
        <div className=" relative w-full top-0 left-0">
          <div className=" lg:block hidden">
            <ClubBg />
          </div>
          <div className=" lg:hidden block">
            <ClubBgM />
          </div>
          <div className=" flex justify-center">
            <div className=" absolute md:top-[8%] sm:top-[5%] flex w-5/6 justify-evenly items-center">
              <button className=" flex" onClick={back}>
                <BackArrow />
                <span className=" pl-2  text-2xl align-middle text-[#55247B]">
                  ย้อนกลับ
                </span>
              </button>
            </div>
          </div>
          <div className=" absolute md:top-[10%] sm:top-[8%] flex w-full justify-center">
            <div className=" absolute w-5/6  ">
              <p className="  p-6   font-extrabold text-transparent md:text-5xl sm:text-3xl bg-clip-text break-words bg-gradient-to-b from-[#81109D] to-[#D62C9F]  from-40% to-100% py-5 font-Thai text-center z-10">
                ชมรม{clubs}
              </p>
            </div>
          </div>
          <div className=" absolute lg:top-[13%] md:top-[12%] sm:top-[13%] flex w-full justify-center">
            <div className=" absolute w-1/2 flex  justify-center gap-4 items-center ">
              <div className="  flex justify-end min-w-[150px] md:min-w-[200px] ">
                <div className=" hidden md:flex">
                  <UserIcon />
                </div>
                <p className=" text-4xl block text-center text-transparent  bg-clip-text bg-gradient-to-b from-[#632790] to-[#D738A4]">
                  สมาชิก <br />
                  <p className=" text-3xl mt-2">{member}</p>
                </p>
              </div>
              <div>
                <svg
                  className=" w-[6px] "
                  viewBox="0 0 4 86"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M2 2L2 84"
                    stroke="url(#paint0_linear_250_1393)"
                    stroke-width="4"
                    stroke-linecap="round"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_250_1393"
                      x1="-1.00003"
                      y1="-21.1529"
                      x2="-1.00003"
                      y2="84"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stop-color="#D738A4" />
                      <stop offset="1" stop-color="#7533A8" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>

              <div className=" md:w-[200px] w-[150px]">
                <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai ">
                  {" "}
                  IG:{ig}
                </p>
                <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai ">
                  {" "}
                  FB:{fb}
                </p>
                <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai ">
                  {" "}
                  อื่นๆ:{other}
                </p>
              </div>
            </div>
          </div>
          <div className=" flex justify-center w-full absolute lg:top-[16%] md:top-[14%] sm:top-[17%]">
            <div className=" md:w-1/2 sm:w-full ">
              <ClubWidget />
            </div>
          </div>
          <div className=" flex justify-center w-full absolute lg:top-[19%] md:top-[16%] sm:top-[23%]">
            <div className=" lg:w-1/2 md:w-2/3">
              {
                //section1
              }
              <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-3xl py-5 block w-full   lg:hidden ">
                ชมรมนี้ทำอะไร
              </p>
              <div className=" flex justify-center gap-3">
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai  min-w-52 text-5xl py-5 hidden text-right lg:block ">
                  ชมรมนี้
                  <br />
                  ทำอะไร<ClubStar />
                </p>

                <div className=" w-auto relative  ">
                  <svg
                    className=" lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:h-[220px] "
                    viewBox="0 0 509 307"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="509" height="307" rx="23" fill="#D9D9D9" />
                  </svg>
                  <div className=" absolute  w-full h-full">
                    <p className="  text-center text-[#7533A8] ">
                      ภาพบรรยากาศในชมรม
                    </p>
                  </div>
                  <div className=" absolute w-full top-0">
                    <img
                      className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                      src={`data:${image1Type};base64,${image1}`}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-center mt-10">
                <div className=" w-full  justify-center hidden md:block">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none whitespace-pre-line "
                    value={clubsactivity}
                  ></textarea>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <p className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none whitespace-pre-line ">
                    {clubsactivity}
                  </p>
                </div>
              </div>
              {
                //section2
              }
              <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl block w-full py-5  lg:hidden ">
                ประโยชน์ที่ได้รับจากการเข้าชมรม
              </p>
              <div className=" flex justify-center gap-3 lg:mt-10">
                <div className=" w-auto relative  ">
                  <svg
                    className=" lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:h-[220px] "
                    viewBox="0 0 509 307"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="509" height="307" rx="23" fill="#D9D9D9" />
                  </svg>
                  <div className=" absolute left-0  w-full h-full z-20">
                    <p className="  text-center text-[#7533A8] ">
                      ภาพบรรยากาศในชมรม
                    </p>
                  </div>
                  <div className=" absolute w-full top-0 z-10">
                    <img
                      className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                      src={`data:${image2Type};base64,${image2}`}
                    />
                  </div>
                </div>
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-5xl py-5 hidden lg:block ">
                  ประโยชน์
                  <br />
                  ที่ได้รับ
                  <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-3xl  hidden lg:block ">
                    จาการเข้าชมรม<ClubStar />
                  </p>
                </p>
              </div>
              <div className=" flex justify-center mt-10">
                <div className=" w-full  justify-center hidden md:block">
                  <p className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none whitespace-pre-line ">
                    {benefits}
                  </p>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none whitespace-pre-line "
                    value={benefits}
                  ></textarea>
                </div>
              </div>
              {
                //section3
              }
              <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-3xl block w-full py-5  lg:hidden ">
                ผลงานของชมรม
              </p>
              <div className=" flex justify-center gap-3 lg:mt-10">
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-5xl py-5 hidden lg:block ">
                  ผลงาน
                  <br />
                  ของชมรม<ClubStar />
                </p>

                <div className=" w-auto relative  ">
                  <svg
                    className=" lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:h-[220px] "
                    viewBox="0 0 509 307"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <rect width="509" height="307" rx="23" fill="#D9D9D9" />
                  </svg>
                  <div className=" absolute  w-full h-full">
                    <p className="  text-center text-[#7533A8] ">
                      ภาพบรรยากาศในชมรม
                    </p>
                  </div>
                  <div className=" absolute w-full top-0">
                    <img
                      className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                      src={`data:${image3Type};base64,${image3}`}
                    />
                  </div>
                </div>
              </div>
              <div className=" flex justify-center mt-10">
                <div className=" w-full  justify-center hidden md:block">
                  <p className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none whitespace-pre-line ">
                    {workings}
                  </p>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none whitespace-pre-line "
                    value={benefits}
                  ></textarea>
                </div>
              </div>

              {
                //review1
              }
              <div>
                <div className=" mt-10">
                  <ReviewWidget />
                </div>
                <div className=" w-full relative">
                  <ReviewCard />
                  <div className=" absolute top-0 mt-5 md:left-5 sm:left-2 h-full ">
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
                      className="absolute top-0 left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                      src={`data:${review1ProfileType};base64,${review1Profile}`}
                    />
                    <div className=" block md:mt-1  z-50 relative">
                      <p className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai">
                        {review1Name}
                      </p>

                      <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                        {" "}
                        เตรียมอุดม {review1Gen}
                      </p>
                      <div className=" flex">
                        <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai">
                          {review1Contact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute w-full top-5 h-3/4 right-0 flex justify-end">
                    <p className=" text-white  text-md break-words font-Thai md:mr-10 sm:mr-5   w-3/5  h-full   bg-transparent align-top resize-none whitespace-pre-line">
                      {review1}
                    </p>
                  </div>
                </div>

                {
                  //review2
                }
                <div
                  className={showReview2 ? " w-full relative mt-10" : "hidden"}
                >
                  <ReviewCardR />
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
                        src={`data:${review2ProfileType};base64,${review2Profile}`}
                      />
                    </div>
                    <div className=" block md:mt-1  relative z-50">
                      <p className=" text-white md:text-2xl sm:text-md sm:w-[100px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai text-right">
                        {review2Name}
                      </p>

                      <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai text-right ">
                        {" "}
                        เตรียมอุดม {review2Gen}
                      </p>
                      <div className=" flex">
                        <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai text-right">
                          {review2Contact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute w-full top-5 h-3/4 left-0 flex justify-start">
                    <textarea
                      className=" text-white  text-md break-words font-Thai md:ml-10 sm:ml-5   w-3/5  h-full  bg-transparent align-top resize-none whitespace-pre-line"
                      value={review2}
                    ></textarea>
                  </div>
                </div>

                {
                  //review3
                }
                <div className={showReview3 ? " w-full relative mt-10" : "hidden"}>
                  <ReviewCard />
                  <div className=" absolute top-0 mt-5 md:left-5 sm:left-2 h-full ">
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
                      className="absolute top-0 left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                      src={`data:${review3ProfileType};base64,${review3Profile}`}
                    />
                    <div className=" block md:mt-1  z-50 relative">
                      <p className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai">
                        {review3Name}
                      </p>

                      <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                        {" "}
                        เตรียมอุดม {review3Gen}
                      </p>
                      <div className=" flex">
                        <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai">
                          {review3Contact}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className=" absolute w-full top-5 h-3/4 right-0 flex justify-end">
                    <p className=" text-white  text-md break-words font-Thai md:mr-10 sm:mr-5   w-3/5  h-full  bg-transparent align-top resize-none whitespace-pre-line">
                      {review3}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
