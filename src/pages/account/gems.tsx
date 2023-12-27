import { useState, useEffect, use } from "react";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
import axios from "axios";
import LeftCircle from "@/vectors/quiz/left";
import RightCircle from "@/vectors/quiz/right";

export default function GemsPage() {
  const [gems, setGems] = useState("");
  const [gem_description, setGemDescription] = useState("");
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  let userData = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let hasAccountConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/has-account`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function hasAccountRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(hasAccountConfig);
        if (response.data === false) {
          router.push("/account/form");
        } else {
          userRequest();
        }
      } catch (error) {}
    }
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/get",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function userRequest() {
    try {
      const response = await axios.request(config);
      setGems(response.data.gems);
      console.log(response.data.gems);
      console.log(response.data.gem_desc);
      setGemDescription(response.data.gem_desc);
    } catch (error) {}
  }

  useEffect(() => {
    hasAccountRequest();
  }, [status]);
  return (
    <div className=" w-screen h-screen bg-radial-2 relative flex items-center justify-center">
      <div className=" block md:w-[390px] w-[277px] relative z-[90]">
        <div className=" bg-gradient-to-b from-[#5018AD] to-[#2D0C62] rounded-xl ">
          <div className=" flex justify-center py-5">
            <div className=" px-1 py-1 bg-[#E9B5ED] rounded-full w-fit ">
              <div className="text-center text-white md:text-4xl text-2xl font-semibold px-8 py-2 rounded-full bg-[#350E67] w-fit">
                {gems}
              </div>
            </div>
          </div>
          <div className=" text-white md:text-base text-xs font-normal text-center md:px-6 px-3 whitespace-pre-line">{gem_description}</div>
        </div>
      </div>

      <LeftCircle className=" absolute left-0 bottom-0 z-0 lg:w-auto lg:h-auto md:w-[343px] md:h-[400px] w-[221px] h-[252px]  " />
      <RightCircle className=" absolute right-0 top-0 z-0  lg:w-auto lg:h-auto md:w-[345px] md:h-[395px] w-[221px] h-[252px] " />
    </div>
  );
}
