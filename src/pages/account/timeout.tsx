import { NoSymbolIcon } from '@heroicons/react/24/outline'
import React from 'react'
 const Timeout = () => {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#FCF7E1]">
      <div className="flex flex-col items-center">
        <NoSymbolIcon className="text-[#7625B9] md:w-40 w-20" />
        {/* <CheckCircleIcon className="w-3/5 text-[#7625B9]" /> */}
        <p className="text-center  md:text-3xl text-xl font-bold text-[#7625B9]">
          ขณะนี้หมดเวลาในการลงทะเบียนแล้ว
          <br />
          ขอบคุณสำหรับความสนใจ
        </p>
      </div>
    </div>
  )
}

export default Timeout