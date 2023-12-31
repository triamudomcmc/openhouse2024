import React, { useState, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { useSession } from "next-auth/react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [daysRemaining, setDaysRemaining] = useState(Number);
  const [hoursRemaining, setHoursRemaining] = useState(Number);
  const [minsRemaining, setMinsRemaining] = useState(Number);
  const [secsRemaining, setSecsRemaining] = useState(Number);
  const { data: session, status } = useSession();

  useEffect(() => {
    const intervalId = setInterval(() => {
      const now = new Date();
      const timeDifference = targetDate.getTime() - now.getTime();
      setDaysRemaining(Math.floor(timeDifference / (1000 * 60 * 60 * 24)));
      setHoursRemaining(
        Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
      );
      setMinsRemaining(
        Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
      );
      setSecsRemaining(Math.floor((timeDifference % (1000 * 60)) / 1000));
    }, 1000);

    return () => clearInterval(intervalId);
  }, [targetDate]);

  return (
    <div className=" ">
      <div className=" flex justify-center    ">
        <div>
          { !session && <Link href="/auth" className=" flex justify-center max-md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-br from-[#FD84D4] to-[#7A34C0]  font-bold text-white text-5xl rounded-full px-11 py-2 -mt- "
            >
              ลงทะเบียน
            </motion.button>
          </Link>}
          <div className="text-[32px] font-semibold bg-fuchsia-500 bg-opacity-70 mt-4  rounded-[100px] text-white max-md:hidden px-10 py-1">
            12-13 JANUARY 2024
          </div>
        </div>
      </div>
      <div className=" grid grid-cols-4 max-md:min-w-[252px]   gap-5 md:text-[54px] sm:text-[26px] font-semibold my-5">
        <div className=" block text-center ">
          <div className=" md:w-24 md:h-24 sm:w-12 sm:h-12 bg-white md:rounded-[20px] sm:rounded-[10px] shadow-md flex justify-center items-center  ">
            <p className=" m-auto text-purple-700  ">{daysRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white md:text-2xl sm:text-lg">
            day
          </div>
        </div>
        <div className=" block text-center">
          <div className=" md:w-24 md:h-24 sm:w-12 sm:h-12 bg-white md:rounded-[20px] sm:rounded-[10px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{hoursRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white md:text-2xl sm:text-lg">
            hour
          </div>
        </div>
        <div className=" block text-center">
          <div className=" md:w-24 md:h-24 sm:w-12 sm:h-12 bg-white md:rounded-[20px] sm:rounded-[10px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{minsRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white md:text-2xl sm:text-lg">
            min
          </div>
        </div>
        <div className=" block text-center">
          <div className=" md:w-24 md:h-24 sm:w-12 sm:h-12 bg-white md:rounded-[20px] sm:rounded-[10px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{secsRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white md:text-2xl sm:text-lg">
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
