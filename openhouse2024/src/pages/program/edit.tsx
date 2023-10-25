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



export default function  ProgramEdit () {
    const [clubs, setClubs] = useState('');
    const [clubsE, setClubsE] = useState('');
    const [member, setMember] = useState('');
    const [ig, setIg] = useState('');
    const [fb, setFb] = useState('');
    const [other, setOther] = useState('');
    const [admission,setAdmission] = useState('')
    const [memberEditMode, setMemberEditMode] = useState(false);
    const [igEditMode, setIgEditMode] = useState(false);
    const [fbEditMode, setFbEditMode] = useState(false);
    const [otherEditMode, setOtherEditMode] = useState(false);
    const [clubActivityEditMode, setClubActivityEditMode] = useState(false);
    const [image1, setImage1] = useState('');
    const [image1Base64, setImage1Base64] = useState('');
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
            console.log(JSON.stringify(response.data.info.name));
            setClubs(response.data.info.name);
            setMember(response.data.info.members);
            setIg(response.data.info.ig);
            setFb(response.data.info.facebook);
            setOther(response.data.info.others);
            setAdmission(response.data.info.clubsactivity)
            console.log("success");
          }) .catch((error) => {
            console.log(error);
            router.push('/program')
          })}
  
    const memberRef = useRef<any>();
    const igRef = useRef<any>();
    const fbRef = useRef<any>();
    const otherRef = useRef<any>();
    const clubActivityRef = useRef<any>();
  
    useEffect(() => {
        // User email is available, make the API request
        request()
   
    }, []);
  
    function back() {
      router.push('/program');
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
  
    function handleMemberChange(event: any) {
      setMember(event.target.value);
    }
  
    function handleIgChange(event: any) {
      setIg(event.target.value);
    }
  
    function handleFbChange(event: any) {
      setFb(event.target.value);
    }
  
    function handleOtherChange(event: any) {
      setOther(event.target.value);
    }
  
    function handleImage1Change(event:any) {
      console.log(event.target.files);
      setImage1(URL.createObjectURL(event.target.files[0]));
      const file = event.target.files[0];
      const reader = new FileReader();
  
      reader.onloadend = () => {
        setImage1Base64(reader.result!.toString())
      }
  
      reader.readAsDataURL(file);
    }
  
    function handleClubActivityChange(event:any) {
      console.log(event.target.files);
      setAdmission(event.target.value)
    }
      return(
          <>
          <div className="hidden lg:block  lg:w-full lg:-z-10">
              <ClubBg />
          </div>
          <div className=" block w-full lg:hidden -z-10">
              <ClubBgM />
          </div>
          <div className=" absolute top-0 w-full">
              <ClubTop />
          </div>
          <div className=" flex justify-center z-0">
              <div className=" w-1/2 absolute top-96">
              <button onClick={back} 
                  className="px-12 py-5 flex gap-2   text-white font-Thai ">
              <BackArrow />
              <span className=" ml-3 text-2xl">ย้อนกลับ</span>
              </button>
              
              
              </div>
              <div className=" absolute mt-32  top-96">
              <p className="  p-6 rounded-full  font-extrabold text-transparent text-5xl bg-clip-text bg-gradient-to-b from-[#81109D] to-[#D738A4] py-5 font-Thai border text-center mx-10 z-10">{clubs}</p>
              <p className=" text-white text-center mt-12 font-Thai text-3xl">{clubsE} hello </p>
                </div>
              <div className=" absolute mt-[300px] ml-[40px] top-96 py-5 flex gap-2  text-white font-Thai justify-between ">
                <UserIcon />
                <p className=" text-3xl block text-center">สมาชิก <br /> 
                  <input className=" block h-10 w-20 align-middle items-center bg-transparent text-center"
                  type="text"
                  ref={memberRef}
                  value={member}
                  readOnly ={!memberEditMode}
                  onClick={turnOnMemberEditMode}
                  defaultValue=""
                  onBlur={() => setMemberEditMode(false)}
                  onChange={handleMemberChange}
                  >
  
  
                  </input><button className=" block align-middle m-auto z-30 " onClick={turnOnMemberEditMode}><PencilIcon/></button>
                </p>
                
                <div className=" w-1 my-1 ">
                <svg width="1" height="85" viewBox="0 0 1 85" fill="none" xmlns="http://www.w3.org/2000/svg">
                <line x1="0.5" y1="-2.18557e-08" x2="0.500004" y2="85" stroke="white"/>
                </svg>
                </div>
                <div className=" mt-1">
                <p className=" flex text-white "> IG:
                
                <input className=" h-6 w-[154px] bg-transparent"
                  type="text"
                  ref={igRef}
                  value={ig}
                  readOnly ={!igEditMode}
                  onClick={turnOnIgEditMode}
                  defaultValue=""
                  onBlur={() => setIgEditMode(false)}
                  onChange={handleIgChange}
                  >
                  
                  </input>
                  <button onClick={turnOnIgEditMode}><PencilIcon/></button>
                  </p>
                  <p className=" flex text-white "> FB:
                
                <input className=" h-6 w-[154px] bg-transparent"
                  type="text"
                  ref={fbRef}
                  value={fb}
                  readOnly ={!fbEditMode}
                  onClick={turnOnFbEditMode}
                  defaultValue=""
                  onBlur={() => setIgEditMode(false)}
                  onChange={handleFbChange}
                  >
  
                  </input>
                  <button onClick={turnOnFbEditMode}><PencilIcon/></button>
                  </p>
                  <p className=" flex text-white w-[40px] "> อื่นๆ: 
                
                <input className=" h-6 w-[154px] bg-transparent"
                  type="text"
                  ref={otherRef}
                  value={other}
                  readOnly ={!otherEditMode}
                  onClick={turnOnOtherEditMode}
                  defaultValue=""
                  onBlur={() => setIgEditMode(false)}
                  onChange={handleOtherChange}
                  >
  
                  </input>
                  <button onClick={turnOnOtherEditMode}><PencilIcon/></button>
                  </p>
                  </div>
              </div>
              
              
          
          <div className=" absolute top-96 mt-[420px] px-12 py-5 flex gap-2  text-white font-Thai ">
                <ClubWidget/>
          </div>
                <p className=" absolute top-96 lg:mr-[560px] lg:mt-[600px] hidden lg:flex px-6 w-60 py-5  gap-2 font-semibold font-Thai text-4xl text-transparent bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] ">การรับสมัคร<br/>และ<br/>การสอบเข้า</p>
                <p className=" absolute top-96 mt-[560px] mr-[400px] text-transparent text-3xl bg-clip-text bg-gradient-to-b from-[#D738A4] to-[#FFDD77] lg:hidden ">การรับสมัครและการสอบเข้า ?</p>
                <input className="absolute top-96 lg:ml-[100px] ml-[300px] mt-[565px] flex gap-2  text-white font-Thai " type="file" onChange={handleImage1Change} />
                <svg className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px] flex lg:w-[509px] lg:h-[309px] w-[772px] " viewBox="0 0 509 307" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="509" height="307" rx="23" fill="#D9D9D9"/>
                </svg>
  
                <img className="absolute top-96 ml-0 lg:ml-[260px] lg:mt-[600px] md:mt-[630px]  flex object-cover lg:h-[307px] lg:w-[509px] md:w-[772px] md:h-[468px] rounded-3xl " src={image1} />
              
          </div>
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[900px] mt-[1150px] flex justify-center">
            <div>
            <TextBox/>
            </div>
          </div>
  
          <div className=" absolute top-96 inset-0 m-auto  lg:mt-[950px] mt-[1200px] flex justify-center">
            <textarea className=" text-white font-Thai h-40 ml-16 w-[750px] bg-transparent align-top resize-none"
                  ref={clubActivityRef}
                  value={admission}
                  readOnly ={!clubActivityEditMode}
                  onClick={turnOnClubActivityEditMode}
                  defaultValue=""
                  onBlur={() => setClubActivityEditMode(false)}
                  onChange={handleClubActivityChange}
                  >
  
                  </textarea>
                  <button className="ml-10" onClick={turnOnClubActivityEditMode}><PencilIcon/></button></div>       
  
          </>    

    )
}