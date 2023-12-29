import ShowBg from "@/vectors/shows/shows-bg";
import Timeline from "@/vectors/shows/timeline";
import Theatre from "@/vectors/shows/theatre";
import TheatreM from "@/vectors/shows/theatreM";

export default function Theater() {
  return (
    <div className=" w-screen overflow-x-hidden min-h-screen relative shows-bg  ">
      <Theatre className=" lg:hidden max-md:hidden  w-screen" />
      <TheatreM className=" md:hidden  w-screen" />
      <ShowBg className=" absolute max-lg:hidden z-0 h-full left-0 top-0" />
      <div className=" flex lg:justify-end md:justify-center lg:mr-[2vw]">
        <div className="  lg:pt-20 mb-10 relative z-[99] max-md:px-3  ">
          <div className="">
            <div className=" lg:text-4xl md:text-2xl font-bold text-white font-Inter lg:px-4 px-8 lg:py-2 py-1 bg-[#FF7FD3] w-fit rounded-full shadow-md">
              12 JAN 2024
            </div>
            <div className=" flex justify-center w-fit h-fit mt-5 gap-5 ">
              <div className=" lg:space-y-12 md:space-y-10 space-y-5 ">
                <img
                  src="/assets/shows/Florette_The_Musical.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px]  rounded-xl "
                />
                <img
                  src="/assets/shows/Florette_The_Musical.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
                />
                <img
                  src="/assets/shows/Desire_to_Love.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
                />
                <img
                  src="/assets/shows/TUSB.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
                />
                <img
                  src="/assets/shows/The_Truth_Untold.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
                />
                <img
                  src="/assets/shows/TUSF_Film.png"
                  className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
                />
              </div>
              <div className=" w-fit items-center flex col-auto">
                <Timeline className=" md:w-auto md:h-auto w-6 h-[636px] " />
              </div>
              <div className="">
                <div className=" lg:mt-[105px] md:mt-[86px] mt-[32px] ">
                  <div className=" text-white md:text-3xl text-base  font-bold">
                    Florette the musical
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs  ">
                    ชมรมภาษาอังกฤษ (English Drama)
                  </div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      9.00-10.30
                    </div>
                  </div>
                </div>
                <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                  <div className=" text-white md:text-3xl text-base  font-bold">
                    ม่วน (never fade away)
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs ">
                    ชมรมหนังสังคม ฝ่าย documentary maker
                  </div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      10.35-11.10
                    </div>
                  </div>
                </div>
                <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                  <div className=" text-white md:text-3xl text-base font-bold">
                    Desire to love
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs ">ชมรมขับร้องประสานเสียง</div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      11.15-12.00
                    </div>
                  </div>
                </div>
                <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                  <div className=" text-white md:text-3xl text-base font-bold">
                    The Sound of Hidden Gems
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs ">ชมรมดุริยางค์</div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      12.35-13.10
                    </div>
                  </div>
                </div>
                <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                  <div className=" text-white md:text-3xl text-base font-bold">
                    The truth untold the musical
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs ">
                    ชมรมนิเทศศิลป ฝ่ายละครเวที
                  </div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      13.15-14.55
                    </div>
                  </div>
                </div>
                <div className=" lg:mt-[191px] md:mt-[195px] mt-[30px] max-md:absolute">
                  <div className=" text-white md:text-3xl text-base font-bold">
                    TUSF Film Showcase 2024
                  </div>
                  <div className=" text-[#FFC8EC] md:text-base text-xs ">
                    ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์
                  </div>
                  <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                    <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                      15.00-16.00
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div></div>
          <div className=" lg:text-4xl md:text-2xl font-bold text-white font-Inter lg:px-4 px-8 lg:py-2 py-1 bg-[#FF7FD3] w-fit rounded-full shadow-md mt-10">
            13 JAN 2024
          </div>
          <div className=" flex justify-center w-fit h-fit mt-5 gap-5 ">
            <div className=" lg:space-y-12 md:space-y-10 space-y-5 ">
              <img
                src="/assets/shows/TUSF_Film.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
              <img
                src="/assets/shows/Florette_The_Musical.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
              <img
                src="/assets/shows/The_Truth_Untold.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
              <img
                src="/assets/shows/Florette_The_Musical.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
              <img
                src="/assets/shows/The_Truth_Untold.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
              <img
                src="/assets/shows/Desire_to_Love.png"
                className=" md:w-[172px] md:h-[244px] w-[72px] h-[101px] rounded-xl "
              />
            </div>
            <div className=" w-fit items-center flex col-auto">
              <Timeline className=" md:w-auto md:h-auto w-6 h-[636px] " />
            </div>
            <div className="">
              <div className="lg:mt-[105px] md:mt-[86px] mt-[32px]">
                <div className=" text-white md:text-3xl text-base font-bold">
                TUSF Film Showcase 2024
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">
                ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์
                </div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  9.00-10.00
                  </div>
                </div>
              </div>
              <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                <div className=" text-white md:text-3xl text-base font-bold">
                  ม่วน (never fade away)
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">
                  ชมรมหนังสังคม ฝ่าย documentary maker
                </div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  10.05-10.40
                  </div>
                </div>
              </div>
              <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                <div className=" text-white md:text-3xl text-base font-bold">
                The truth untold the musical
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">ชมรมนิเทศศิลป ฝ่ายละครเวที</div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  10.45-12.25
                  </div>
                </div>
              </div>
              <div className=" lg:mt-[191px] md:mt-[195px] mt-[30px]">
                <div className=" text-white md:text-3xl text-base font-bold">
                Florette the musical
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">ชมรมภาษาอังกฤษ (English Drama)</div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  13.00-14.30
                  </div>
                </div>
              </div>
              <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px]">
                <div className=" text-white md:text-3xl text-base font-bold">
                Ecstasy
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">
                ชมรมภาพยนตร์สั้นและสื่อโทรทัศน์
                </div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  14.35-15.10
                  </div>
                </div>
              </div>
              <div className=" lg:mt-[191px] md:mt-[195px] mt-[56px] max-md:absolute">
                <div className=" text-white md:text-3xl text-base font-bold">
                Desire to love
                </div>
                <div className=" text-[#FFC8EC] md:text-base text-xs ">
                ชมรมขับร้องประสานเสียง
                </div>
                <div className=" p-[2px] bg-[#FC53C3] rounded-full w-fit mt-1 ">
                  <div className=" md:px-4 px-3 py-[2px] max-md:text-xs bg-white text-[#FC53C3] rounded-full w-fit ">
                  15.15-16.00
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
