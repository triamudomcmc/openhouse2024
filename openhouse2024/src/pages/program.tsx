"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect,useState } from "react";
import ClubWidget from "@/vectors/club/clubwidget";
import PencilIcon from "@/vectors/club/pencil";
import axios from "axios";
import { Hidden } from "@mui/material";

export default function Club() {
  const router = useRouter();
  const [program, setProgram] = useState('');  
  const [members, setMembers] = useState('')
  const [aprrove, setAprove] = useState(false)
  const [deny, setDeny] = useState(false)
  const [review, setReview] = useState(false)
  const [NoEdit, setNoEdit] = useState(false)
  
  const { data: session } = useSession({
        required: true,
        onUnauthenticated() {
          router.push('/login')// The user is not authenticated, handle it here.
        },
      });


    let data = JSON.stringify({
      "email": session?.user?.email
    });
    
    let config = {
      method: 'post',
      maxBodyLength: Infinity,
      url: 'http://localhost:5000/api/roles/info',
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };

    async function makeRequest() {
      try {
        const response = await axios.request(config);
        console.log(JSON.stringify(response.data.name));
        setProgram(response.data.name)
        setMembers(response.data.members)
        console.log("succes")
         if( response.data.status = 'ยังไม่มีการแก้ไข'){
          setNoEdit(true)
          console.log('ยังไม่มีการแก้ไข')
        }
         else if( response.data.status = 'อยู่ระหว่างการตรวจสอบ'){
          setReview(true)
        }
         else if( response.data.status = 'ไม่ผ่านการตรวจสอบ'){
          setDeny(true)
        }
         else if( response.data.status = 'ผ่านการตรวจสอบ'){
          setAprove(true)
        }
      }
      catch (error) {
        console.log(error);
      }
    }

    useEffect(() => {
      makeRequest()
    })

   

    return(
        <>
        <div className="flex justify-center relative " >
        <div className=" h-full align-middle mt-40 w-full md:w-1/2 lg:w-1/3 border border-slate-500 rounded-lg justify-center flex-wrap text-center">
            <p className=" text-[#141547] mb-12 font-Thai ">ข้อมูลหน่วยงาน</p>
            <p className=" font-extrabold text-transparent text-4xl bg-clip-text bg-gradient-to-b from-[#81109D] to-[#D738A4] font-Thai ">{program}</p>
            <p className=" text-[#141547] font-Thai opacity-60">สายการเรียน {members} คน</p>
            <div className=" w-full">
            <ClubWidget />
            </div>
            <button className=" flex m-auto px-20 rounded-2xl bg-gradient-to-b from-[#7533A8] to-[#D62C9F] items-center drop-shadow ">
              <span className=" text-white ml-3 text-2xl mr-2 font-Thai">แก้ไข</span>
               <PencilIcon />
            </button>
            <div className={ NoEdit ? "flex items-center justify-center my-3" : " hidden"}>
            <p className= "text-[#141547] flex items-center justify-center font-Thai">สถานะ : 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mx-2 ">
              <circle cx="10" cy="10" r="10" fill="#9E9E9E"/>
            </svg>
            </p>
             <p className=" text-[#9E9E9E] font-Thai" >  ยังไม่มีการแก้ไข </p>
            </div>
            <div className={ deny ? "flex items-center justify-center my-3" : " hidden"}>
            <p className= "text-[#141547] flex items-center justify-center my-3 font-Thai">สถานะ : 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mx-2 ">
              <circle cx="10" cy="10" r="10" fill="#E80808"/>
            </svg>
            </p>
             <p className=" text-[#E80808] font-Thai" >  ไม่ผ่านการตรวจสอบ </p>
            </div>
            <div className={ review ? "flex items-center justify-center my-3" : "hidden"}>
            <p className= "text-[#141547] flex items-center justify-center my-3 font-Thai">สถานะ : 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mx-2 ">
              <circle cx="10" cy="10" r="10" fill="#FCB52B"/>
            </svg>
            </p>
             <p className=" text-[#FCB52B] font-Thai" >  อยู่ระหว่างการตรวจสอบ </p>
            </div>
            <div className={ aprrove ? "flex items-center justify-center my-3" : " hidden"}>
            <p className= "text-[#141547] flex items-center justify-center my-3 font-Thai">สถานะ : 
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className=" mx-2 ">
              <circle cx="10" cy="10" r="10" fill="#19C57C"/>
            </svg>
            </p>
             <p className=" text-[#19C57C] font-Thai" >  ผ่านการตรวจสอบ </p>
            </div>
            <p className=" text-[#141547] font-Thai" >  แก้ไขข้อมูลหน่วยงาน </p>
            <p className=" text-[#141547] opacity-60 font-Thai" >  ข้อมูลจะแสดงผลในหน้าเว็บไซต์ </p>
        </div>
        </div>
        </>



    )

}