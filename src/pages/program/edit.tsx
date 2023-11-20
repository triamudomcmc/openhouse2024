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
import ClubBottom from "@/vectors/club/clubBottom";
import ClubPageLight from "@/vectors/club/clubPageLight";
import ClubCrystal from "@/vectors/club/clubCrystal";
import ClubLamp from "@/vectors/club/clubLamp";
import ClubFlower from "@/vectors/club/clubFlower";
import ClubCrystal2 from "@/vectors/club/clubCrystal2";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReviewCardLine from "@/vectors/club/reviewCardLine";
import ReviewCardLineR from "@/vectors/club/reviewCardLineR";

export default function ProgramEdit() {
  const [program, setProgram] = useState("");
  const [member, setMember] = useState("");
  const [ig, setIg] = useState("");
  const [fb, setFb] = useState("");
  const [other, setOther] = useState("");
  const [admission, setAdmission] = useState("");
  const [subjects, setSubjects] = useState("");
  const [interests, setInterests] = useState("");
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
  const [admissionEditMode, setAdmissionEditMode] = useState(false);
  const [subjectsEditMode, setSubjectsEditMode] = useState(false);
  const [interestsEditMode, setInterestsEditMode] = useState(false);
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

  const { data: session,status } = useSession({
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
    admission: admission,
    subjects: subjects,
    interests: interests,
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
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let configEdit = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/lessons/edit",
    headers: {
      "Content-Type": "application/json",
    },
    data: dataEdit,
  };

  async function EditRequest() {
    try {
      const response = await axios.request(configEdit);
      console.log(JSON.stringify(response.data));
      toast.success(<><p>success</p><p>ระบบได้บันทึกข้อมูลของท่านแล้ว</p></>, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme : "colored"
      });
    } catch (error) {
      console.log(error);
      toast.error(<><p>ERORR!!</p><p>โปรดตรวจสอบข้อมูลและบัญชีให้ถูกต้อง</p></>, {
        position: toast.POSITION.BOTTOM_RIGHT,
        theme : "colored",

      });
    }
  }

  function image1Request() {
    let image1Data = new FormData();
    image1Data.append("file", image1File);
    image1Data.append("email", session?.user?.email);
    image1Data.append("imageType", "image1");
    image1Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let image1Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-image",
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
    image2Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let image2Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-image",
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
    image3Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let image3Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-image",
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
    ReviewProfile1Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let ReviewProfile1Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-profile",
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
    ReviewProfile2Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let ReviewProfile2Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-profile",
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
    ReviewProfile3Data.append("environmentKeys", process.env.ENVIRONMENT_KEY);

    let ReviewProfile3Config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://openhouse2024-backend.vercel.app/api/lessons/upload-profile",
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
    environmentKey: process.env.ENVIRONMENT_KEY,
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
        setProgram(response.data.info.name);
        setMember(response.data.info.members);
        setIg(response.data.info.ig);
        setFb(response.data.info.facebook);
        setOther(response.data.info.others);
        setAdmission(response.data.info.admission);
        setSubjects(response.data.info.subjects);
        setInterests(response.data.info.interests);
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
      });
  }

  const memberRef = useRef<any>();
  const igRef = useRef<any>();
  const fbRef = useRef<any>();
  const otherRef = useRef<any>();
  const admissionRef = useRef<any>();
  const subjectsRef = useRef<any>();
  const interestsRef = useRef<any>();
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
  }, [status]);

  function back() {
    router.push("/program");
  }

  function summit() {
    EditRequest();
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

  function turnOnAdmissionEditMode() {
    setAdmissionEditMode(true);
    admissionRef.current!.focus();
  }

  function turnOnSubjectsEditMode() {
    setSubjectsEditMode(true);
    subjectsRef.current!.focus();
  }

  function turnOnInterestsEditMode() {
    setInterestsEditMode(true);
    interestsRef.current!.focus();
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
  function handleAdmissionChange(event: any) {
    setAdmission(event.target.value);
  }

  function handleSubjectsChange(event: any) {
    setSubjects(event.target.value);
  }

  function handleInterestsChange(event: any) {
    setInterests(event.target.value);
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
    <div className="">
      <div className=" relative w-full top-0 left-0 h-full overflow-hidden">
        <div className=" flex justify-center w-full   ">
          <div className=" lg:w-1/2 md:w-2/3 z-30 lg:mt-[15%] md:mt-[20%] sm:mt-[25%] pb-20">
            <div className=" flex justify-evenly items-center">
              <button className=" flex" onClick={back}>
                <BackArrow />
                <span className=" pl-2  text-2xl align-middle m-auto text-[#55247B]">
                  ย้อนกลับ
                </span>
              </button>

              <button
                className=" text-white px-3 py-1 text-xl bg-gradient-to-r from-[#7533A8] to-[#D738A4] rounded-full "
                onClick={summit}
              >
                ส่งการแก้ไข
              </button>
            </div>
            <div className="  w-full  ">
              <p className="  p-6   font-extrabold text-transparent md:text-5xl sm:text-3xl bg-clip-text break-words bg-gradient-to-b from-[#81109D] to-[#D62C9F]  from-40% to-100% py-5 font-Thai text-center z-10">
                {program}
              </p>
            </div>

            <div className=" w-full flex  justify-center gap-2 mt-5 ">
            <div className=" relative z-0 min-w-[200px] flex justify-end">
                <div className=" hidden md:flex">
                  <UserIcon />
                </div>
                <p className=" text-4xl block text-center text-transparent  bg-clip-text bg-gradient-to-b from-[#632790] to-[#D738A4] align-middle">
                  สมาชิก
                  <input
                    className=" block h-10 w-24 align-middle items-center bg-transparent text-center text-3xl"
                    type="text"
                    ref={memberRef}
                    value={member}
                    onClick={turnOnMemberEditMode}
                    defaultValue=""
                    onBlur={() => setMemberEditMode(false)}
                    onChange={handleMemberChange}
                  ></input>
                  <button
                    className=" block align-middle m-auto z-30 "
                    onClick={turnOnMemberEditMode}
                  >
                    <PencilIcon />
                  </button>
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
              <div className="w-[200px]">
                <p className=" flex text-[#8133A7] w-[200px] text-xl font-Thai ">
                  {" "}
                  IG:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] text-xl bg-transparent font-Thai"
                    type="text"
                    ref={igRef}
                    value={ig}
                    onClick={turnOnIgEditMode}
                    defaultValue=""
                    onBlur={() => setIgEditMode(false)}
                    onChange={handleIgChange}
                  ></input>
                  <button onClick={turnOnIgEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <p className=" flex text-[#8133A7] w-[200px] text-xl font-Thai ">
                  {" "}
                  FB:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] bg-transparent font-Thai"
                    type="text"
                    ref={fbRef}
                    value={fb}
                    onClick={turnOnFbEditMode}
                    defaultValue=""
                    onBlur={() => setIgEditMode(false)}
                    onChange={handleFbChange}
                  ></input>
                  <button onClick={turnOnFbEditMode}>
                    <PencilIcon />
                  </button>
                </p>
                <p className=" flex text-[#8133A7] w-[200px] text-xl font-Thai ">
                  {" "}
                  อื่นๆ:
                  <input
                    className=" h-7 w-[154px] sm:w-[100px] bg-transparent font-Thai"
                    type="text"
                    ref={otherRef}
                    value={other}
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

            <div className=" mt-3  ">
              <ClubWidget />
            </div>
            {
              //section1
            }
            <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl py-5 block w-full  lg:hidden ">
                การรับสมัครและการสอบเข้า
              </p>
              <div className=" flex justify-center gap-3">
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-4xl py-5 hidden lg:block ">
                  การรับสมัคร
                  <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-2xl  hidden lg:block ">
                    และการสอบเข้า
                  </p>
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
                <div className=" absolute top-0 w-full h-full">
                  <label
                    id="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full border-2rounded-[30px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6  z-20 w-full h-full ">
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
                  <p className="  text-center text-[#7533A8] ">
                  ภาพบรรยากาศในสายการเรียน
                  </p>
                </div>
                <div className=" absolute w-full top-0">
                  <img
                    className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                    src={image1}
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center mt-10">
                <div className=" w-full  justify-center hidden md:block">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none "
                    ref={admissionRef}
                    value={admission}
                    onClick={turnOnAdmissionEditMode}
                    defaultValue=""
                    onBlur={() => setAdmissionEditMode(false)}
                    onChange={handleAdmissionChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnAdmissionEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none "
                    ref={admissionRef}
                    value={admission}
                    onClick={turnOnAdmissionEditMode}
                    defaultValue=""
                    onBlur={() => setAdmissionEditMode(false)}
                    onChange={handleAdmissionChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnAdmissionEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
              </div>
            {
              //section2
            }
            <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl block w-full py-5  lg:hidden ">
            วิชา/หลักสูตรเพิ่มเติมที่เรียน
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
                <div className=" absolute left-0 top-0 w-full h-full z-20">
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
                      onChange={handleImage2Change}
                    />
                  </label>
                  <p className="  text-center text-[#7533A8] ">
                  ภาพบรรยากาศในสายการเรียน
                  </p>
                </div>
                <div className=" absolute w-full top-0 z-10">
                  <img
                    className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                    src={image2}
                  />
                </div>
              </div>
              <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-5xl py-5 hidden lg:block ">
                  วิชา /
                  <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-3xl  hidden lg:block ">
                    หลักสูตร
                    <br />
                    เพิ่มเติมที่เรียน
                  </p>
                </p>
            </div>
            <div className=" flex justify-center mt-10">
            <div className=" w-full  justify-center hidden md:block">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none "
                    ref={subjectsRef}
                    value={subjects}
                    onClick={turnOnSubjectsEditMode}
                    defaultValue=""
                    onBlur={() => setSubjectsEditMode(false)}
                    onChange={handleSubjectsChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnSubjectsEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none "
                    ref={subjectsRef}
                    value={subjects}
                    onClick={turnOnSubjectsEditMode}
                    defaultValue=""
                    onBlur={() => setSubjectsEditMode(false)}
                    onChange={handleSubjectsChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnSubjectsEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
            </div>
            {
              //section3
            }
            <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-3xl block w-full py-5  lg:hidden ">
            ความน่าสนใจของสายการเรียน
            </p>
            <div className=" flex justify-center gap-3 lg:mt-10">
            <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-4xl py-5 hidden lg:block ">
                  ความน่าสนใจ
                  <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-2xl  hidden lg:block ">
                    ของสายการเรียน
                  </p>
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
                <div className=" absolute top-0 w-full h-full">
                  <label
                    id="dropzone-file"
                    className="flex flex-col items-center justify-center w-full h-full border-2rounded-[30px] cursor-pointer"
                  >
                    <div className="flex flex-col items-center justify-center pt-5 pb-6  z-20 w-full h-full ">
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
                  <p className="  text-center text-[#7533A8] ">
                    ภาพบรรยากาศในสายการเรียน
                  </p>
                </div>
                <div className=" absolute w-full top-0">
                  <img
                    className=" flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl z-10  "
                    src={image3}
                  />
                </div>
              </div>
            </div>
            <div className=" flex justify-center mt-10">
            <div className=" w-full  justify-center hidden md:block">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72  bg-transparent align-top resize-none "
                    ref={interestsRef}
                    value={interests}
                    onClick={turnOnInterestsEditMode}
                    defaultValue=""
                    onBlur={() => setInterestsEditMode(false)}
                    onChange={handleInterestsChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnInterestsEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
                <div className=" w-full  justify-center flex md:hidden">
                  <textarea
                    className=" text-[#582A88]  text-lg break-words border-2 font-Thai  md:w-full sm:w-[300px]   h-72 bg-transparent align-top resize-none "
                    ref={interestsRef}
                    value={interests}
                    onClick={turnOnInterestsEditMode}
                    defaultValue=""
                    onBlur={() => setInterestsEditMode(false)}
                    onChange={handleInterestsChange}
                  ></textarea>
                  <div className=" flex justify-center">
                    <button className="  " onClick={turnOnInterestsEditMode}>
                      <PencilIcon />
                    </button>
                  </div>
                </div>
            </div>

            {
              //review1
            }
            <div>
              <div className=" mt-10">
                <ReviewWidget />
              </div>
              <div className=" md:w-full w-[calc(100dvw)] left-1/2  -translate-x-1/2 relative">
                <ReviewCardLine />
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
                  <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] ">
                    <label
                      id="dropzone-file"
                      className="flex flex-col items-center justify-center w-auto h-auto rounded-[30px] cursor-pointer"
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
                    className="absolute top-0 left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                    src={review1Profile}
                  />
                  <div className=" block md:mt-1 -mt-1 z-50 relative">
                    <input
                      className=" text-[#0F114C] md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai"
                      type="text"
                      ref={review1NameRef}
                      value={review1Name}
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
                <div className=" absolute w-full top-5 h-3/4 right-0 flex justify-end">
                  <textarea
                    className=" text-[#0F114C]  text-md break-words font-Thai mr-10   md:w-3/5  md:h-full  bg-transparent align-top resize-none"
                    ref={review1Ref}
                    value={review1}
                    onClick={turnOnReview1EditMode}
                    defaultValue=""
                    onBlur={() => setReview1EditMode(false)}
                    onChange={handleReview1Change}
                  ></textarea>
                </div>
              </div>
              <div className=" w-full flex justify-center">
                <button
                  className={
                    review2On
                      ? "hidden"
                      : "  mt-10 text-3xl bg-gradient-to-r from-[#7533A8] to-[#D738A4] w-[200px] h-[50px] rounded-[200px] text-white "
                  }
                  onClick={() => setReview2On(true)}
                >
                  {" "}
                  + เพิ่มรีวิว
                </button>
              </div>

              {
                //review2
              }
              <div className={review2On ? " md:w-full w-[calc(100dvw)] left-1/2  -translate-x-1/2 relative mt-10" : "hidden"}>
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
                    <div className=" absolute top-0  z-20 flex items-center justify-center lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] ">
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
                          onChange={handleReview2ProfileChange}
                        />
                      </label>
                    </div>
                    <img
                      className="absolute top-0 right-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                      src={review2Profile}
                    />
                  </div>
                  <div className=" block md:mt-1 -mt-1 relative z-50">
                    <button onClick={turnOnReview2NameEditMode}>
                      <PencilIcon />
                    </button>
                    <input
                      className=" text-[#0F114C] md:text-2xl sm:text-md sm:w-[100px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai text-right"
                      type="text"
                      ref={review2NameRef}
                      value={review2Name}
                      placeholder="ชื่อ"
                      onClick={turnOnReview2NameEditMode}
                      onBlur={() => setReview1NameEditMode(false)}
                      onChange={handleReview2NameChange}
                    ></input>

                    <p className=" block text-[#291A54] md:text-xl md:mt-0 sm:-mt-3 sm:text-sm text-base  font-Thai text-right ">
                      <button onClick={turnOnReview2GenEditMode}>
                        <PencilIcon />
                      </button>{" "}
                      เตรียมอุดม
                      <input
                        className=" sm:h-4 md:h-6 ml-1  md:w-[30px] sm:w-[30px] text-[#291A54] bg-transparent font-Thai text-right "
                        type="text"
                        maxLength={2}
                        ref={review2GenRef}
                        value={review2Gen}
                        onClick={turnOnReview2GenEditMode}
                        onBlur={() => setReview1GenEditMode(false)}
                        onChange={handleReview2GenChange}
                      ></input>
                    </p>
                    <div className=" flex">
                      <button onClick={turnOnReview2ContactEditMode}>
                        <PencilIcon />
                      </button>
                      <input
                        className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai text-right"
                        type="text"
                        ref={review2ContactRef}
                        value={review2Contact}
                        onClick={turnOnReview2ContactEditMode}
                        placeholder="ช่องทางการติดต่อ"
                        onBlur={() => setReview1ContactEditMode(false)}
                        onChange={handleReview2ContactChange}
                      ></input>
                    </div>
                  </div>
                </div>
                <div className=" absolute w-full top-5 h-3/4 left-0 flex justify-start">
                  <textarea
                    className=" text-[#0F114C]  text-md break-words font-Thai ml-10   md:w-3/5  md:h-full  bg-transparent align-top resize-none"
                    ref={review2Ref}
                    value={review2}
                    onClick={turnOnReview2EditMode}
                    defaultValue=""
                    onBlur={() => setReview2EditMode(false)}
                    onChange={handleReview2Change}
                  ></textarea>
                </div>
              </div>
              <div
                className={review2On ? " justify-center flex mt-5" : "hidden"}
              >
                <button
                  className={review3On ? "hidden" : "  w-[65px] h-[65px]"}
                  onClick={handleReview2Delete}
                >
                  <DeleteIcon />
                </button>
              </div>
              <div
                className={review2On ? " justify-center flex mt-5" : "hidden"}
              >
                <button
                  className={
                    review3On
                      ? "hidden"
                      : "  text-3xl bg-gradient-to-r from-[#7533A8] to-[#D738A4] w-[200px] h-[50px] rounded-[200px] text-white "
                  }
                  onClick={() => setReview3On(true)}
                >
                  {" "}
                  + เพิ่มรีวิว
                </button>
              </div>

              {
                //review3
              }
              <div className={review3On ? " md:w-full w-[calc(100dvw)] left-1/2  -translate-x-1/2 relative" : "hidden"}>
                <ReviewCardLine />
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
                  <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] ">
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
                        onChange={handleReview3ProfileChange}
                      />
                    </label>
                  </div>
                  <img
                    className="absolute top-0 left-0 z-10  flex object-cover lg:h-[153px] lg:w-[153px] md:h-[100px] md:w-[100px] sm:h-[60px] sm:w-[60px] rounded-3xl sm:rounded-xl "
                    src={review3Profile}
                  />
                  <div className=" block md:mt-1 -mt-1 z-50 relative">
                    <input
                      className=" text-[#0F114C] md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai"
                      type="text"
                      ref={review3NameRef}
                      value={review3Name}
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
                        className=" sm:h-4 md:h-6 ml-1  md:w-[50px] sm:w-[30px] text-[#291A54] bg-transparent font-Thai "
                        type="text"
                        maxLength={2}
                        ref={review3GenRef}
                        value={review3Gen}
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
                <div className=" absolute w-full top-5 h-3/4 right-0 flex justify-end">
                  <textarea
                    className=" text-[#0F114C]  text-md break-words font-Thai mr-10   md:w-3/5  md:h-full  bg-transparent align-top resize-none"
                    ref={review3Ref}
                    value={review3}
                    onClick={turnOnReview3EditMode}
                    defaultValue=""
                    onBlur={() => setReview3EditMode(false)}
                    onChange={handleReview3Change}
                  ></textarea>
                </div>
              </div>
              <div className=" justify-center flex">
                <button
                  className={review3On ? " mt-5  w-[65px] h-[65px]" : "hidden "}
                  onClick={handleReview3Delete}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
        {
          //every asset start here
        }
      </div>

      <ToastContainer />
    </div>
  );
}
