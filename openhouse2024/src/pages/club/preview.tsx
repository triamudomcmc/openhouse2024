import ClubBg from "@/vectors/bg/club";
import ClubTop from "@/vectors/club/ClubTop";
import BackArrow from "@/vectors/backarrow";
import { useRouter } from 'next/navigation';
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState, useRef } from "react";
import ClubWidget from "@/vectors/club/clubwidget";
import axios from "axios";
import UserIcon from "@/vectors/club/user";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import PencilIcon from "@/vectors/club/pencil";
import ClubBottom from "@/vectors/club/clubBottom";
import TextBox from "@/vectors/club/textbox";
import ClubBgM from "@/vectors/bg/ClubM";
import ClubStar from "@/vectors/club/star";
import ReviewWidget from "@/vectors/club/reviewWidget";
import ReviewCard from "@/vectors/club/reviewCard";
import ReviewCardR from "@/vectors/club/reviewCardR";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import FormData from "form-data";
import Head from "next/head";

export default function ClubPreview() {
  const [clubs, setClubs] = useState('');
  const [clubsE, setClubsE] = useState('');
  const [member, setMember] = useState('');
  const [ig, setIg] = useState('');
  const [fb, setFb] = useState('');
  const [other, setOther] = useState('');
  const [clubsactivity,setClubActivity] = useState('')
  const [benefits,setBenefits] = useState('')
  const [workings,setWorkings] = useState('')
  const [review1,setReview1] = useState('')
  const [review1Name,setReview1Name] = useState('')
  const [review1Gen,setReview1Gen] = useState('')
  const [review1Contact,setReview1Contact] = useState('')
  const [review2,setReview2] = useState('')
  const [review2Name,setReview2Name] = useState('')
  const [review2Gen,setReview2Gen] = useState('')
  const [review2Contact,setReview2Contact] = useState('')
  const [review3,setReview3] = useState('')
  const [review3Name,setReview3Name] = useState('')
  const [review3Gen,setReview3Gen] = useState('')
  const [review3Contact,setReview3Contact] = useState('')
  const [image1, setImage1] = useState('');
  const [image1File, setImage1File] = useState([]);
  const [image2, setImage2] = useState('');
  const [image2File, setImage2File] = useState([]);
  const [image3, setImage3] = useState('');
  const [image3File, setImage3File] = useState([]);
  const [review1Profile, setReview1Profile] = useState('');
  const [review2Profile, setReview2Profile] = useState('');
  const [review3Profile, setReview3Profile] = useState('');  
  const [editSuccess, seteditSuccess] = useState(false);
  
  const router = useRouter();

  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      router.push('/login'); // The user is not authenticated, handle it here.
    },
  });

