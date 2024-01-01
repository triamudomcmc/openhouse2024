import AdmissionChart from "@/vectors/admission/chart";
import { CheckCircleIcon } from "@heroicons/react/24/outline";
import { useEffect } from "react";
import { useRouter } from "next/router";

export default function Admission() {
  const router = useRouter();
  // useEffect(() => {router.back()}, []);

  return (
    <div className=" min-h-screen bg-gradient-to-br from-[#FFF5C8] via-[#FFC8F1] to-[#C7BEFF]  ">
      <div className=" w-full text-center md:pt-40 pt-20 lg:text-7xl md:text-5xl text-4xl font-bold flex justify-center text-white    ">
        <div className="bg-gradient-to-r from-[#FF67B6] via-[#4600A8] to-[#FF67B6] w-full py-8">
          <div className=" from-[#FF67B6] via-[#4600A8] to-[#FF67B6] w-full">
            การสอบเข้า
            <div className=" bg-[#7423D6] px-1 py-1 rounded-full my-2 w-fit mx-auto ">
              <div className=" lg:text-5xl md:text-3xl text-2xl font-semibold text-[#22197C] w-fit bg-white md:px-5 py-2 px-3 rounded-full ">
                โรงเรียนเตรียมอุดมศึกษา
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex items-center justify-center md:mt-14 mt-4 ">
        <div className=" grid md:grid-cols-2 grid-cols-1 m-5 gap-10 ">
          <div className=" lg:text-6xl md:text-5xl text-3xl max-md:text-center  font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C1FD8] to-[#E74FB5] row-span-3">
            กำหนดการสอบเข้า
            <div className=" grid grid-cols-1 h-fit">
              <div className=" p-[2px] rounded-full bg-gradient-to-r from-[#FB54C4] to-[#935AE3] lg:w-[80%] w-full md:mt-8 mt-4 ">
                <div className=" w-full rounded-full md:text-base text-sm flex bg-white text-black  ">
                  <div className=" bg-gradient-to-r from-[#FC53C3] to-[#935AE3] rounded-full text-center lg:py-4 md:py-3 py-2 md:w-1/3 w-[40%] text-white  ">
                    28 ก.พ. - 3 มี.ค. 67
                  </div>
                  <div className="px-5 lg:py-4 md:py-3 py-2 text-medium text-[#6C1FD8]">
                    เปิดรับสมัคร
                  </div>
                </div>
              </div>
              <div className=" p-[2px] rounded-full bg-gradient-to-r from-[#FB54C4] to-[#935AE3] lg:w-[80%] w-full md:mt-8 mt-4 ">
                <div className=" w-full rounded-full md:text-base text-sm flex bg-white text-black  ">
                  <div className=" bg-gradient-to-r from-[#FC53C3] to-[#935AE3] rounded-full text-center lg:py-4 md:py-3 py-2 md:w-1/3 w-[40%] text-white ">
                    9 มี.ค. 67
                  </div>
                  <div className=" px-5 lg:py-4 md:py-3 py-2 text-medium text-[#6C1FD8]">
                    วันสอบ
                  </div>
                </div>
              </div>
              <div className=" p-[2px] rounded-full bg-gradient-to-r from-[#FB54C4] to-[#935AE3] lg:w-[80%] w-full md:mt-8 mt-4 ">
                <div className=" w-full rounded-full md:text-base text-sm flex bg-white text-black  ">
                  <div className=" bg-gradient-to-r from-[#FC53C3] to-[#935AE3] rounded-full text-center lg:py-4 md:py-3 py-2 md:w-1/3 w-[40%] text-white ">
                    ภายใน 20 มี.ค. 67
                  </div>
                  <div className=" px-5 lg:py-4 md:py-3 py-2 text-medium text-[#6C1FD8]">
                    วันประกาศผล
                  </div>
                </div>
              </div>
              <div className=" p-[2px] rounded-full bg-gradient-to-r from-[#FB54C4] to-[#935AE3] lg:w-[80%] w-full md:mt-8 mt-4 ">
                <div className=" w-full rounded-full md:text-base text-sm flex bg-white text-black  ">
                  <div className=" bg-gradient-to-r from-[#FC53C3] to-[#935AE3] rounded-full text-center lg:py-4 md:py-3 py-2 md:w-1/3 w-[40%] text-white ">
                    ภายใน 20 มี.ค. 67
                  </div>
                  <div className=" px-5 lg:py-4 md:py-3 py-2 text-medium text-[#6C1FD8]">
                    รายงานตัว
                  </div>
                </div>
              </div>
              <div className=" p-[2px] rounded-full bg-gradient-to-r from-[#FB54C4] to-[#935AE3] lg:w-[80%] w-full md:mt-8 mt-4 ">
                <div className=" w-full rounded-full md:text-base text-sm flex bg-white text-black  ">
                  <div className=" bg-gradient-to-r from-[#FC53C3] to-[#935AE3] rounded-full text-center lg:py-4 md:py-3 py-2 md:w-1/3 w-[40%] text-white ">
                    ภายใน 20 มี.ค. 67
                  </div>
                  <div className=" px-5 lg:py-4 md:py-3 py-2 text-medium text-[#6C1FD8]">
                    วันมอบตัว
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className=" bg-gradient-to-br from-[#3E47F7] to-[#FF7BBF] relative  rounded-2xl row-span-4 p-2 ">
            <AdmissionChart className=" pl-5 w-full h-full relative" />
          </div>
          <div className=" row-span-2 bg-gradient-to-r from-[#888DFF]/[.50] to-[#B966FF]/[.50] rounded-2xl py-2 bg-opacity-50 relative ">
            <div className=" flex items-center justify-center h-full">
              <div>
                <div className=" flex justify-center text-[#0C027B]">
                  <div className="  font-bold text-center align-middle flex m-auto md:text-xl text-base md:mt-14 mt-6  ">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                      />
                    </svg>
                    สถานที่สอบ - อิมแพ็ค เมืองทองธานี จ.นนทบุรี
                  </div>
                </div>
                <div className=" md:text-lg text-sm font-bold text-[#0C027B] pl-4  ">
                  <div className="flex items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                      />
                    </svg>
                    สิ่งที่สามารถนำเข้าห้องสอบได้
                  </div>
                  <div className="ml-8 ">
                    <div className="  grid grid-cols-3 md:text-sm text-xs items-center font-normal gap-y-2">
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        บัตรประจำตัวผู้สอบ
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        ปากกาสีน้ำเงิน
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        กบเหลาดินสอ
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        บัตรประจำตัวประชาชน
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        ยางลบดินสอ
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        หน้ากากอนามัย
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        ดินสอ 2B
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        นาฬิกาชนิดเข็ม
                      </div>
                      <div className=" flex align-middle">
                        <CheckCircleIcon width={20} className=" text-white" />
                        เสื้อกันหนาว
                      </div>
                    </div>
                    <div className="text-xs font-normal w-[85%] mt-3">
                      นอกเหนือจากที่กล่าวไปข้างต้น ไม่สามารถนำเข้าห้องสอบได้
                      เช่น เงิน อาหาร น้ำดื่ม ช้อน ลิขวิดเปเปอร์ ถุงพลาสติก
                      วงเวียน ไม้บรรทัด ปากกาหลากสียกเว้นสีน้ำเงิน หมวก แว่นดำ
                      หน้ากากผ้าลวดลาย โทรศัพท์ ผ้าห่ม ผ้าพันคอ
                      นาฬิกาปลุกหรือนาฬิกาตั้งโต๊ะ ทิชชู่
                      กระดาษอย่างอื่นนอกเหนือจากบัตรประจำตัวสอบ และอื่น ๆ
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute md:-top-7 -top-5 left-1/2 -translate-x-1/2 p-1 bg-gradient-to-r from-[#C6C4FF] to-[#DCB3FF] rounded-full ">
              <div className="  font-bold lg:text-4xl md:text-3xl text-lg text-[#0C027B] bg-white lg:px-6 lg:py-3 md:px-4 md:py-2 px-2 py-1 md:w-[400px] text-center rounded-full border-3 border-[] w-[250px] z-20">
                สิ่งที่ควรรู้ในวันสอบ
              </div>
            </div>
          </div>
          <div className=" row-span-1">
            <div className="px-7 text-[#100083]   bg-gradient-to-r from-[#888DFF]/[.50] to-[#B966FF]/[.50] rounded-2xl py-7 max-md:text-sm ">
              วิทย์-คณิต สอบ 5 วิชา :
              <span className=" text-[#0021A9]">
                {" "}
                คณิตศาสตร์ วิทยาศาสตร์ ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </span>
              <br />
              ศิลป์คำนวณ สอบ 4 วิชา :
              <span className=" text-[#0021A9]">
                {" "}
                คณิตศาสตร์ ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </span>
              <br />
              ศิลป์ภาษา สอบ 3 วิชา :
              <span className=" text-[#0021A9]">
                {" "}
                ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
