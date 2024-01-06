import Link from "next/link";
import { ArrowLeftCircleIcon } from "@heroicons/react/24/outline";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Stats() {
  const [stats, setStats] = useState<StatsData | null>(null);
  interface StatsData {
    registrant: number;
    participants: number;
    gate: {
      [key: string]: number;
    };
    gems: {
      [key: string]: number;
    };
  }

  let config = {
    method: "get",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/stats",
    headers: {},
  };

  async function makeRequest() {
    try {
      const response = await axios.request(config);
      console.log(JSON.stringify(response.data));
      setStats(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    console.log(stats);
  }, [stats]);

  useEffect(() => {
    makeRequest();
  }, []);

  const renderStats = () => {
    if (!stats) {
      return <div>Loading...</div>; // Handle loading state
    }

    return (
      <div>
        <div>จำนวนคนลงทะเบียน: {stats.registrant} คน</div>
        <div>จำนวนคนเข้างาน: {stats.participants} คน</div>
        <div>
          <div className=" flex items-center gap-3 my-1">
            <hr className=" w-full min-h-5 border-1 border-black " />
            ประตู
            <hr className="w-full min-h-5 border-1 border-black " />
          </div>
          <ul>
            {Object.entries(stats.gate).map(([gateName, gateValue]) => (
              <li key={gateName}>
                {gateName}: {gateValue} คน
              </li>
            ))}
          </ul>
        </div>
        <div>
          <div className=" flex items-center gap-3 my-1">
            <hr className=" w-full min-h-5 border-1 border-black " />
            อัญมณี
            <hr className=" w-full min-h-5 border-1 border-black " />
          </div>
          <ul>
            {Object.entries(stats.gems).map(([gemName, gemValue]) => (
              <li key={gemName}>
                {gemName}: {gemValue} คน
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  return (
    <div className=" w-screen min-h-screen bg-gradient-to-b from-[#6D1490] to-[#623AD4] ">
      <div className=" flex items-center md:pl-28 md:pt-28 pl-8 pt-24 gap-2 md:text-xl text-base w-fit ">
        <Link href="/account" className=" flex items-center gap-1">
          <ArrowLeftCircleIcon className=" md:w-8 w-6 text-white" />
          <span className=" text-white">ย้อนกลับ</span>
        </Link>
      </div>
      <div className=" flex justify-center pb-10">
        <div>
          <div className=" text-3xl text-[#FFA9E2] mt-4 text-center">
            สถิติงาน
            <br /> Openhouse2024
          </div>
          <div className=" flex justify-center mt-10">
            <div className=" w-[300px] bg-white rounded-2xl px-6 py-6 ">
              <div>{renderStats()}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
