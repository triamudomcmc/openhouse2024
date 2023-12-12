import AdmissionChart from "@/vectors/admission/chart";
import { CheckCircleIcon } from "@heroicons/react/24/outline";

export default function Admission() {
  return (
    <div className=" min-h-screen bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#FFF5C8] via-[#FFC8F1] to-[#C7BEFF]  ">
      <div className=" flex items-center justify-center mt-14 ">
        <div className=" grid lg:grid-cols-2 grid-cols-1 m-5 gap-10 ">
          <div className=" text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#6C1FD8] to-[#E74FB5] row-span-3">
            กำหนดการสอบเข้า
          </div>
          <div className=" bg-gradient-to-br from-[#3E47F7] to-[#FF7BBF] relative -pt-15 pb-5  pr-32 rounded-2xl row-span-4 ">
            
              <AdmissionChart className=" pl-5 lg:w-full lg:h-full md:w-[512px]  md:h-[491px] relative" />
              
            

            
          </div>
          <div className=" row-span-2 bg-gradient-to-r from-[#888DFF]/[.50] to-[#B966FF]/[.50] rounded-2xl bg-opacity-50 relative ">
            <div className=" flex items-center justify-center h-full">
              <div>
                <div className=" flex justify-center text-[#0C027B]">
                  <div className="  font-bold text-center align-middle flex m-auto text-xl  ">
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
                <div className=" text-lg font-bold text-[#0C027B] pl-4 ">
                  <div className="flex">
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
                    <div className="  grid grid-cols-3 text-sm font-normal gap-y-2">
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
            <div className=" absolute -top-8 left-1/2 -translate-x-1/2 font-bold text-4xl bg-gradient-to-r from-[#888DFF]/[.50] to-[#B966FF]/[.50] px-6 py-4 w-[408px] text-center rounded-full z-10">
              สิ่งที่ควรรู้ในวันสอบ
            </div>
            <div className=" absolute -top-7 left-1/2 -translate-x-1/2 font-bold text-4xl text-[#0C027B] bg-white px-6 py-3 w-[400px] text-center rounded-full border-3 border-[] z-20">
              สิ่งที่ควรรู้ในวันสอบ
            </div>
          </div>
          <div className=" row-span-1">
            <div className="pl-7 text-[#100083]   bg-gradient-to-r from-[#888DFF]/[.50] to-[#B966FF]/[.50] rounded-2xl py-7 ">
              วิทย์-คณิต สอบ 5 วิชา :{" "}
              <span className=" text-[#0021A9]">
                คณิตศาสตร์ วิทยาศาสตร์ ภาษาไทย สังคมศึกษา
              </span>
              <br />
              ภาษาอังกฤษ ศิลป์คำนวณ สอบ 4 วิชา :{" "}
              <span className=" text-[#0021A9]">
                คณิตศาสตร์ ภาษาไทย สังคมศึกษา
              </span>
              <br />
              ภาษาอังกฤษ ศิลป์ภาษา สอบ 3 วิชา :{" "}
              <span className=" text-[#0021A9]">
                ภาษาไทย สังคมศึกษา ภาษาอังกฤษ
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
