import Larn70bg from "@/vectors/shows/larn70bg";
import Larn70Head from "@/vectors/shows/larn70head";

export default function Larn70() {
  function shows(time: string, title: string) {
    return (
      <div className="flex gap-3   ">
        <div className=" md:w-36 w-20 text-center md:border-[2px] border-[1px] md:h-10 h-8 text-xl border-[#FC53C3] max-md:text-xs bg-white text-[#FC53C3] rounded-full flex items-center justify-center ">
          {time}
        </div>
        <div className=" border-white md:border-[2px] border-[0.5px] bg-white bg-opacity-20 rounded-full text-white md:w-[548px] w-[250px] text-center flex items-center justify-center md:text-2xl md:min-h-10 min-h-8 whitespace-pre-line  ">
          {title}
        </div>
      </div>
    );
  }

  return (
    <div className=" w-screen overflow-x-hidden min-h-screen relative shows-bg  ">
      <Larn70Head className=" w-screen lg:hidden md:-mt-20 " />
      <Larn70bg className=" absolute max-lg:hidden z-0 h-full left-0 top-0" />
      <div className=" flex lg:justify-end md:justify-center lg:mr-[10vw]  lg:pb-20">
        <div className="  lg:pt-20 mb-10 relative z-[99] max-md:px-3  ">
          <div className="">
            <div className=" lg:text-4xl md:text-2xl font-bold text-white font-Inter lg:px-4 px-8 lg:py-2 py-1 bg-[#FF7FD3] w-fit rounded-full shadow-md">
              12 JAN 2024
            </div>
            <div className=" space-y-6 block mt-5 ">
              {shows("8.00-9.00", "พิธีเปิด")}
              {shows("9.00-9.30", "สัมภาษณ์รองทรงเกียรติ")}
              {shows("9.40-9.55", "การแสดงของคณะคัลเลอร์การ์ด")}
              {shows(
                "10.05-10.15",
                "การแสดงของคณะผู้นำเชียร์ประจำ \nโรงเรียนเตรียมอุดมศึกษา รุ่นที่ 40"
              )}
              {shows("10.20-10.45", "สัมภาษณ์นักเรียนโควตา")}
              {shows("10.55-11.25", "การแสดงเต้น")}
              {shows(
                "11.30-12.00",
                "สัมภาษณ์ตัวแทน\nโครงการพัฒนาความสามารถพิเศษ"
              )}
              {shows("12.00-12.30", "พักกลางวัน")}
              {shows("12.30-13.00", "สัมภาษณ์ศิลป์ตะวันตก")}
              {shows("13.05-13.10", "การแสดงโซรัน")}
              <div className=" max-md: hidden">
                {shows("13.15-13.35", "การร้องเพลงประสานเสียงภาษาฝรั่งเศส")}
              </div>
              <div className=" md:hidden">
                {shows("13.15-13.35", "การร้องเพลงประสานเสียง\nภาษาฝรั่งเศส")}
              </div>
              {shows("13.40-14.10", "IDOL DESU")}
              {shows("14.15-14.30", "การแสดงแฟชั่นโชว์")}
              {shows("15.00-16.10", "คอนเสิร์ต")}
            </div>
          </div>
          <div className=" flex justify-center">
            <hr className=" border-[#FF80D4] mt-20 mb-10 w-60 flex justify-center" />
          </div>
          <div className="">
            <div className=" lg:text-4xl md:text-2xl font-bold text-white font-Inter lg:px-4 px-8 lg:py-2 py-1 bg-[#FF7FD3] w-fit rounded-full shadow-md">
              13 JAN 2024
            </div>
            <div className=" space-y-6 block mt-5 ">
              {shows("9.00-9.05", "พิธีกรพูดเปิดงานวันที่ 2")}
              {shows("9.10-9.40", "สัมภาษณ์ศิลป์คำนวณ")}
              {shows("9.45-9.55", "การแสดงเต้นเพลงจีน")}
              {shows("10.00-10.30", "การแสดงละครรำ")}
              {shows("10.35-11.05", "สัมภาษณ์ศิลป์ตะวันออก")}
              {shows("11.10-11.15", "การแสดงโซรัน")}
              {shows("11.20-11.50", "สัมภาษณ์วิทย์-คณิต")}
              {shows("11.50-12.20", "พักกลางวัน")}
              <div className=" md:hidden">
                {shows("12.20-12.50", "การแสดง folk song \n และ random dance")}
              </div>
              <div className=" max-md:hidden">{shows("12.20-12.50", "การแสดง folk song และ random dance")}</div>
              {shows("12.55-13.10", "การแสดงเต้น")}
              {shows("13.20-13.45", "หนีไฟนอลมาเป็นไอดอล")}
              {shows("14.15-16.05", "คอนเสิร์ต")}
              {shows("16.05-16.35", "พิธีปิด")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
