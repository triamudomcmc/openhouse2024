import ClubBg from "@/vectors/bg/club";
import ClubTop from "@/vectors/club/ClubTop";
import BackArrow from "@/vectors/backarrow";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import ClubWidget from "@/vectors/club/clubwidget";
import axios from "axios";
import UserIcon from "@/vectors/club/user";
import PencilIcon from "@/vectors/club/pencil";
import ClubBgM from "@/vectors/bg/ClubM";
import ClubStar from "@/vectors/club/star";
import ReviewWidget from "@/vectors/club/reviewWidget";
import ReviewCard from "@/vectors/club/reviewCard";
import ReviewCardR from "@/vectors/club/reviewCardR";
import ReviewCard3 from "@/vectors/club/reviewCard3";
import DeleteIcon from "@/vectors/club/deleteIcon";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import FormData from "form-data";

export default function NewEdit() {
  const [clubs, setClubs] = useState("");
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
  const [review1EditMode, setReview1EditMode] = useState(false);
  const [review1NameEditMode, setReview1NameEditMode] = useState(false);
  const [review1GenEditMode, setReview1GenEditMode] = useState(false);
  const [review1ContactEditMode, setReview1ContactEditMode] = useState(false);
  const [review2, setReview2] = useState("");
  const [review2Name, setReview2Name] = useState("");
  const [review2Gen, setReview2Gen] = useState("");
  const [review2Contact, setReview2Contact] = useState("");
  const [review2On, setReview2On] = useState(false);
  const [review3On, setReview3On] = useState(false);
  const [review2EditMode, setReview2EditMode] = useState(false);
  const [review2NameEditMode, setReview2NameEditMode] = useState(false);
  const [review2GenEditMode, setReview2GenEditMode] = useState(false);
  const [review2ContactEditMode, setReview2ContactEditMode] = useState(false);
  const [review3, setReview3] = useState("");
  const [review3Name, setReview3Name] = useState("");
  const [review3Gen, setReview3Gen] = useState("");
  const [review3Contact, setReview3Contact] = useState("");
  const [review3EditMode, setReview3EditMode] = useState(false);
  const [review3NameEditMode, setReview3NameEditMode] = useState(false);
  const [review3GenEditMode, setReview3GenEditMode] = useState(false);
  const [review3ContactEditMode, setReview3ContactEditMode] = useState(false);
  const [memberEditMode, setMemberEditMode] = useState(false);
  const [igEditMode, setIgEditMode] = useState(false);
  const [fbEditMode, setFbEditMode] = useState(false);
  const [otherEditMode, setOtherEditMode] = useState(false);
  const [clubActivityEditMode, setClubActivityEditMode] = useState(false);
  const [benefitsEditMode, setBenefitsEditMode] = useState(false);
  const [workingsEditMode, setWorkingsEditMode] = useState(false);
  const [logo, setLogo] = useState("");
  const [logoFile, setLogoFile] = useState([]);
  const [image1, setImage1] = useState("");
  const [image1File, setImage1File] = useState([]);
  const [image2, setImage2] = useState("");
  const [image2File, setImage2File] = useState([]);
  const [image3, setImage3] = useState("");
  const [image3File, setImage3File] = useState([]);
  const [review1Profile, setReview1Profile] = useState("");
  const [review1ProfileFile, setReview1ProfileFile] = useState([]);
  const [review2Profile, setReview2Profile] = useState("");
  const [review2ProfileFile, setReview2ProfileFile] = useState("");
  const [review3Profile, setReview3Profile] = useState("");
  const [review3ProfileFile, setReview3ProfileFile] = useState("");
  const [editSuccess, seteditSuccess] = useState(false);
  const [editFail, seteditFail] = useState(false);

  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/Login"); // The user is not authenticated, handle it here.
    },
  });

  let dataEdit = JSON.stringify({
    email: session?.user?.email,
    members: member,
    ig: ig,
    facebook: fb,
    others: other,
    clubsactivity: clubsactivity,
    benefits: benefits,
    workings: workings,
    "review_1.name": review1Name,
    "review_1.gen": review1Gen,
    "review_1.contact": review1Contact,
    "review_1.review": review1,
    "review_2.name": review2Name,
    "review_2.gen": review2Gen,
    "review_2.contact": review2Contact,
    "review_2.review": review2,
    "review_3.name": review3Name,
    "review_3.gen": review3Gen,
    "review_3.contact": review3Contact,
    "review_3.review": review3,
  });

  let configEdit = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/clubs/edit",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataEdit,
  };

  async function EditRequest() {
    try {
      const response = await axios.request(configEdit);
      console.log(JSON.stringify(response.data));
      seteditSuccess(true);
    } catch (error) {
      console.log(error);
      seteditFail(true);
    }
  }

  function logoRequest() {
    let logoData = new FormData();
    logoData.append("file", logoFile);
    logoData.append("email", session?.user?.email);

    let logoConfig = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-logo",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: logoData,
    };

    axios
      .request(logoConfig)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function image1Request() {
    let image1Data = new FormData();
    image1Data.append("file", image1File);
    image1Data.append("email", session?.user?.email);
    image1Data.append("imageType", "image1");

    let image1Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-image",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: image1Data,
    };

    axios
      .request(image1Config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function image2Request() {
    let image2Data = new FormData();
    image2Data.append("file", image2File);
    image2Data.append("email", session?.user?.email);
    image2Data.append("imageType", "image2");

    let image2Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-image",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: image2Data,
    };

    axios
      .request(image2Config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function image3Request() {
    let image3Data = new FormData();
    image3Data.append("file", image3File);
    image3Data.append("email", session?.user?.email);
    image3Data.append("imageType", "image3");

    let image3Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-image",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: image3Data,
    };

    axios
      .request(image3Config)
      .then((response) => {
        console.log("image3 sented");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ReviewProfile1Request() {
    let ReviewProfile1Data = new FormData();
    ReviewProfile1Data.append("file", review1ProfileFile);
    ReviewProfile1Data.append("email", session?.user?.email);
    ReviewProfile1Data.append("imgprofileType", "imgprofile1");

    let ReviewProfile1Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-profile",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: ReviewProfile1Data,
    };

    axios
      .request(ReviewProfile1Config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ReviewProfile2Request() {
    let ReviewProfile2Data = new FormData();
    ReviewProfile2Data.append("file", review2ProfileFile);
    ReviewProfile2Data.append("email", session?.user?.email);
    ReviewProfile2Data.append("imgprofileType", "imgprofile2");

    let ReviewProfile2Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-profile",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: ReviewProfile2Data,
    };

    axios
      .request(ReviewProfile2Config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
  }

  function ReviewProfile3Request() {
    let ReviewProfile3Data = new FormData();
    ReviewProfile3Data.append("file", review3ProfileFile);
    ReviewProfile3Data.append("email", session?.user?.email);
    ReviewProfile3Data.append("imgprofileType", "imgprofile3");

    let ReviewProfile3Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/clubs/upload-profile",
      headers: {
        "Content-Type": "multipart/form-data",
      },
      data: ReviewProfile3Data,
    };

    axios
      .request(ReviewProfile3Config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(error);
      });
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
        router.push("");
      });
  }

  const memberRef = useRef<any>();
  const igRef = useRef<any>();
  const fbRef = useRef<any>();
  const otherRef = useRef<any>();
  const clubActivityRef = useRef<any>();
  const benefitsRef = useRef<any>();
  const workingsRef = useRef<any>();
  const review1Ref = useRef<any>();
  const review1NameRef = useRef<any>();
  const review1GenRef = useRef<any>();
  const review1ContactRef = useRef<any>();
  const review2Ref = useRef<any>();
  const review2NameRef = useRef<any>();
  const review2GenRef = useRef<any>();
  const review2ContactRef = useRef<any>();
  const review3Ref = useRef<any>();
  const review3NameRef = useRef<any>();
  const review3GenRef = useRef<any>();
  const review3ContactRef = useRef<any>();

  useEffect(() => {
    // User email is available, make the API request
    request();
  }, []);

  function back() {
    router.push("/club");
  }

  function summit() {
    EditRequest();
    logoRequest();
    image1Request();
    image2Request();
    image3Request();
    ReviewProfile1Request();
    ReviewProfile2Request();
    ReviewProfile3Request();
  }

  function turnOnMemberEditMode() {
    setMemberEditMode(true);
    memberRef.current!.focus();
  }

  function turnOnIgEditMode() {
    setIgEditMode(true);
    igRef.current!.focus();
  }

  function turnOnFbEditMode() {
    setFbEditMode(true);
    fbRef.current!.focus();
  }

  function turnOnOtherEditMode() {
    setOtherEditMode(true);
    otherRef.current!.focus();
  }

  function turnOnClubActivityEditMode() {
    setClubActivityEditMode(true);
    clubActivityRef.current!.focus();
  }

  function turnOnBenefitsEditMode() {
    setBenefitsEditMode(true);
    benefitsRef.current!.focus();
  }

  function turnOnWorkingsEditMode() {
    setWorkingsEditMode(true);
    workingsRef.current!.focus();
  }

  function turnOnReview1EditMode() {
    setReview1EditMode(true);
    review1Ref.current!.focus();
  }

  function turnOnReview1NameEditMode() {
    setReview1NameEditMode(true);
    review1NameRef.current!.focus();
  }

  function turnOnReview1GenEditMode() {
    setReview1GenEditMode(true);
    review1GenRef.current!.focus();
  }

  function turnOnReview1ContactEditMode() {
    setReview1ContactEditMode(true);
    review1ContactRef.current!.focus();
  }

  function turnOnReview2EditMode() {
    setReview2EditMode(true);
    review2Ref.current!.focus();
  }

  function turnOnReview2NameEditMode() {
    setReview2NameEditMode(true);
    review2NameRef.current!.focus();
  }

  function turnOnReview2GenEditMode() {
    setReview2GenEditMode(true);
    review2GenRef.current!.focus();
  }

  function turnOnReview2ContactEditMode() {
    setReview2ContactEditMode(true);
    review2ContactRef.current!.focus();
  }

  function turnOnReview3EditMode() {
    setReview3EditMode(true);
    review3Ref.current!.focus();
  }

  function turnOnReview3NameEditMode() {
    setReview3NameEditMode(true);
    review3NameRef.current!.focus();
  }

  function turnOnReview3GenEditMode() {
    setReview3GenEditMode(true);
    review3GenRef.current!.focus();
  }

  function turnOnReview3ContactEditMode() {
    setReview3ContactEditMode(true);
    review3ContactRef.current!.focus();
  }

  function handleReview2Delete() {
    setReview2On(false);
    setReview2("");
    setReview2Name("");
    setReview2Gen("");
    setReview2Contact("");
    setReview2Profile("");
    setReview2ProfileFile("");
  }

  function handleReview3Delete() {
    setReview3On(false);
    setReview3("");
    setReview3Name("");
    setReview3Gen("");
    setReview3Contact("");
    setReview3Profile("");
    setReview3ProfileFile("");
  }

  function handleMemberChange(event: any) {
    setMember(event.target.value);
  }

  function handleIgChange(event: any) {
    setIg(event.target.value);
  }

  function handleFbChange(event: any) {
    setFb(event.target.value);
  }
  function handleClubActivityChange(event: any) {
    setClubActivity(event.target.value);
  }

  function handleBenefitsChange(event: any) {
    setBenefits(event.target.value);
  }

  function handleWorkingsChange(event: any) {
    setWorkings(event.target.value);
  }

  function handleReview1Change(event: any) {
    setReview1(event.target.value);
  }

  function handleReview1NameChange(event: any) {
    setReview1Name(event.target.value);
  }

  function handleReview1GenChange(event: any) {
    setReview1Gen(event.target.value);
  }

  function handleReview1ContactChange(event: any) {
    setReview1Contact(event.target.value);
  }

  function handleReview2Change(event: any) {
    setReview2(event.target.value);
  }

  function handleReview2NameChange(event: any) {
    setReview2Name(event.target.value);
  }

  function handleReview2GenChange(event: any) {
    setReview2Gen(event.target.value);
  }

  function handleReview2ContactChange(event: any) {
    setReview2Contact(event.target.value);
  }

  function handleReview3Change(event: any) {
    setReview3(event.target.value);
  }

  function handleReview3NameChange(event: any) {
    setReview3Name(event.target.value);
  }

  function handleReview3GenChange(event: any) {
    setReview3Gen(event.target.value);
  }

  function handleReview3ContactChange(event: any) {
    setReview3Contact(event.target.value);
  }

  function handleOtherChange(event: any) {
    setOther(event.target.value);
  }

  function handleLogoChange(event: any) {
    console.log(event.target.files);
    setLogoFile(event.target.files[0]);
    setLogo(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
  }

  function handleImage1Change(event: any) {
    console.log(event.target.files);
    setImage1File(event.target.files[0]);
    setImage1(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
  }

  function handleImage2Change(event: any) {
    console.log(event.target.files);
    setImage2File(event.target.files[0]);
    setImage2(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
  }

  function handleImage3Change(event: any) {
    console.log(event.target.files);
    setImage3File(event.target.files[0]);
    setImage3(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview1ProfileChange(event: any) {
    console.log(event.target.files);
    setReview1ProfileFile(event.target.files[0]);
    setReview1Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview2ProfileChange(event: any) {
    console.log(event.target.files);
    setReview2ProfileFile(event.target.files[0]);
    setReview2Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview3ProfileChange(event: any) {
    console.log(event.target.files);
    setReview3ProfileFile(event.target.files[0]);
    setReview3Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  return (
    <>
      <div className=" bg-[#5A2561] h-[4600px] w-full ">
        <div className="hidden lg:block  lg:w-screen lg:-z-10">
          <ClubBg />
        </div>
        <div className=" block w-screen lg:hidden -z-10">
          <ClubBgM />
        </div>
        <div className=" flex justify-center z-0">
        <div className=" absolute left-1/2  md:top-[400px] sm:top-[400px] -translate-x-1/2 md:w-2/3 sm:w-full ">
            <div className=" w-full justify-center flex">
              <button
                onClick={back}
                className="md:px-12 py-2 flex gap-2 align-middle   text-[#55247B] font-Thai "
              >
                <BackArrow />
                <span className=" ml-3 text-2xl align-middle">ย้อนกลับ</span>
              </button>
            </div>
            <div className="w-full justify-center flex">
              <button
                onClick={summit}
                className="px-12 py-2 flex gap-2 align-middle bg-gradient-to-r rounded-full from-[#D62C9F] to-[#7533A8]  text-white font-Thai "
              >
                <span className=" text-2xl align-middle">ส่งแก้ไข</span>
              </button>
            </div>
        </div>

          <div
            className={editSuccess ? " fixed z-50 right-4 bottom-4" : "hidden"}
          >
            <Alert severity="success">
              <AlertTitle>Success</AlertTitle>
              ระบบได้บันทึกข้อมูลของท่านแล้ว
            </Alert>
          </div>
          <div className={editFail ? " fixed z-50 right-4 bottom-4" : "hidden"}>
            <Alert severity="error">
              <AlertTitle>error</AlertTitle>
              โปรดตรวจสอบข้อมูลแล้วลองอีกครั้ง
            </Alert>
          </div>
          <div className=" absolute mt-32 top-96 flex justify-center">
            <p className="  p-6   font-extrabold text-transparent md:text-5xl sm:text-4xl bg-clip-text break-words w-[80vw] bg-gradient-to-b from-[#81109D] to-[#D738A4] py-5 font-Thai text-center mx-10 z-10">
              {" "}
              ชมรม{clubs}
            </p>

            <div className=" flex text-white md:w-[500px] sm:w-[350px] sm:-ml-2 md:ml-2 left-1/2 absolute -translate-x-1/2  font-Thai mt-[150px] justify-between ">
              <div className=" align-middle flex lg:ml-[20px] lg:mr-[40px] md:ml-[40px] md:mr-[20px] sm:ml-[20px] sm:mr-[10px]">
                <svg
                  className=" w-[150px] "
                  viewBox="0 0 100 100"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect width="100" height="100" rx="23" fill="#D9D9D9" />
                </svg>
              </div>
              <div className=" absolute w-[150px] h-[150px] mt-[8px] lg:ml-[20px] lg:mr-[40px] md:ml-[40px] md:mr-[20px] sm:ml-[20px] sm:mr-[10px] z-20  ">
                <label
                  id="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full border-2rounded-[30px] cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,jpeg"
                    onChange={handleLogoChange}
                  />
                </label>
              </div>
              <img
                className="absolute top-0  z-10 lg:ml-[20px] lg:mr-[40px] md:ml-[40px] md:mr-[20px] sm:ml-[20px] sm:mr-[10px] object-cover sm:w-[150px] sm:h-[150px] md:rounded-3xl sm:rounded-2xl "
                src={logo}
              />
              <div className="  my-1 align-middle flex ">
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
              <div className=" mt-1 max-md:ml-3 ">
                <p className=" flex text-[#8133A7] text-xl font-Thai  ">
                  {" "}
                  สมาชิก:
                  <input
                    className=" h-7 w-[80px] text-xl bg-transparent font-Thai"
                    type="text"
                    ref={memberRef}
                    value={member}
                    readOnly={!memberEditMode}
                    onClick={turnOnMemberEditMode}
                    defaultValue=""
                    onBlur={() => setMemberEditMode(false)}
                    onChange={handleMemberChange}
                  ></input>
                  <button onClick={turnOnMemberEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <p className=" flex text-[#8133A7] text-xl font-Thai ">
                  {" "}
                  IG:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] text-xl bg-transparent font-Thai"
                    type="text"
                    ref={igRef}
                    value={ig}
                    readOnly={!igEditMode}
                    onClick={turnOnIgEditMode}
                    defaultValue=""
                    onBlur={() => setIgEditMode(false)}
                    onChange={handleIgChange}
                  ></input>
                  <button onClick={turnOnIgEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <p className=" flex text-[#8133A7] text-xl font-Thai ">
                  {" "}
                  FB:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] bg-transparent font-Thai"
                    type="text"
                    ref={fbRef}
                    value={fb}
                    readOnly={!fbEditMode}
                    onClick={turnOnFbEditMode}
                    defaultValue=""
                    onBlur={() => setIgEditMode(false)}
                    onChange={handleFbChange}
                  ></input>
                  <button onClick={turnOnFbEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <p className=" flex text-[#8133A7] w-[40px] text-xl font-Thai ">
                  {" "}
                  อื่นๆ:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] bg-transparent font-Thai"
                    type="text"
                    ref={otherRef}
                    value={other}
                    readOnly={!otherEditMode}
                    onClick={turnOnOtherEditMode}
                    defaultValue=""
                    onBlur={() => setIgEditMode(false)}
                    onChange={handleOtherChange}
                  ></input>
                  <button onClick={turnOnOtherEditMode}>
                    <PencilIcon />
                  </button>
                </p>
              </div>
            </div>
          </div>
          <div className=" absolute top-96 mt-[420px] justify-center flex md:ml-[30px]  md:w-[600px] sm:w-[400px]  text-white font-Thai ">
            <ClubWidget />
          </div>
          {
            // first section
          }
          <div className=" absolute top-0 left-0 w-full ">
            <p className=" absolute top-96 lg:ml-[250px] lg:mt-[600px] hidden lg:flex w-60 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-left text-6xl ">
              ชมรมนี้
            </p>
            <p className=" absolute top-96 lg:ml-[250px] lg:mt-[660px] hidden lg:flex  w-60 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-left text-4xl ">
              ทำอะไร
            </p>
            <p className=" absolute top-96 md:mt-[550px] sm:mt-[550px] leading-loose md:pr-[550px] w-full font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-center  text-3xl  lg:hidden ">
            ชมรมนี้ทำอะไร
          </p>
          </div>
          <svg
            className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px] sm:mt-[630px] flex lg:w-[509px] lg:h-[309px] md:w-[772px] md:h-[468px] sm:h-[220px] "
            viewBox="0 0 509 307"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="509" height="307" rx="23" fill="#D9D9D9" />
          </svg>
          <div className=" absolute top-96 lg:mt-[600px] md:mt-[630px] sm:mt-[630px] lg:ml-[260px] z-20 flex items-center justify-center lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] ">
            <label
              id="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full border-2rounded-[30px] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                <svg
                  className="w-8 h-8 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept=".png,.jpg,jpeg"
                onChange={handleImage1Change}
              />
            </label>
          </div>
          <p className=" absolute top-96 lg:ml-[270px] lg:mt-[910px] md:mt-[1100px] sm:mt-[860px] z-50 md:ml-0 flex  text-[#7533A8]  font-Thai text-lg opacity-75 ">
            ภาพบรรยากาศในชมรม
          </p>
          <img
            className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px] sm:mt-[630px] z-10  flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl "
            src={image1}
          />
          <div className=" lg:flex absolute top-96 mr-[680px] mt-[730px] hidden  ">
            <ClubStar />
          </div>
        </div>
        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[920px] mt-[1150px] flex justify-center">
          {
            // seccond section
          }
          <svg
            className="absolute top-96 ml-0 lg:mr-[280px] lg:mt-[0px] md:mt-[70px] sm:mt-[100px] flex lg:w-[509px]   lg:h-[309px] md:w-[772px] md:h-[468px] sm:h-[220px] "
            viewBox="0 0 509 307"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="509" height="307" rx="23" fill="#D9D9D9" />
          </svg>
          <p className=" absolute top-96 lg:mr-[270px] lg:mt-[310px] md:mt-[540px] sm:mt-[330px] md:ml-0 flex  text-[#7533A8] font-Thai text-lg opacity-75 ">
            ภาพบรรยากาศในชมรม
          </p>
          <p className=" absolute top-96 lg:ml-[600px] lg:mt-[0px] hidden lg:flex px-6 w-60 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#D738A4] to-[#FFDD77] leading-[4.5rem] font-Thai text-6xl ">
            ประโยชน์ที่ได้รับ
          </p>
          <p className=" absolute top-96 lg:ml-[620px] lg:mt-[130px] hidden lg:flex px-14 w-76 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-3xl ">
            จากการเข้าชมรม
          </p>
          <p className=" absolute top-96 md:mt-[0px] sm:mt-[20px] leading-loose md:mr-[350px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai  md:text-3xl  sm:text-2xl lg:hidden ">
            ประโยชน์ที่ได้รับจากการเข้าชมรม
          </p>
          <img
            className="absolute top-96 ml-0 lg:mr-[280px] lg:mt-[0px] md:mt-[70px] sm:mt-[100px] flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl  "
            src={image2}
          />
          <div className=" absolute top-0 lg:mt-[385px]  lg:mr-[300px] md:mt-[450px] sm:mt-[485px] z-20 flex items-center justify-center lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] ">
            <label
              id="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-[30px] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6 ">
                <svg
                  className="w-8 h-8  text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept=".png,.jpg,jpeg"
                onChange={handleImage2Change}
              />
            </label>
          </div>
          <div className=" lg:flex absolute top-96 ml-[675px] mt-[200px] hidden  ">
            <ClubStar />
          </div>
          {
            // Third section
          }

          <svg
            className="absolute top-96 ml-0 lg:ml-[280px] lg:mt-[750px] md:mt-[1070px] sm:mt-[1100px] flex lg:w-[509px] lg:h-[309px] md:w-[772px] md:h-[468px] sm:h-[220px] "
            viewBox="0 0 509 307"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="509" height="307" rx="23" fill="#D9D9D9" />
          </svg>
          <p className=" absolute top-96 lg:ml-[270px] lg:mt-[1060px] md:mt-[1540px] sm:mt-[1330px] md:ml-0 flex  text-[#7533A8] font-Thai text-lg opacity-75 ">
            ภาพบรรยากาศในชมรม
          </p>
          <p className=" absolute top-96 lg:mr-[550px] lg:mt-[750px] hidden lg:flex px-6 w-72 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#D738A4] to-[#FFDD77] leading-[4.5rem] font-Thai text-7xl ">
            ผลงาน
          </p>
          <p className=" absolute top-96 lg:mr-[650px] lg:mt-[820px] hidden lg:flex px-14 w-60 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-3xl ">
            ของชมรม
          </p>
          <p className=" absolute top-96 md:mt-[1010px] sm:mt-[1000px] leading-loose md:mr-[535px] sm:mr-[0px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai  text-3xl  lg:hidden ">
            ผลงานของชมรม
          </p>
          <img
            className="absolute top-96 ml-0 lg:ml-[280px] lg:mt-[750px] md:mt-[1070px] sm:mt-[1100px]  flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl "
            src={image3}
          />
          <div className=" absolute top-0 lg:mt-[1135px] lg:ml-[275px] md:mt-[1450px] sm:mt-[1485px] z-20 flex items-center justify-center lg:w-[509px] lg:h-[307px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px]">
            <label
              id="dropzone-file"
              className="flex flex-col items-center justify-center w-full h-full rounded-[30px] cursor-pointer"
            >
              <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                <svg
                  className="w-8 h-8 text-gray-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 16"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                  />
                </svg>
              </div>
              <input
                id="dropzone-file"
                type="file"
                className="hidden"
                accept=".png,.jpg,jpeg"
                onChange={handleImage3Change}
              />
            </label>
          </div>
          <div className=" lg:flex absolute top-96 mr-[665px] mt-[880px] hidden  ">
            <ClubStar />
          </div>

          <div className=" absolute top-96 lg:mt-[1400px] md:mt-[2000px] sm:mt-[2000px] px-2 py-5 flex gap-2 lg:w-1/2 w-full  text-white font-Thai ">
            <ReviewWidget />
          </div>
          <div className=" absolute top-96 lg:mt-[1510px] md:mt-[2110px] sm:mt-[2110px] sm:w-[470px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai ">
            <ReviewCard />
          </div>

          <div
            className={
              review2On
                ? "absolute top-96 lg:mt-[1910px] md:mt-[2500px] sm:mt-[2410px] sm:w-[470px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai "
                : " hidden "
            }
          >
            <ReviewCardR />
          </div>

          <div
            className={
              review3On
                ? "  absolute top-96 lg:mt-[2310px] md:mt-[2900px] sm:mt-[2710px] sm:w-[470px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai "
                : "hidden"
            }
          >
            <ReviewCard3 />
          </div>
        </div>

        {
          //text area------------------------------------------------------------------------------------------------------------
        }

        <div className=" absolute top-96 inset-0 m-auto   lg:mt-[970px] md:mt-[1200px] sm:mt-[900px] flex justify-center">
          <textarea
            className=" text-[#582A88]  text-lg break-words border-2 font-Thai h-60 md:ml-16 sm:ml-10 md:w-[750px]  sm:w-[600px] md:h-72 sm:h-[500px] bg-transparent align-top resize-none "
            ref={clubActivityRef}
            value={clubsactivity}
            readOnly={!clubActivityEditMode}
            onClick={turnOnClubActivityEditMode}
            defaultValue=""
            onBlur={() => setClubActivityEditMode(false)}
            onChange={handleClubActivityChange}
          ></textarea>
          <button className="md:ml-10  " onClick={turnOnClubActivityEditMode}>
            <PencilIcon />
          </button>
        </div>

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[1710px] md:mt-[2200px] sm:mt-[1900px] flex justify-center">
          <textarea
            className=" text-[#582A88] text-lg break-words border-2 font-Thai h-60 md:ml-16 sm:ml-10 md:w-[750px] sm:w-[600px] md:h-72 sm:h-[500px] bg-transparent align-top resize-none"
            ref={benefitsRef}
            value={benefits}
            readOnly={!benefitsEditMode}
            onClick={turnOnBenefitsEditMode}
            defaultValue=""
            onBlur={() => setBenefitsEditMode(false)}
            onChange={handleBenefitsChange}
          ></textarea>
          <button className="md:ml-10" onClick={turnOnBenefitsEditMode}>
            <PencilIcon />
          </button>
        </div>

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2430px] md:mt-[3200px] sm:mt-[2900px] flex justify-center">
          <textarea
            className=" text-[#582A88] text-lg break-words border-2 font-Thai h-60 md:ml-16 sm:ml-10 md:w-[750px] sm:w-[600px] md:h-72 sm:h-[500px] bg-transparent align-top resize-none"
            ref={workingsRef}
            value={workings}
            readOnly={!workingsEditMode}
            onClick={turnOnWorkingsEditMode}
            defaultValue=""
            onBlur={() => setWorkingsEditMode(false)}
            onChange={handleWorkingsChange}
          ></textarea>
          <button className="md:ml-10" onClick={turnOnWorkingsEditMode}>
            <PencilIcon />
          </button>
        </div>

        {
          //review 1----------------------------------------------------------------------------------------------------------------------------------
        }
        <div>
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2895px] md:mt-[3730px] sm:mt-[3790px] flex justify-center">
            <textarea
              className=" text-white  text-md break-words font-Thai  md:w-[480px] md:ml-[300px] md:h-[266px] sm:w-[250px] sm:ml-[170px] sm:h-[120px] bg-transparent align-top resize-none"
              ref={review1Ref}
              value={review1}
              readOnly={!review1EditMode}
              onClick={turnOnReview1EditMode}
              defaultValue=""
              onBlur={() => setReview1EditMode(false)}
              onChange={handleReview1Change}
            ></textarea>
            <button
              className="md:ml-10 sm:ml-5"
              onClick={turnOnReview1EditMode}
            >
              <PencilIcon />
            </button>
            
          </div>

          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2900px] md:mt-[3730px] sm:mt-[3790px] md:mr-[485px] sm:mr-[160px]  flex justify-center">
            <div className=" block w-[200px] ">
              <svg
                className="block md:w-[153px] w-[60px]"
                viewBox="0 0 153 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9" />
              </svg>
              <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px] ">
                <label
                  id="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-[30px] cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6  ">
                    <svg
                      className="w-8 h-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,jpeg"
                    onChange={handleReview1ProfileChange}
                  />
                </label>
              </div>
              <img
                className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                src={review1Profile}
              />
              <div className=" block md:mt-1 -mt-1">
                <input
                  className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai"
                  type="text"
                  ref={review1NameRef}
                  value={review1Name}
                  readOnly={!review1NameEditMode}
                  placeholder="ชื่อ"
                  onClick={turnOnReview1NameEditMode}
                  onBlur={() => setReview1NameEditMode(false)}
                  onChange={handleReview1NameChange}
                ></input>
                <button onClick={turnOnReview1NameEditMode}>
                  <PencilIcon />
                </button>

                <p className=" block text-[#291A54] md:text-xl md:mt-0 sm:-mt-3 sm:text-sm text-base  font-Thai ">
                  {" "}
                  เตรียมอุดม
                  <input
                    className=" sm:h-4 md:h-6 ml-1  md:w-[50px] sm:w-[30px] text-[#291A54] bg-transparent font-Thai "
                    type="text"
                    maxLength={2}
                    ref={review1GenRef}
                    value={review1Gen}
                    readOnly={!review1GenEditMode}
                    onClick={turnOnReview1GenEditMode}
                    onBlur={() => setReview1GenEditMode(false)}
                    onChange={handleReview1GenChange}
                  ></input>
                  <button onClick={turnOnReview1GenEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <div className=" flex">
                  <input
                    className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai"
                    type="text"
                    ref={review1ContactRef}
                    value={review1Contact}
                    readOnly={!review1ContactEditMode}
                    onClick={turnOnReview1ContactEditMode}
                    placeholder="ช่องทางการติดต่อ"
                    onBlur={() => setReview1ContactEditMode(false)}
                    onChange={handleReview1ContactChange}
                  ></input>

                  <button onClick={turnOnReview1ContactEditMode}>
                    <PencilIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className=" justify-center flex">
            <button
              className={
                review2On
                  ? "hidden"
                  : " absolute top-0 md:mt-[3600px] sm:mt-[4400px] text-3xl bg-gradient-to-r from-[#7533A8] to-[#D738A4] w-[200px] h-[50px] rounded-[200px] text-white "
              }
              onClick={() => setReview2On(true)}
            >
              {" "}
              + เพิ่มรีวิว
            </button>
          </div>
        </div>
        {
          //review 2----------------------------------------------------------------------------------------------------------
        }
        <div className={review2On ? "flex" : "hidden"}>
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3295px] lg:mr-0 md:mt-[4115px] sm:mt-[4090px] md:mr-[270px] flex justify-center">
            <button
              className=" md:mr-10 sm:mr-5"
              onClick={turnOnReview2EditMode}
            >
              <PencilIcon />
            </button>
            <textarea
              className=" text-white text-md break-words font-Thai   md:w-[480px] md:mr-[300px] md:h-[266px] sm:w-[250px] sm:mr-[170px] sm:h-[120px] bg-transparent align-top resize-none"
              ref={review2Ref}
              value={review2}
              readOnly={!review2EditMode}
              onClick={turnOnReview2EditMode}
              defaultValue=""
              onBlur={() => setReview2EditMode(false)}
              onChange={handleReview2Change}
            ></textarea>
          </div>

          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3300px] md:mt-[4120px] sm:mt-[4090px] md:ml-[550px] sm:ml-[230px] flex justify-center">
            <div className=" block  ">
              <div className=" flex justify-end">
              <svg
                className="block md:w-[153px] w-[60px] md:ml-0 sm:ml-[20px]"
                viewBox="0 0 153 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9" />
              </svg>
              <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px] md:ml-0 sm:ml-[20px] ">
                <label
                  id="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-[30px] cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6  z-20  w-full h-full ">
                    <svg
                      className="w-8 h-8"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,jpeg"
                    onChange={handleReview2ProfileChange}
                  />
                </label>
                <img
                  className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px] md:rounded-3xl sm:rounded-xl "
                  src={review2Profile}
                />
              </div>
              </div>
              <div className=" block md:mt-1 -mt-1">
                <button onClick={turnOnReview2NameEditMode}>
                  <PencilIcon />
                </button>
                <input
                  className=" text-white md:text-2xl sm:text-md md:ml-0 sm:ml-[10px] sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai text-end"
                  type="text"
                  ref={review2NameRef}
                  value={review2Name}
                  readOnly={!review2NameEditMode}
                  placeholder="ชื่อ"
                  onClick={turnOnReview2NameEditMode}
                  onBlur={() => setReview2NameEditMode(false)}
                  onChange={handleReview2NameChange}
                ></input>
                
                <div className=" flex ml-3">
                  <button onClick={turnOnReview2GenEditMode}>
                    <PencilIcon />
                  </button>
                <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  md:mr-0  font-Thai text-end ">
                  {" "}
                  เตรียมอุดม
                  <input
                    className=" sm:h-4 md:h-6 ml-1  md:w-[35px] sm:w-[19px] text-[#291A54] bg-transparent font-Thai text-end"
                    type="text"
                    maxLength={2}
                    ref={review2GenRef}
                    value={review2Gen}
                    readOnly={!review2GenEditMode}
                    onClick={turnOnReview2GenEditMode}
                    onBlur={() => setReview2GenEditMode(false)}
                    onChange={handleReview2GenChange}
                  ></input>
                  
                </p>
                </div>
                <div className=" flex">
                  <button onClick={turnOnReview2ContactEditMode}>
                    <PencilIcon />
                  </button>
                  <input
                    className=" sm:h-4 md:h-6 md:w-[148px] items-center  w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai text-end"
                    type="text"
                    ref={review2ContactRef}
                    value={review2Contact}
                    readOnly={!review2ContactEditMode}
                    onClick={turnOnReview2ContactEditMode}
                    placeholder="ช่องทางการติดต่อ"
                    onBlur={() => setReview2ContactEditMode(false)}
                    onChange={handleReview2ContactChange}
                  ></input>
                  
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={review2On ? " justify-center flex" : "hidden"}>
          <button
            className={
              review3On
                ? "hidden"
                : " absolute top-0 md:mt-[4000px] sm:mt-[4650px] w-[65px] h-[65px]"
            }
            onClick={handleReview2Delete}
          >
            <DeleteIcon />
          </button>
        </div>
        <div className={review2On ? " justify-center flex" : "hidden"}>
          <button
            className={
              review3On
                ? "hidden"
                : " absolute top-0 md:mt-[4100px] sm:mt-[4750px] text-3xl bg-gradient-to-r from-[#7533A8] to-[#D738A4] w-[200px] h-[50px] rounded-[200px] text-white "
            }
            onClick={() => setReview3On(true)}
          >
            {" "}
            + เพิ่มรีวิว
          </button>
        </div>
        {
          //review 3---------------------------------------------------------------------------------------------------------------------
        }
        <div className={review3On ? "flex" : " hidden"}>
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3695px] md:mt-[4520px] sm:mt-[4390px] flex justify-center">
            <textarea
              className=" text-white text-md break-words font-Thai md:w-[480px] md:ml-[300px] sm:w-[250px] sm:ml-[170px] sm:h-[120px] md:h-[266px] bg-transparent align-top resize-none"
              ref={review3Ref}
              value={review3}
              readOnly={!review3EditMode}
              onClick={turnOnReview3EditMode}
              defaultValue=""
              onBlur={() => setReview3EditMode(false)}
              onChange={handleReview3Change}
            ></textarea>
            <button
              className="md:ml-10 sm:ml-5"
              onClick={turnOnReview3EditMode}
            >
              <PencilIcon />
            </button>
          </div>
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3700px] md:mt-[4520px] sm:mt-[4390px] md:mr-[485px] sm:mr-[160px] flex justify-center">
            <div className=" block w-[200px]">
              <svg
                className="block md:w-[153px] w-[60px]"
                viewBox="0 0 153 153"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9" />
              </svg>
              <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px] ">
                <label
                  id="dropzone-file"
                  className="flex flex-col items-center justify-center w-full h-full rounded-[30px] cursor-pointer"
                >
                  <div className="flex flex-col items-center justify-center pt-5 pb-6   ">
                    <svg
                      className="w-8 h-8 text-gray-500"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 20 16"
                    >
                      <path
                        stroke="currentColor"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                      />
                    </svg>
                  </div>
                  <input
                    id="dropzone-file"
                    type="file"
                    className="hidden"
                    accept=".png,.jpg,jpeg"
                    onChange={handleReview3ProfileChange}
                  />
                </label>
              </div>
              <img
                className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[60px] sm:w-[60px]  rounded-3xl sm:rounded-xl "
                src={review3Profile}
              />
              <div className=" block md:mt-1 -mt-1">
                <input
                  className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai"
                  type="text"
                  ref={review3NameRef}
                  value={review3Name}
                  readOnly={!review3NameEditMode}
                  placeholder="ชื่อ"
                  onClick={turnOnReview3NameEditMode}
                  onBlur={() => setReview3NameEditMode(false)}
                  onChange={handleReview3NameChange}
                ></input>
                <button onClick={turnOnReview3NameEditMode}>
                  <PencilIcon />
                </button>

                <p className=" block text-[#291A54] md:text-xl md:mt-0 sm:-mt-3 sm:text-sm text-base  font-Thai ">
                  {" "}
                  เตรียมอุดม
                  <input
                    className=" sm:h-4 md:h-6 ml-1  md:w-[50px] sm:w-[30px] text-[#291A54] bg-transparent font-Thai"
                    type="text"
                    maxLength={2}
                    ref={review3GenRef}
                    value={review3Gen}
                    readOnly={!review3GenEditMode}
                    onClick={turnOnReview3GenEditMode}
                    onBlur={() => setReview3GenEditMode(false)}
                    onChange={handleReview3GenChange}
                  ></input>
                  <button onClick={turnOnReview3GenEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <div className=" flex">
                  <input
                    className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai"
                    type="text"
                    ref={review3ContactRef}
                    value={review3Contact}
                    readOnly={!review3ContactEditMode}
                    onClick={turnOnReview3ContactEditMode}
                    placeholder="ช่องทางการติดต่อ"
                    onBlur={() => setReview3ContactEditMode(false)}
                    onChange={handleReview3ContactChange}
                  ></input>
                  <button onClick={turnOnReview3ContactEditMode}>
                    <PencilIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" justify-center flex">
          <button
            className={
              review3On
                ? "absolute top-0 md:mt-[4400px] sm:mt-[5000px] w-[65px] h-[65px]"
                : "hidden "
            }
            onClick={handleReview3Delete}
          >
            <DeleteIcon />
          </button>
        </div>
      </div>
    </>
  );
}
