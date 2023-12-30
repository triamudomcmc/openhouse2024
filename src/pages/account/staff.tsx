import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSession, signIn, signOut } from "next-auth/react";
import { useEffect, useState } from "react";
import axios from "axios";

export default function staff() {
  const [isProcessing, setIsProcessing] = useState(false);
  const [staffTag, setStaffTag] = useState("");
  const [orgName, setOrgName] = useState("");
  const [id, setId] = useState("");
  const [username, setUsername] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [stampError, setStampError] = useState(false);
  const [stampSuccess, setStampSuccess] = useState(false);
  const [registerSuccess, setRegisterSuccess] = useState(false);
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

  async function userRequest() {
    try {
      const response = await axios.request(config);
      if (response.data.isstaff === false) {
        router.push("/account");
      }
      setStaffTag(response.data.staff.tag);
      setOrgName(response.data.staff.organizationName);
    } catch (error) {}
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

  useEffect(() => {
    hasAccountRequest();
  }, [status]);

  function summit() {
    if (isProcessing === false) {
      if (staffTag === "register") {
        setIsProcessing(true);
        registerRequest();
      }
      if (staffTag === "stamp") {
        setIsProcessing(true);
        stampRequest();
      }
    } else {
    }
  }

  let registerData = JSON.stringify({
    id: id,
    gate: orgName,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let registerConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/register2",
    headers: {
      "Content-Type": "application/json",
    },
    data: registerData,
  };

  async function registerRequest() {
    try {
      const response = await axios.request(registerConfig);
      console.log(JSON.stringify(response.data));
      setIsProcessing(false);
      setRegisterSuccess(true);
    } catch (error) {
      console.log(error);
      setIsProcessing(false);
      setRegisterSuccess(false);
    }
  }

  let userSearchData = JSON.stringify({
    id: id,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let userSearchConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/getbyID`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userSearchData,
  };

  async function userSearchRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(userSearchConfig);
        setUsername(response.data.username);
        setFirstName(response.data.name);
        setLastName(response.data.surname);
        setShowSearch(true);
      } catch (error) {setShowSearch(false);}
    }
  }

  let stampData = JSON.stringify({
    id: id,
    verifyestamp: orgName,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let stampConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/estamp/update",
    headers: {
      "Content-Type": "application/json",
    },
    data: stampData,
  };

  async function stampRequest() {
    try {
      const response = await axios.request(stampConfig);
      console.log(JSON.stringify(response.data));
      setIsProcessing(false);
      setStampSuccess(true);
      setStampError(false);
    } catch (error) {
      console.log(error);
      setStampError(true);
      setStampSuccess(false);
      setIsProcessing(false);
    }
  }

  function handleIdChange(event: any) {
    setId(event.target.value);
    setShowSearch(false);
    setStampError(false)
    setStampSuccess(false)
    setRegisterSuccess(false)
  }

  function handleSerch() {
    userSearchRequest();
  }

  return (
    <div className=" w-screen min-h-screen bg-[#FCF7E1]">
      <div className=" flex justify-center">
        <div className=" mt-40 text-center">
          <div>
            <input
              type="number"
              className=" text-center"
              onChange={handleIdChange}
            ></input>
          </div>

          <div>
            <button onClick={handleSerch} className="  ">
              search
            </button>
          </div>
          {showSearch && (
            <div>
                <div>{username}</div>
                <div>{firstName}</div>
                <div>{lastName}</div>
              <button onClick={summit} className="  ">
                summit
              </button>
              {registerSuccess && <div>ลงทะเบียนสำเร็จ</div>}
              {stampSuccess && <div>บันทึกstampสำเร็จ</div>}
              {stampError && <div>บัญชีนี้มีstampนี้แล้ว</div>}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