const data = JSON.stringify({
        "email": session?.user?.email
      });

      const config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://openhouse2024-backend.vercel.app/api/roles/info',
        headers: {
          'Content-Type': 'application/json'
        },
        data: data
      };

      function request(){
      axios.request(config)
      .then((response) =>{
          setClubs(response.data.info.name);
          setMember(response.data.info.members);
          setIg(response.data.info.ig);
          setFb(response.data.info.facebook);
          setOther(response.data.info.others);
          setClubActivity(response.data.info.clubsactivity);
          setBenefits(response.data.info.benefits)
          setWorkings(response.data.info.workings)
          setReview1Name(response.data.info.review_1.name)
          setReview1Gen(response.data.info.review_1.gen)
          setReview1Contact(response.data.info.review_1.contact)
          setReview1(response.data.info.review_1.review)
          setReview2Name(response.data.info.review_2.name)
          setReview2Gen(response.data.info.review_2.gen)
          setReview2Contact(response.data.info.review_2.contact)
          setReview2(response.data.info.review_2.review)
          setReview3Name(response.data.info.review_3.name)
          setReview3Gen(response.data.info.review_3.gen)
          setReview3Contact(response.data.info.review_3.contact)
          setReview3(response.data.info.review_3.review)
          console.log("success");
        }) .catch((error) => {
          console.log(error);
          router.push('/club')
        })}

  useEffect(() => {
      // User email is available, make the API request
      request()
 
  }, []);

  function back() {
    router.push('/club');
  }


  function handleImage1Change(event:any) {
    console.log(event.target.files);
    setImage1File(event.target.files[0]);
    setImage1(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
  }

  function handleImage2Change(event:any) {
    console.log(event.target.files);
    setImage2File(event.target.files[0]);
    setImage2(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.readAsDataURL(file);
  }

  function handleImage3Change(event:any) {
    console.log(event.target.files);
    setImage3File(event.target.files[0]);
    setImage3(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview1ProfileChange(event:any) {
    console.log(event.target.files);
    setReview1Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview2ProfileChange(event:any) {
    console.log(event.target.files);
    setReview2Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  function handleReview3ProfileChange(event:any) {
    console.log(event.target.files);
    setReview3Profile(URL.createObjectURL(event.target.files[0]));
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsDataURL(file);
  }

  


    return(
      <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
        <div className=" bg-[#5A2561] h-[4600px] w-full ">
        <div className="hidden lg:block  lg:w-screen lg:-z-10">
            <ClubBg />
        </div>
        <div className=" block w-screen lg:hidden -z-10">
            <ClubBgM />
        </div>
        <div className=" flex justify-center z-0">
            <div className=" w-1/2 absolute top-96">
            <button onClick={back} 
                className="px-12 py-2 flex gap-2 align-middle   text-[#55247B] font-Thai ">
            <BackArrow />
            <span className=" ml-3 text-2xl align-middle">ย้อนกลับ</span>
            </button>
            
            
            </div>


    
            <div className=" absolute mt-32 top-96 flex justify-center">
            <p className="  p-6   font-extrabold text-transparent md:text-5xl sm:text-4xl bg-clip-text break-words w-[80vw] bg-gradient-to-b from-[#81109D] to-[#D738A4] py-5 font-Thai text-center mx-10 z-10"> ชมรม{clubs}</p>
            <p className=" text-white text-center mt-12 font-Thai text-3xl">{clubsE}</p>

            <div className=" flex text-white md:w-[450px] sm:w-[450px] sm:ml-2 left-1/2 absolute -translate-x-1/2  font-Thai mt-[200px] justify-between ">
              <UserIcon />
              <p className=" text-3xl block text-center text-transparent bg-clip-text bg-gradient-to-b from-[#632790] to-[#D738A4]">สมาชิก <br /> 
                <p className=" block h-10 w-12 align-middle items-center bg-transparent text-center text-5xl">
                {member}
            
                </p>
              </p>
              
              <div className=" w-1 my-1 ">
              <svg width="4" height="86" viewBox="0 0 4 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 2L2 84" stroke="url(#paint0_linear_250_1393)" stroke-width="4" stroke-linecap="round"/>
                <defs>
                  <linearGradient id="paint0_linear_250_1393" x1="-1.00003" y1="-21.1529" x2="-1.00003" y2="84" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#D738A4"/>
                  <stop offset="1" stop-color="#7533A8"/>
                  </linearGradient>
                </defs>
              </svg>

              </div>
              <div className=" mt-1 pl-5">
              <p className=" flex text-[#8133A7] text-xl font-Thai "> IG:
              
              <p className=" h-7 w-[154px] text-xl bg-transparent font-Thai">{ig}</p>
                </p>

                <p className=" flex text-[#8133A7] text-xl font-Thai "> FB:
              
              <p className=" h-7 w-[154px] bg-transparent font-Thai">{fb}</p>
                </p>
                <p className=" flex text-[#8133A7] w-[40px] text-xl font-Thai "> อื่นๆ: 
              
              <p className=" h-7 w-[154px] bg-transparent font-Thai">{other}</p>
                </p>
                </div>
            </div>
            
            
        </div>
        <div className=" absolute top-96 mt-[420px] justify-center flex gap-2  text-white font-Thai ">
              <ClubWidget/>
        </div>
        {// first section
         }
              <p className=" absolute top-96 lg:mr-[600px] lg:mt-[600px] hidden lg:flex px-6 w-60 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-6xl ">ชมรมนี้</p>
              <p className=" absolute top-96 lg:mr-[660px] lg:mt-[660px] hidden lg:flex px-14 w-60 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-4xl ">ทำอะไร</p>
              <p className=" absolute top-96 w-[200px] mt-[547px] leading-loose md:mr-[550px] sm:mr-[150px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai  text-3xl  lg:hidden ">ชมรมนี้ทำอะไร ?</p>
              <svg className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px] sm:mt-[630px] flex lg:w-[509px] lg:h-[309px] md:w-[772px] md:h-[468px] sm:h-[220px] " viewBox="0 0 509 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="509" height="307" rx="23" fill="#D9D9D9"/>
              </svg>
              
              <p className=" absolute top-96 lg:ml-[270px] lg:mt-[910px] md:mt-[1100px] sm:mt-[860px] z-50 md:ml-0 flex  text-[#7533A8]  font-Thai text-lg opacity-75 ">ภาพบรรยากาศในชมรม</p>
              <img className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px] sm:mt-[630px] z-10  flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl " src={image1} />
            <div className=" lg:flex absolute top-96 mr-[680px] mt-[730px] hidden  ">
          <ClubStar/>
          </div>
        </div>
        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[920px] mt-[1150px] flex justify-center">
          {// seccond section
         }
          <svg className="absolute top-96 ml-0 lg:mr-[280px] lg:mt-[0px] md:mt-[70px] sm:mt-[100px] flex lg:w-[509px] lg:h-[309px] md:w-[772px] md:h-[468px] sm:h-[220px] " viewBox="0 0 509 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="509" height="307" rx="23" fill="#D9D9D9"/>
              </svg>
          <p className=" absolute top-96 lg:mr-[270px] lg:mt-[310px] md:mt-[540px] sm:mt-[330px] md:ml-0 flex  text-[#7533A8] font-Thai text-lg opacity-75 ">ภาพบรรยากาศในชมรม</p>
          <p className=" absolute top-96 lg:ml-[600px] lg:mt-[0px] hidden lg:flex px-6 w-60 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#D738A4] to-[#FFDD77] leading-[4.5rem] font-Thai text-6xl ">ประโยชน์ที่ได้รับ</p>
          <p className=" absolute top-96 lg:ml-[620px] lg:mt-[130px] hidden lg:flex px-14 w-76 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-3xl ">จากการเข้าชมรม</p>
          <p className=" absolute top-96 md:mt-[0px] leading-loose md:mr-[350px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai  text-3xl  lg:hidden ">ประโยชน์ที่ได้รับจากการเข้าชมรม</p>
          <img className="absolute top-96 ml-0 lg:mr-[280px] lg:mt-[0px] md:mt-[70px] sm:mt-[100px] flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl  " src={image2} />
              <div className=" lg:flex absolute top-96 ml-[675px] mt-[200px] hidden  ">
          
          <ClubStar/>
          </div>
          {// Third section
         }
         
         <svg className="absolute top-96 ml-0 lg:ml-[280px] lg:mt-[750px] md:mt-[1070px] flex lg:w-[509px] lg:h-[309px] md:w-[772px] md:h-[468px] sm:mt-[1100px] sm:h-[220px] " viewBox="0 0 509 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="509" height="307" rx="23" fill="#D9D9D9"/>
              </svg>
          <p className=" absolute top-96 lg:ml-[270px] lg:mt-[1060px] md:mt-[1540px] sm:mt-[1330px] md:ml-0 flex  text-[#7533A8] font-Thai text-lg opacity-75 ">ภาพบรรยากาศในชมรม</p>
          <p className=" absolute top-96 lg:mr-[550px] lg:mt-[750px] hidden lg:flex px-6 w-72 py-5  gap-2 font-semibold text-transparent bg-clip-text bg-gradient-to-br from-[#D738A4] to-[#FFDD77] leading-[4.5rem] font-Thai text-7xl ">ผลงาน</p>
          <p className=" absolute top-96 lg:mr-[650px] lg:mt-[820px] hidden lg:flex px-14 w-60 py-5 gap-2 font-semibold  text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai text-3xl ">ของชมรม</p>
          <p className=" absolute top-96 md:mt-[1010px] sm:mt-[1000px] leading-loose md:mr-[535px] font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] font-Thai  text-3xl  lg:hidden ">ผลงานของชมรม</p>
          <img className="absolute top-96 ml-0 lg:ml-[280px] lg:mt-[750px] md:mt-[1070px] sm:mt-[1100px]  flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] sm:w-[363px] sm:h-[220px] md:rounded-3xl sm:rounded-2xl " src={image3} />
               <div className=" lg:flex absolute top-96 mr-[665px] mt-[880px] hidden  ">
          
          <ClubStar/>
          </div>

          <div className=" absolute top-96 lg:mt-[1400px] md:mt-[2000px] sm:mt-[2000px] px-12 py-5 flex gap-2 lg:w-1/2  text-white font-Thai ">
              <ReviewWidget/>
        </div>
        <div className=" absolute top-96 lg:mt-[1510px] md:mt-[2110px] sm:mt-[2110px] sm:w-[500px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai ">
              <ReviewCard/>
        </div>

        <div className=" absolute top-96 lg:mt-[1910px] md:mt-[2500px] sm:mt-[2410px] sm:w-[500px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai ">
              <ReviewCardR/>
        </div>

        <div className=" absolute top-96 lg:mt-[2310px] md:mt-[2900px] sm:mt-[2710px] sm:w-[500px] px-12 py-5 flex gap-2 md:w-[850px] text-white font-Thai ">
              <ReviewCard/>
        </div>
        
        </div>

        {
          //text area------------------------------------------------------------------------------------------------------------
        }

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[970px] md:mt-[1200px] sm:mt-[900px] flex justify-center">
          <p className=" text-[#582A88]  text-lg break-words font-Thai h-60 sm:ml-10 md:w-[750px] sm:w-[600px] sm:h-72 bg-transparent align-top resize-none ">
                {clubsactivity}
            </p>
        </div>       

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[1710px] md:mt-[2200px] sm:mt-[1900px] flex justify-center">
          <p className=" text-[#582A88] text-lg break-words font-Thai h-60 sm:ml-10 md:w-[750px] sm:w-[600px] sm:h-72 bg-transparent align-top resize-none">
            {benefits}
            </p>
          
                
        </div> 

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2430px] md:mt-[3200px] sm:mt-[2900px] flex justify-center">
          <p className=" text-[#582A88] text-lg break-words  font-Thai h-60 sm:ml-10 md:w-[750px] sm:w-[600px] sm:h-72 bg-transparent align-top resize-none">
            {workings}
                </p>
        </div> 

         {
          //review 1----------------------------------------------------------------------------------------------------------------------------------
          }
          <div>
        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2895px] md:mt-[3730px] sm:mt-[3790px] flex justify-center">
          
            <p className=" text-white  text-md break-words font-Thai  md:w-[480px] md:ml-[240px] md:h-[266px] sm:w-[250px] sm:ml-[140px] sm:h-[120px] bg-transparent align-top resize-none">
                {review1}
            </p>
        </div>

        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[2900px] md:mt-[3730px] sm:mt-[3790px] md:mr-[485px] sm:mr-[180px]  flex justify-center">
          <div className=" block w-[200px] ">
          <svg className="block md:w-[153px] w-[80px]"  viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9"/>
          </svg>
          <img className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px] rounded-3xl " src={review1Profile} />
          <div className=" block md:mt-1 ">
              <p className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai">{review1Name}</p> 
                <p className=" block text-[#291A54] md:text-xl md:mt-0 sm: sm:text-sm text-base  font-Thai "> เตรียมอุดม {review1Gen}</p>
              <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai">{review1Contact}</p>
               
                </div>
                </div>
              </div>
              </div>
              {
                //review 2----------------------------------------------------------------------------------------------------------
              }
              <div className="">
              <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3295px] lg:mr-0 md:mt-[4115px] sm:mt-[4090px] md:mr-[270px] flex justify-center">
                <p className=" text-white text-md break-words font-Thai  md:w-[480px] md:mr-[240px] md:h-[266px] sm:w-[250px] sm:mr-[130px] sm:h-[120px] bg-transparent align-top resize-none">
                    {review2}
                </p>
                
              </div>

              <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3300px] md:mt-[4120px] sm:mt-[4090px] md:ml-[550px] sm:ml-[280px] flex justify-center">
                <div className=" block   ">
                  <svg className="block md:w-[153px] w-[80px] md:ml-0 sm:ml-[20px]"  viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9"/>
                  </svg>
                  <div className=" absolute top-0 lg:mt-[0px] lg:ml-[0px] md:mt-[0px] z-20 flex items-center justify-center md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px] md:ml-0 sm:ml-[20px] ">
                <img className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px] md:rounded-3xl sm:rounded-2xl " src={review2Profile} />
              </div>
                  <div className=" block md:mt-1">
              <p className=" text-white md:text-2xl sm:text-md md:ml-0 sm:ml-[10px] sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai text-end">{review2Name}


                </p>

                <p className=" block text-[#291A54] md:text-xl md:mt-0  sm:text-sm text-base  md:mr-1  font-Thai text-end "> เตรียมอุดม {review2Gen}
                </p>
                <div className=" flex">
                <p className=" sm:h-4 md:h-6 md:w-[148px] items-center  w-[100px] text-[#291A54] sm:text-sm md:text-base bg-transparent font-Thai text-end">
                    {review2Contact}
                </p>
                </div>
                </div>
                </div>
              </div>
              </div>
              {
                //review 3---------------------------------------------------------------------------------------------------------------------
              }
          <div className="">
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3695px] md:mt-[4520px] sm:mt-[4390px] flex justify-center">
          
          <p className=" text-white  text-md break-words font-Thai  md:w-[480px] md:ml-[240px] md:h-[266px] sm:w-[250px] sm:ml-[140px] sm:h-[120px] bg-transparent align-top resize-none">
            {review3}
          </p>
        </div>
        <div className=" absolute top-96 inset-0 m-auto  lg:mt-[3700px] md:mt-[4520px] sm:mt-[4390px] md:mr-[485px] sm:mr-[180px] flex justify-center">
                <div className=" block w-[200px]">
                  <svg className="block md:w-[153px] w-[80px]"  viewBox="0 0 153 153" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="152.941" height="152.941" rx="30" fill="#D9D9D9"/>
                  </svg>
          <img className="absolute top-0 ml-0 lg:ml-[0px] lg:mt-[0px] md:mt-[0px] z-10  flex object-cover md:h-[153px] md:w-[153px] sm:h-[80px] sm:w-[80px]  rounded-3xl " src={review3Profile} />
                  <div className=" block md:mt-1 ">
                <p className=" text-white md:text-2xl sm:text-md sm:w-[90px] sm:h-6 md:h-8 md:w-[148px]  bg-transparent font-Thai">
                    {review3Name}
                </p>
                <p className=" block text-[#291A54] md:text-xl md:mt-0 sm:text-sm text-base  font-Thai "> 
                เตรียมอุดม {review3Gen}
                </p>
                <div className=" flex">
                <p className=" sm:h-4 md:h-6 md:w-[148px] items-center w-[100px] text-[#291A54] sm:text-sm md:text-base text-left bg-transparent font-Thai">
                    {review3Contact}
                </p>
                </div>
                </div>
                </div>
              </div>
        </div>
        </div>
        </>
    )
}