import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import Image from "next/image";
import { Router, useRouter } from "next/router";
import { useEffect } from "react";
import Countdown from "@/components/countdown";
import Landing1 from "@/vectors/landing/landing1";
import Landing1Star from "@/vectors/landing/landing1Star";
import Landing2 from "@/vectors/landing/landing2";
import { Programme } from "@/components/programme";
import { motion } from "framer-motion";
import Landing3 from "@/vectors/landing/landing3";
import Landing3Lamp from "@/vectors/landing/landing3Lamp";
import Link from "next/link";
import GiftedSci from "@/vectors/gifted/giftedSci";
import GiftedMath from "@/vectors/gifted/giftedMath";
import GiftedThai from "@/vectors/gifted/giftedThai";
import GiftedEng from "@/vectors/gifted/giftedEng";
import Landing4 from "@/vectors/landing/landing4";
import Landing4Mountain from "@/vectors/landing/landing4Mountain";
import Landing4Sun from "@/vectors/landing/landing4Sun";
import Landing5 from "@/vectors/landing/landing5";
import { AIC } from "@/vectors/organization";
import Landing6 from "@/vectors/landing/landing6";

export default function Home() {
  const router = useRouter();
  const targetDate = new Date(Date.UTC(2024, 0, 12, 9, 0, 0));
  useEffect(() => {
    // User email is available, make the API request
    //router.push("/Login")
  }, []);

  return (
    <>
      <div className="w-screen overflow-x-hidden">
        <main className="relative flex items-center justify-center w-screen">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" relative w-full -z-10 max-md:hidden  ">
              <Landing1 className="object-cover h-full min-h-screen overflow-x-hidden" />
            </div>
            
          </div><div className=" absolute top-1/2  left-1/2 -translate-x-1/2">
              <Countdown targetDate={targetDate} />
            </div>
            <div className=" absolute top-[15%] -translate-y-[15%] left-1/2 -translate-x-1/2 text-center">
              <div className=" font-Pinyon_Script text-white text-8xl">
                Triam Udom
              </div>
              <div className=" font-Cinzel_Decorative text-white lg:text-[90px] md:text-[70px] flex justify-center items-center">
                OPEN
                <div className="flex justify-center items-center">
                  <Landing1Star />
                </div>
                HOUSE
                <Landing1Star />
                2024
              </div>
            </div>
        </main>
        <section className=" relative">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing2 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
            
          </div>
          <div className="max-lg:hidden">
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-50 mt-14   ">
              <Programme
                className=" max-xl:w-[210px] max-xl:h-[312px]"
                name={"arts-korean"}
                thainame={"ภาษา-ภาษาเกาหลี"}
              />
              <Programme
                className=" mr-12 mt-14 max-xl:w-[193px] max-xl:h-[317px]"
                name={"sci-math"}
                thainame={"วิทย์-คณิต"}
              />
            </div>
            <div className=" absolute top-2/3 -translate-y-2/3 left-1/4 -translate-x-1/4  z-50 mt-14  ">
              <Programme
                className="max-xl:w-[231px] max-xl:h-[304px]"
                name={"arts-german"}
                thainame={"ภาษา-ภาษาเยอรมัน"}
              />
              <Programme
                className=" ml-[60px] mt-14 max-xl:w-[203px] max-xl:h-[308px]"
                name={"arts-japanese"}
                thainame={"ภาษา-ภาษาญี่ปุ่น"}
              />
            </div>
            <div className=" absolute top-2/3 -translate-y-2/3 left-3/4 -translate-x-3/4  z-50 mt-14  ">
              <Programme
                className="max-xl:w-[178px] max-xl:h-[290px]"
                name={"arts-chinese"}
                thainame={"ภาษา-ภาษาจีน"}
              />
              <Programme
                className=" mr-[60px] mt-14 max-xl:w-[195px] max-xl:h-[309px]"
                name={"arts-espanol"}
                thainame={"ภาษา-ภาษาสเปน"}
              />
            </div>
            <div className=" absolute top-[60%] -translate-y-2/3 left-[5%] -translate-x-[5%]  z-50 mt-14  ">
              <Programme
                className=" max-xl:w-[227px] max-xl:h-[214px]"
                name={"arts-french"}
                thainame={"ภาษา-ภาษาฝรั่งเศส"}
              />
            </div>
            <div className=" absolute top-[60%] -translate-y-2/3 left-[90%] -translate-x-[90%]  z-50 mt-14  ">
              <Programme
                className=" max-xl:w-[192px] max-xl:h-[286px] xl:w-[300px]  "
                name={"arts-math"}
                thainame={"ภาษา-คณิต"}
              />
            </div>
          </div>
          <div className=" absolute top-20 right-16">
              <div className=" text-[80px] font-bold text-white text-right">
                สายการเรียน
              </div>
              <div className=" opacity-80 text-right text-white text-[25px]">
                คลิกที่อัญมณีเพื่ออ่านข้อมูล
                <br />
                สายการเรียนที่สนใจ
              </div>
            </div>
        </section>
        <section className=" relative">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing3 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
            <div className=" absolute bottom-0 left-[10%] -translate-x-[10%] h-3/4">
              <Landing3Lamp />
            </div>
            <div className=" absolute bottom-0 right-[10%] translate-x-[10%] h-3/4">
              <Landing3Lamp />
            </div>
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 top-10 bg-gradient-to-r from-[#FC53C3]/[.0] via-[#B868D7] to-[#FC53C3]/[.0] from- text-center text-white text-[80px] font-bold px-20 w-[1000px]">
            Gifted Program
          </div>
          <div>
            <div className=" absolute top-3/4 -translate-y-3/4 left-1/2 -translate-x-1/2 z-50 ">
              <Link href={"/programmes/gifted-science"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedSci className=" max-xl:w-[339px]" />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/3 -ml-[50px] z-30 ">
              <Link href={"/programmes/gifted-math"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedMath className=" max-xl:w-[252px]" />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 ml-[50px] z-40 ">
              <Link href={"/programmes/gifted-thai"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedThai className=" max-xl:w-[410px] " />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-[60%] -translate-y-[60%] left-3/4 -translate-x-3/4  -ml-[30px] z-50 ">
              <Link href={"/programmes/gifted-english"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedEng className=" max-xl:w-[170px] " />
                </motion.button>
              </Link>
            </div>
          </div>
        </section>
        <section className=" relative overflow-hidden ">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing4 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
              <Landing4Mountain className=" max-xl:w-[1162px] max-xl:-mb-[100px]" />
            </div>
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 bottom-5 z-20 text-white text-4xl text-center">
            คลิกชมรม <br /> เพื่ออ่านข้อมูลชมรมที่สนใจ
          </div>

          <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -ml-20 -mt-16 z-0">
            <Link href={"/clubs"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className=" relative">
                  <Landing4Sun className="max-xl:w-[410px] " />
                  <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold text-8xl text-transparent bg-clip-text bg-gradient-to-b from-[#2F0A64] to-[#FC53C3] ">
                    ชมรม
                  </div>
                  <div className=" absolute -left-1/2 ml-20 -top-1/2 mt-40  ">
                    <svg
                      width="347"
                      height="415"
                      className=" max-xl:w-[277px]"
                      viewBox="0 0 347 415"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M347 166C190.661 171.337 186.337 175.661 181 332C175.663 175.661 171.339 171.337 15 166C171.339 160.663 175.663 156.339 181 0C186.337 156.339 190.661 160.663 347 166Z"
                        fill="white"
                      />
                      <path
                        d="M192 319C101.587 322.086 99.0862 324.587 96 415C92.9138 324.587 90.4127 322.086 0 319C90.4127 315.914 92.9138 313.413 96 223C99.0862 313.413 101.587 315.914 192 319Z"
                        fill="#FFF5D9"
                      />
                    </svg>
                  </div>
                </div>
              </motion.button>
            </Link>
          </div>
        </section>
        <section className=" relative overflow-hidden ">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing5 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
          </div>
          <div className=" absolute top-10 left-1/2 -translate-x-1/2 text-white font-bold text-[90px] w-full text-center ">
            หน่วยงานนักเรียน
          </div>
          <div className=" absolute top-1/3 -translate-y-1/3 left-[15%] -translate-x-[15%]">
            <Link href={"/organization/aic"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer max-xl:w-[161px] `}
              >
                <img src="/assets/organization/AIC.png" className="mx-auto" />
              </motion.div>
            </Link>
          </div>
          <div className=" absolute top-2/3 -translate-y-2/3 left-[35%] -translate-x-[35%]">
            <Link href={"/organization/tupro"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer max-xl:w-[212px] `}
              >
                <img src="/assets/organization/TUPRO.png" className="mx-auto" />
              </motion.div>
            </Link>
          </div>
          <div className=" absolute top-[40%] -translate-y-[40%] left-[60%] -translate-x-[60%]">
            <Link href={"/organization/tucmc"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer max-xl:w-[191px] `}
              >
                <img src="/assets/organization/TUCMC.png" className="mx-auto" />
              </motion.div>
            </Link>
          </div>
          <div className=" absolute top-[70%] -translate-y-[70%] left-[85%] -translate-x-[85%]">
            <Link href={"/organization/tusc"}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`text-center cursor-pointer max-xl:w-[160px] `}
              >
                <img src="/assets/organization/TUSC.png" className="mx-auto" />
              </motion.div>
            </Link>
          </div>
        </section>
        <section className=" relative overflow-hidden -mt-[1px]">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing6 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
          </div>
          <div className=" absolute left-10 top-1 text-[90px] font-bold text-[#562C73] stroke-white stroke-[9px] block ">
            ข้อมูลเพิ่มเติม
            <div className=" w-[310px] ">
              <Link href={"/admission"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={` text-left cursor-pointer text-white text-[40px] font-medium px-7 bg-[#7D5496] rounded-[30.50px]`}
                >
                  การสอบเข้า ม.4
                </motion.div>
              </Link>
            </div>
            <div className=" w-[550px] mt-7 ">
              <Link href={"/directions"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={` text-left cursor-pointer text-white text-[40px] font-medium px-7 bg-[#7D5496] rounded-[30.50px]`}
                >
                  การเดินทางมาโรงเรียนเตรียมฯ
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
