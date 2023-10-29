"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { UserCard } from "../../components/UserCard";
import { useRouter } from 'next/navigation'
import { useEffect,useState } from "react";
import axios from "axios";
import { setgid } from "process";



export default function AccountPage() {
  const [club,setClub] = useState(false)
  const [program,setProgram] = useState(false)
  const [gifted,setGifted] = useState(false)
  const [organization,setOrganization] = useState(false)
  const [none,setNone] = useState(false)


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
    url: 'https://openhouse2024-backend.vercel.app/api/roles/info',
    headers: { 
      'Content-Type': 'application/json'
    },
    data : data
  };

  async function makeRequest() {
    try {
      const response = await axios.request(config);
      console.log(response.data.tag)
      console.log("succes")
      if( response.data.tag === 'ชมรม'){
        setClub(true)
        setNone(false)
        setProgram(false)
        setGifted(false)
        setOrganization(false)
        console.log('club')
      }
       else if( response.data.tag === 'สายการเรียน'){
        setProgram(true)
        setNone(false)
        setClub(false)
        setGifted(false)
        setOrganization(false)
      }
       else if( response.data.tag === 'โครงการพัฒนาความสามารถ'){
        setGifted(true)
        setNone(false)
        setProgram(false)
        setClub(false)
        setOrganization(false)
      }
       else if( response.data.tag === 'องค์กรนักเรียน'){
        setOrganization(true)
        setNone(false)
        setProgram(false)
        setGifted(false)
        setClub(false)
      }
    }
    catch (error) {
      console.log(error);
      setNone(true)
    }
  }

  
  const router = useRouter();
  function handleSignout() {
    signOut()
  }
  function handleClub() {
    router.push('/club')
  }
  function handleProgram() {
    router.push('/program')
  }
  function handleGifted() {
    router.push('/gifted')
  }
  function handleOrganization() {
    router.push('/organization')
  }
  function handleForm() {
    router.push('/account/form')
  }
  function handleAdmin() {
    router.push('/admin')
  }

  useEffect(() => {
    makeRequest()
    console.log(session?.user?.email)
  })

    return (
      <>
        <button
          onClick={handleSignout}
          type="button"
          className="bg-blue-500 rounded-md mt-20"
        >
          Sign Out of google
        </button>

        <UserCard user={session?.user} />

        <button type="button" onClick={handleClub} className={club ? " absolute  left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " : " hidden" }>ข้อมูลชมรม</button>
        <button type="button" onClick={handleProgram} className={program ? " absolute  left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " : " hidden" }>ข้อมูลสายการเรียน</button>
        <button type="button" onClick={handleGifted} className={gifted ? " absolute  left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " : " hidden" }>ข้อมูลโครงการพัฒนาความสามารถ</button>
        <button type="button" onClick={handleOrganization} className={organization ? " absolute  left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " : " hidden" }>ข้อมูลองค์กรนักเรียน</button>
        <button type="button" onClick={handleForm} className={none ? " absolute left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " : "hidden"}>Form</button>
        <button type="button" className=" absolute -z-10 left-1/2 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 ">Loading</button>
        <button type="button" onClick={handleAdmin} className="absolute left-1/2 mt-96 -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 " >Admin</button>
        <button type="button" onClick={handleSignout} className=" absolute left-1/2 mt-48  -translate-x-1/2 lg:w-1/3 md:w-3/5 sm:w-4/5 border shadow-sm text-black bg-white hover:bg-slate-300  font-Thai rounded-full text-xl px-5 py-5 text-center mr-2 mb-2 ">Sign out</button>
      </>
    );
  }
