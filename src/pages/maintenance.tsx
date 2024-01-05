import { WrenchScrewdriverIcon } from "@heroicons/react/24/outline";

export default function Maintenance() {
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#FCF7E1]">
      <div className="flex flex-col items-center">
        <WrenchScrewdriverIcon className="text-[#7625B9] md:w-40 w-20" />
        {/* <CheckCircleIcon className="w-3/5 text-[#7625B9]" /> */}
        <p className="text-center  md:text-3xl text-xl font-bold text-[#7625B9]">
          กำลังปรับปรุงระบบ
          <br />
          ขออภัยในความไม่สะดวก
        </p>
      </div>
    </div>
  );
}
