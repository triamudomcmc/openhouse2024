import Router, { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowLeftCircleIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";
import Lottie from "lottie-react";
import checkmark from "@/vectors/checkmark.json";

export default function RegisterSucess() {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center w-full h-screen bg-[#FCF7E1]">
      <div className="flex flex-col items-center">
      <Lottie className=" md:w-2/5 w-3/5 " animationData={checkmark} loop={false} />
        <p className="text-center  md:text-3xl text-xl font-bold text-[#7625B9]">
          ลงทะเบียนสำเร็จ
        </p>
        <div className=" flex justify-center">
          <Link href="/">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-[#7625B9] text-[#FCF7E1] text-[14px] lg:text-[20px] mt-[10px] lg:mt-[30px] w-[100px] h-[25px] lg:w-[150px] lg:h-[40px] rounded-[20px]"
            >
              กลับสู่หน้าบัญชี
            </motion.button>
          </Link>
        </div>
      </div>
    </div>
  );
}
