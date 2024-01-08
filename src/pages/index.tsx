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
import Landing6 from "@/vectors/landing/landing6";
import Landing1M from "@/vectors/landing/landing1M";
import Landing2M from "@/vectors/landing/landing2M";
import Landing3M from "@/vectors/landing/landing3M";
import GiftedThaiM from "@/vectors/gifted/giftedThaiM";
import GiftedEngM from "@/vectors/gifted/giftedEngM";
import GiftedMathM from "@/vectors/gifted/giftedMathM";
import GiftedSciM from "@/vectors/gifted/giftedSciM";
import Landing4M from "@/vectors/landing/landing4M";
import Landing4MountainM from "@/vectors/landing/landing4MountainM";
import Landing5M from "@/vectors/landing/landing5M";
import Landing6M from "@/vectors/landing/landing6M";
import { useSession } from "next-auth/react";

export default function Home() {
  const router = useRouter();
  const { data: session, status } = useSession();
  const targetDate = new Date(Date.UTC(2024, 0, 12, 1, 0, 0));
  useEffect(() => {
    // User email is available, make the API request
    //router.push("/auth")
  }, []);

  // first full launch yay
  return (
    <>
      <div className="w-screen overflow-hidden">
        <main className="relative flex items-center justify-center w-screen overflow-hidden">
          <div className=" relative w-full -z-10 ">
            <div className=" relative w-full -z-10 max-md:hidden  ">
              <Landing1 className="object-cover h-full min-h-screen overflow-x-hidden" />
            </div>
            <div className="relative  w-full -z-10 md:hidden  ">
              <Landing1M className="object-cover h-full min-h-screen overflow-x-hidden" />
            </div>
          </div>
          <div className=" absolute md:top-1/2 top-2/3  left-1/2 -translate-x-1/2">
            {!session && (
              <Link href="/auth" className=" flex justify-center md:hidden">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="bg-gradient-to-br from-[#581AB0] to-[#11185E]  font-semibold text-white text-xl rounded-full px-5 py-1 "
                >
                  ลงทะเบียน
                </motion.button>
              </Link>
            )}
            <Countdown targetDate={targetDate} />
          </div>
          <div className=" absolute top-[15%] -translate-y-[15%] left-1/2 -translate-x-1/2 text-center">
            <div className=" font-Pinyon_Script text-white md:text-8xl text-6xl ">
              Triam Udom
            </div>
            <div className=" font-Cinzel_Decorative text-white lg:text-[90px] md:text-[70px] sm:text-[32px] flex justify-center items-center">
              OPEN
              <div className="flex justify-center items-center">
                <Landing1Star className=" md:w-auto sm:w-[30px]" />
              </div>
              HOUSE
              <Landing1Star className=" md:w-auto sm:w-[30px]" />
              2024
            </div>
            <div className=" md:hidden text-center text-white text-base font-semibold  flex justify-center">
              <div>
                <div className="px-4 py-1 bg-white bg-opacity-25 rounded-[100px]">
                  12-13 JANUARY 2024
                </div>
              </div>
            </div>
          </div>
        </main>
        <section className=" relative">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing2 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
          </div>
          <div className="relative  w-full -z-10 md:hidden  ">
            <Landing2M className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className="max-md:hidden">
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2  z-50 mt-14   ">
              <Programme
                className="  xl:w-auto lg:w-[210px] md:w-[168px] "
                name={"arts-korean"}
                thainame={"ภาษา-ภาษาเกาหลี"}
              />
              <Programme
                className=" mr-12 mt-14  xl:w-auto lg:w-[193px] md:w-[154px] "
                name={"sci-math"}
                thainame={"วิทย์-คณิต"}
              />
            </div>
            <div className=" absolute top-2/3 -translate-y-2/3 left-1/4 -translate-x-1/4  z-50 mt-14  ">
              <Programme
                className=" xl:w-auto lg:w-[231px] md:w-[185px] "
                name={"arts-german"}
                thainame={"ภาษา-ภาษาเยอรมัน"}
              />
              <Programme
                className=" ml-[60px] mt-14  xl:w-auto lg:w-[203px] md:w-[162px] "
                name={"arts-japanese"}
                thainame={"ภาษา-ภาษาญี่ปุ่น"}
              />
            </div>
            <div className=" absolute top-2/3 -translate-y-2/3 left-3/4 -translate-x-3/4  z-50 mt-14  ">
              <Programme
                className=" xl:w-auto lg:w-[178px] md:w-[142px] "
                name={"arts-chinese"}
                thainame={"ภาษา-ภาษาจีน"}
              />
              <Programme
                className=" mr-[60px] mt-14  xl:w-auto lg:w-[195px] md:w-[156px] "
                name={"arts-espanol"}
                thainame={"ภาษา-ภาษาสเปน"}
              />
            </div>
            <div className=" absolute top-[60%] -translate-y-2/3 left-[7%] -translate-x-[7%]  z-50 mt-14  ">
              <Programme
                className="  xl:w-auto lg:w-[227px] md:w-[181px] "
                name={"arts-french"}
                thainame={"ภาษา-ภาษาฝรั่งเศส"}
              />
            </div>
            <div className=" absolute top-[60%] -translate-y-2/3 left-[90%] -translate-x-[90%]  z-50 mt-14  ">
              <Programme
                className="  lg:w-[192px] xl:w-[300px] md:w-[153px]  "
                name={"arts-math"}
                thainame={"ภาษา-คณิต"}
              />
            </div>
          </div>
          <div className=" absolute lg:top-20 top-5 md:right-16 max-md:left-5 md:text-right text-left ">
            <div className=" md:text-[80px] text-[40px] font-bold text-white ">
              สายการเรียน
            </div>
            <div className=" opacity-80 text-white md:text-[25px] text-[15px]">
              คลิกที่อัญมณีเพื่ออ่านข้อมูล
              <br />
              สายการเรียนที่สนใจ
            </div>
          </div>
          <div className="md:hidden">
            <div className=" absolute top-20  left-[85%] -translate-x-[85%]  z-50 mt-14   ">
              <Programme
                className="  xl:w-auto lg:w-[193px] md:w-[154px] sm:w-[123px] "
                name={"sci-math"}
                thainame={"วิทย์-คณิต"}
              />

              <Programme
                className="  xl:w-auto lg:w-[227px] md:w-[181px] sm:w-[145px] mt-10 "
                name={"arts-french"}
                thainame={"ภาษา-ภาษาฝรั่งเศส"}
              />

              <Programme
                className="   xl:w-auto lg:w-[195px] md:w-[156px] sm-[125px] mt-10"
                name={"arts-espanol"}
                thainame={"ภาษา-ภาษาสเปน"}
              />

              <Programme
                className="  xl:w-auto lg:w-[210px] md:w-[168px] sm:w-[134px] mt-10"
                name={"arts-korean"}
                thainame={"ภาษา-ภาษาเกาหลี"}
              />
            </div>
            <div className=" absolute top-40  left-[15%] -translate-x-[15%]  z-50 mt-10    ">
              <Programme
                className="  lg:w-[192px] xl:w-[300px] md:w-[153px] sm:w-[148px]  "
                name={"arts-math"}
                thainame={"ภาษา-คณิต"}
              />
              <Programme
                className=" xl:w-auto lg:w-[231px] md:w-[185px] sm:w-[148px] mt-10 "
                name={"arts-german"}
                thainame={"ภาษา-ภาษาเยอรมัน"}
              />
              <Programme
                className="   xl:w-auto lg:w-[203px] md:w-[162px] sm:w-[130px] mt-10"
                name={"arts-japanese"}
                thainame={"ภาษา-ภาษาญี่ปุ่น"}
              />
              <Programme
                className=" xl:w-auto lg:w-[178px] md:w-[142px] sm:w-[149px] mt-10 "
                name={"arts-chinese"}
                thainame={"ภาษา-ภาษาจีน"}
              />
            </div>
          </div>
        </section>
        <section className=" relative ">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing3 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>

            <div className=" absolute bottom-[1px] left-[10%] -translate-x-[10%] h-3/4">
              <Landing3Lamp />
            </div>
            <div className=" absolute bottom-[1px] right-[10%] translate-x-[10%] h-3/4">
              <Landing3Lamp />
            </div>
          </div>
          <div className="relative  w-full -z-10 md:hidden -mt-1  ">
            <Landing3M className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 top-10 bg-gradient-to-r from-[#FC53C3]/[.0] via-[#B868D7] to-[#FC53C3]/[.0] from- text-center text-white md:text-[80px] sm:text-4xl font-bold px-20 md:w-[1000px] md:h-24 h-14 flex align-middle items-center justify-center w-[450px]">
            Gifted Program
          </div>
          <div className=" max-md:hidden">
            <div className=" absolute top-3/4 -translate-y-3/4 left-1/2 -translate-x-1/2 max-lg:-ml-5 z-50 ">
              <Link href={"/programmes/gifted-science"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedSci className="xl:w-auto lg:w-[339px] md:w-[271px] " />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-1/2 -translate-y-1/2 left-1/3 -translate-x-1/3 -ml-[50px] z-30 ">
              <Link href={"/programmes/gifted-math"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedMath className="xl:w-auto lg:w-[252px] md:w-[201px]" />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-1/3 -translate-y-1/3 left-1/2 -translate-x-1/2 lg:ml-[50px] z-40 ">
              <Link href={"/programmes/gifted-thai"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedThai className="xl:w-auto lg:w-[410px] md:w-[328px] " />
                </motion.button>
              </Link>
            </div>
            <div className=" absolute top-[60%] -translate-y-[60%] left-3/4 -translate-x-3/4  lg:-ml-[30px] md:-ml-[40px] z-50 ">
              <Link href={"/programmes/gifted-english"}>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <GiftedEng className="xl:w-auto lg:w-[170px] md:w-[136px] " />
                </motion.button>
              </Link>
            </div>
          </div>
          <div className=" md:hidden">
            <div className=" absolute top-[50%] -translate-y-[50%] mt-14 left-1/2 -translate-x-1/2 block w-[350px] mx-auto  z-50 ">
              <div className=" w-full flex justify-center">
                <Link href={"/programmes/gifted-thai"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GiftedThaiM className=" " />
                  </motion.button>
                </Link>
              </div>
              <div className=" w-full flex justify-center">
                <Link href={"/programmes/gifted-english"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GiftedEngM className=" flex items-center " />
                  </motion.button>
                </Link>
              </div>
              <div className=" w-full flex justify-center">
                <Link href={"/programmes/gifted-math"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GiftedMathM className=" " />
                  </motion.button>
                </Link>
              </div>
              <div className=" w-full flex justify-center">
                <Link href={"/programmes/gifted-science"}>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <GiftedSciM className=" " />
                  </motion.button>
                </Link>
              </div>
            </div>
          </div>
        </section>
        <section className=" relative overflow-hidden -mt-[1px] ">
          <div className=" relative w-full -z-[9] max-md:hidden">
            <div className=" w-full -z-10 -mt-2">
              <Landing4 className="object-cover h-full min-h-screen overflow-x-hidden -z-10 " />
            </div>
            <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
              <Landing4Mountain className=" max-xl:w-[1162px] max-xl:-mb-[100px]" />
            </div>
          </div>
          <div className="relative  w-full -z-10 md:hidden  ">
            <Landing4M className="object-cover h-full min-h-screen overflow-x-hidden" />
            <div className=" absolute left-1/2 -translate-x-1/2 bottom-0 z-10">
              <Landing4MountainM className="w-screen" />
            </div>
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 bottom-5 z-20 text-white md:text-4xl text-sm text-center">
            คลิกชมรม <br /> เพื่ออ่านข้อมูลชมรมที่สนใจ
          </div>

          <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 md:-ml-20 sm:-ml-10 -mt-16 z-0 ">
            <Link href={"/clubs"}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className=" relative">
                  <Landing4Sun className="xl:w-auto md:w-[410px] sm:w-[275px] " />
                  <div className=" absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-bold md:text-8xl sm:text-5xl text-transparent bg-clip-text bg-gradient-to-b from-[#2F0A64] to-[#FC53C3] ">
                    ชมรม
                  </div>
                  <div className=" absolute -left-1/2 ml-20 -top-1/2 mt-40 max-md:hidden  ">
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
          <div className="relative  w-full -z-10 md:hidden  ">
            <Landing5M className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className=" absolute md:top-20 top-10 left-1/2 -translate-x-1/2 text-white font-bold md:text-[90px] text-4xl drop-shadow-lg w-full text-center ">
            หน่วยงานนักเรียน
          </div>
          <div className=" max-md:hidden">
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
                  <img
                    src="/assets/organization/TUPRO.png"
                    className="mx-auto"
                  />
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
                  <img
                    src="/assets/organization/TUCMC.png"
                    className="mx-auto"
                  />
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
                  <img
                    src="/assets/organization/TUSC.png"
                    className="mx-auto"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
          <div className=" md:hidden">
            <div className=" absolute top-1/3 -translate-y-1/3 left-[20%] -translate-x-[20%] mt-10 ">
              <Link href={"/organization/aic"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center cursor-pointer w-[129px] `}
                >
                  <img
                    src="/assets/organization/AICM.png"
                    className="mx-auto"
                  />
                </motion.div>
              </Link>
              <Link href={"/organization/tucmc"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center cursor-pointer w-[187px] -ml-12 mt-14 `}
                >
                  <img
                    src="/assets/organization/TUCMCM.png"
                    className="mx-auto"
                  />
                </motion.div>
              </Link>
            </div>
            <div className=" absolute top-2/3 -translate-y-2/3 left-[85%] -translate-x-[85%] mt-10 ">
              <Link href={"/organization/tupro"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center cursor-pointer w-[169px] `}
                >
                  <img
                    src="/assets/organization/TUPROM.png"
                    className="mx-auto"
                  />
                </motion.div>
              </Link>
              <Link href={"/organization/tusc"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`text-center cursor-pointer w-[156px] mt-14 `}
                >
                  <img
                    src="/assets/organization/TUSCM.png"
                    className="mx-auto"
                  />
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
        <section className=" relative overflow-hidden -mt-[1px]">
          <div className=" relative w-full -z-10 max-md:hidden">
            <div className=" w-full -z-10">
              <Landing6 className="object-cover h-full min-h-screen overflow-x-hidden -z-10" />
            </div>
          </div>
          <div className="relative  w-full -z-10 md:hidden  ">
            <Landing6M className="object-cover h-full min-h-screen overflow-x-hidden" />
          </div>
          <div className=" absolute md:left-10 left-1/2 max-md:-translate-x-1/2 top-1 md:text-[90px] sm:text-[40px] max-md:text-center font-bold text-[#2C1865] stroke-white stroke-[9px] block ">
            ข้อมูลเพิ่มเติม
            <div className=" flex max-md:justify-center max-md:mt-7  ">
              <Link href={"/admission"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={` md:text-left text-center cursor-pointer md:w-[310px] w-[200px] text-white md:text-[40px] sm:text-[20px] font-medium px-7 py-1 bg-[#7D5496] md:rounded-[30.50px] rounded-2xl`}
                >
                  การสอบเข้า ม.4
                </motion.div>
              </Link>
            </div>
            <div className="  mt-7 flex max-md:justify-center ">
              <Link href={"/directions"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={` md:text-left text-center cursor-pointer text-white md:text-[40px] sm:text-[20px] md:w-[550px] w-[330px] font-medium px-7 py-1 bg-[#7D5496] md:rounded-[30.50px] rounded-2xl`}
                >
                  การเดินทางมาโรงเรียนเตรียมฯ
                </motion.div>
              </Link>
            </div>
            <div className="  mt-7 flex max-md:justify-center ">
              <Link href={"/map"}>
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={` md:text-left text-center cursor-pointer text-white md:text-[40px] sm:text-[20px]  font-medium px-7 py-1 bg-[#7D5496] md:rounded-[30.50px] rounded-2xl`}
                >
                  แผนผังงาน
                </motion.div>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
