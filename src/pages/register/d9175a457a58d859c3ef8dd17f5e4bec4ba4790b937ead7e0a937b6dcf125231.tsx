import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function RegisterOPHNFC() {
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/login"); // The user is not authenticated, handle it here.
    },
  });

  let data = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let haveAccountConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/get`,
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  let registerConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/register",
    headers: {
      "Content-Type": "application/json",
    },
    data: data,
  };

  async function haveAccountRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(haveAccountConfig);
        if (response.data === false) {
          router.push("/account/form");
        } else {
          registerRequest();
        }
      } catch (error) {
        console.log(error);
      }
    }
  }

  async function registerRequest() {
    try {
      const response = await axios.request(registerConfig);
      console.log(JSON.stringify(response.data));
      toast.success(
        <>
          <p>success</p>
          <p>ลงทะเบียนเข้างานแล้ว </p>
        </>,
        {
          position: toast.POSITION.BOTTOM_RIGHT,
          theme: "colored",
        }
      );
      
        router.push("/register/success");
    } catch (error) {
      console.log(error);
    }
  }
  const router = useRouter();

  useEffect(() => {
    haveAccountRequest();
  }, [status]);
  return (
    <>
      <ToastContainer />
    </>
  );
}
