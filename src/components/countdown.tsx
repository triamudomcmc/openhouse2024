import React, { useState, useEffect } from "react";

interface CountdownProps {
  targetDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
  const [timeRemaining, setTimeRemaining] = useState<string>("");
  const [daysRemaining, setDaysRemaining] = useState(Number);
  const [hoursRemaining, setHoursRemaining] = useState(Number);
  const [minsRemaining, setMinsRemaining] = useState(Number);
  const [secsRemaining, setSecsRemaining] = useState(Number);

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
      <div className=" flex justify-center   ">
        <div className="text-[32px] font-semibold bg-fuchsia-500 bg-opacity-70 rounded-[100px] text-white px-10 py-1">
          12-13 JANUARY 2024
        </div>
      </div>
      <div className=" grid md:grid-cols-4 grid-cols-2 gap-5 text-[54px] font-semibold mt-5">
        <div className=" block text-center ">
          <div className=" w-24 h-24 bg-white rounded-[20px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700  ">{daysRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white text-2xl">
            day
          </div>
        </div>
        <div className=" block text-center">
          <div className=" w-24 h-24 bg-white rounded-[20px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{hoursRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white text-2xl">
            hour
          </div>
        </div>
        <div className=" block text-center">
          <div className=" w-24 h-24 bg-white rounded-[20px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{minsRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white text-2xl">
            min
          </div>
        </div>
        <div className=" block text-center">
          <div className=" w-24 h-24 bg-white rounded-[20px] shadow-md flex items-center ">
            <p className=" m-auto text-purple-700">{secsRemaining}</p>
          </div>
          <div className=" mt-3 opacity-60 text-center text-white text-2xl">
            sec
          </div>
        </div>
      </div>
    </div>
  );
};

export default Countdown;
