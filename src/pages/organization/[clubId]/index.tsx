import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { motion } from "framer-motion";
import fs from "fs";
import { GetServerSideProps, GetStaticProps, GetStaticPaths } from "next";
import BackArrow from "@/vectors/backarrow";
import UserIcon from "@/vectors/club/user";
import ClubWidget from "@/vectors/club/clubwidget";
import ClubStar from "@/vectors/club/star";
import ReviewWidget from "@/vectors/club/reviewWidget";
import ClubTop from "@/vectors/club/ClubTop";
import ClubBottom from "@/vectors/club/clubBottom";
import ClubCrystal from "@/vectors/club/clubCrystal";
import ClubLamp from "@/vectors/club/clubLamp";
import ClubCrystal2 from "@/vectors/club/clubCrystal2";
import ClubFlower from "@/vectors/club/clubFlower";
import Image from "next/image";

export const getStaticPaths: GetStaticPaths = async ({}) => {
  const raw = JSON.parse(
    fs.readFileSync(`./src/_data/_maps/organizations.json`, {
      encoding: "utf-8",
    })
  );
  let tmp = [];
  for (let key of Object.keys(raw)) {
    tmp.push({ params: { clubId: key } });
  }

  return {
    paths: tmp,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const clubId = params?.clubId as string;
  const raw = JSON.parse(
    fs.readFileSync(`./src/_data/_maps/organizations.json`, {
      encoding: "utf-8",
    })
  );
  let finalData: {
    Info?: {
      nameTH: string;
      nameEN: string;
      members: string;
    };
    Contacts?: {
      ig: string;
      facebook: string;
      others: string;
    };
    ClubArticle?: string;
    Advantage?: string;
    Work?: string;
    ClubArticleDes?: string;
    AdvantageDes?: string;
    WorkDes?: string;
    Review1?: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    Review2?: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    Review3?: {
      name: string;
      gen: string;
      contact: string;
      review: string;
    };
    reviewImageUrl?: {
      first: string;
      second: string;
      third: string;
    };
    imageUrl?: {
      first: string;
      second: string;
      third: string;
    };
  } = {};

  finalData["Info"] =
    {
      nameTH: raw[clubId].name,
      nameEN: raw[clubId].engname,
      members: raw[clubId].members,
    } ?? {};
  finalData["Contacts"] =
    {
      ig: raw[clubId].ig,
      facebook: raw[clubId].facebook,
      others: raw[clubId].others,
    } ?? {};
  finalData["ClubArticle"] = raw[clubId].organizationdo ?? "";
  finalData["Advantage"] = raw[clubId].position ?? "";
  finalData["Work"] = raw[clubId].working ?? "";
  finalData["Review1"] =
    {
      name: raw[clubId].review_1.name,
      gen: raw[clubId].review_1.gen,
      contact: raw[clubId].review_1.contact,
      review: raw[clubId].review_1.review,
    } ?? {};
  finalData["Review2"] =
    {
      name: raw[clubId].review_2.name,
      gen: raw[clubId].review_2.gen,
      contact: raw[clubId].review_2.contact,
      review: raw[clubId].review_2.review,
    } ?? {};
  finalData["Review3"] =
    {
      name: raw[clubId].review_3.name,
      gen: raw[clubId].review_3.gen,
      contact: raw[clubId].review_3.contact,
      review: raw[clubId].review_3.review,
    } ?? {};
  finalData["reviewImageUrl"] = {
    first:
      raw[clubId].imgprofile1 ??
      `/assets/images/organizations/${clubId}-first-default.jpg`,
    second:
      raw[clubId].imgprofile2 ??
      `/assets/images/organizations/${clubId}-second-default.jpg`,
    third:
      raw[clubId].imgprofile3 ??
      `/assets/images/organizations/${clubId}-third-default.jpg`,
  };

  finalData["imageUrl"] = {
    first:
      raw[clubId].image1 ??
      `/assets/images/organizations/${clubId}-first-default.jpg`,
    second:
      raw[clubId].image2 ??
      `/assets/images/organizations/${clubId}-second-default.jpg`,
    third:
      raw[clubId].image3 ??
      `/assets/images/organizations/${clubId}-third-default.jpg`,
  };

  if (Object.keys(finalData).length != 0) return { props: { finalData } };
  else return { props: { nonexisted: true } };
};

const LandingEdit = ({
  clubId,
  finalData,
}: {
  clubId: string;
  finalData: any;
}) => {
  const router = useRouter();
  // const [load, setLoad] = useState<boolean>(true)
  const [info, setInfo] = useState({
    nameTH: "",
    nameEN: "",
    members: "",
  });
  const [contacts, setContacts] = useState({
    ig: "",
    facebook: "",
    others: "",
  });
  const [clubArticle, setClubArticle] = useState("");
  const [advantage, setAdvantage] = useState("");
  const [work, setWork] = useState("");
  const [review1, setReview1] = useState({
    name: "",
    gen: "",
    contact: "",
    review: "",
  });
  const [review2, setReview2] = useState({
    name: "",
    gen: "",
    contact: "",
    review: "",
  });
  const [review3, setReview3] = useState({
    name: "",
    gen: "",
    contact: "",
    review: "",
  });

  const [imagesLink, setImagesLink] = useState({
    first: "",
    second: "",
    third: "",
  });
  const [reviewImagesLink, setReviewImagesLink] = useState({
    first: "",
    second: "",
    third: "",
  });

  useEffect(() => {
    setReviewImagesLink(finalData?.reviewImageUrl ?? {});
    setImagesLink(finalData?.imageUrl ?? {});
    setInfo(finalData.Info != null ? finalData.Info : "");
    setContacts(finalData?.Contacts != null ? finalData.Contacts : {});
    setClubArticle(finalData?.ClubArticle);
    setAdvantage(finalData?.Advantage);
    setWork(finalData?.Work);
    setReview1(finalData?.Review1);
    setReview2(finalData?.Review2);
    setReview3(finalData?.Review3);
  }, []);

  interface Review {
    Image: string;
    Review: string;
    Name: string;
    Social: string;
    Year: string;
  }

  if (info)
    return (
      <>
        <div className="">
          <div className=" relative w-full top-0 left-0">
            <div className=" flex justify-center w-full   bg-gradient-to-b from-[#FFF9E9] to-[#C0B0FF] from-70% to-100%">
              <div className=" lg:w-1/2 md:w-2/3 z-30 lg:mt-[15%] md:mt-[20%] sm:mt-[25%] pb-[700px]">
                <div className=" flex justify-center align-middle">
                  <Link className="flex" href="/">
                    <BackArrow />
                    <p className="pl-2 text-2xl align-middle text-[#55247B] font-Thai my-auto">
                      ย้อนกลับ
                    </p>
                  </Link>
                </div>
                <div className=" w-full  ">
                  <p className="  p-6   font-extrabold text-transparent md:text-5xl sm:text-3xl bg-clip-text break-words bg-gradient-to-b from-[#81109D] to-[#D62C9F]  from-40% to-100% py-5 font-Thai text-center z-10">
                    {info.nameTH}
                  </p>
                </div>
                <div className=" w-full flex  justify-center gap-4 items-center md:mt-5  ">
                  <div className="  flex justify-end min-w-[150px] md:min-w-[200px]  ">
                    <div className=" hidden md:flex">
                      <UserIcon />
                    </div>
                    <div className="text-4xl block text-center text-transparent bg-clip-text bg-gradient-to-b from-[#632790] to-[#D738A4] font-Thai font-semibold">
                      สมาชิก <br />
                      <p className="text-3xl mt-2 font-semibold text-center">
                        {info.members}
                      </p>
                    </div>
                  </div>
                  <div>
                    <svg
                      className=" w-[6px] "
                      viewBox="0 0 4 86"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M2 2L2 84"
                        stroke="url(#paint0_linear_250_1393)"
                        stroke-width="4"
                        stroke-linecap="round"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_250_1393"
                          x1="-1.00003"
                          y1="-21.1529"
                          x2="-1.00003"
                          y2="84"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#D738A4" />
                          <stop offset="1" stop-color="#7533A8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>

                  <div className=" md:w-[200px] w-[150px]">
                    <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai ">
                      {" "}
                      {contacts.ig != "" && <div>IG:{contacts.ig}</div>}
                    </p>
                    <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai ">
                      {contacts.facebook != "" && (
                        <div>FB:{contacts.facebook}</div>
                      )}
                    </p>
                    
                      {contacts.others && contacts.others.trim() != "" && (
                        <p className=" flex text-[#8133A7] md:w-[200px] w-[150px] text-xl font-Thai break-words md:break-normal ">อื่นๆ: {contacts.others}</p>
                      )}
                    
                  </div>
                </div>
                <div className=" w-full flex justify-center">
                  <div className=" md:mt-3 md:w-full w-[90%]  ">
                    <ClubWidget />
                  </div>
                </div>
                {
                  //section1
                }
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl py-5 block w-full  lg:hidden ">
                  องค์กรนี้ทำอะไร ?
                </p>
                <div className=" flex justify-center gap-3 lg:mt-10 text-right">
                  <div className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai  min-w-52 text-5xl py-5 hidden lg:block text-right ">
                    องค์กรนี้
                    <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai  min-w-52 text-3xl  hidden lg:block text-right ">
                      ทำอะไร
                      <ClubStar />
                    </p>
                  </div>

                  <div className=" w-full relative  ">
                    <div className=" flex justify-center">
                      <svg
                        className=" aspect-[9/5] w-[90%] md:w-full "
                        viewBox="0 0 509 307"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="509" height="307" rx="23" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className=" absolute  w-full h-full">
                      <p className="  text-center text-[#7533A8] ">
                        
                      </p>
                    </div>
                    <div className=" absolute w-full top-0 flex justify-center z-10">
                      <div className="flex aspect-[9/5] w-[90%] md:w-full z-10 relative">
                        <Image
                          className=" object-cover md:rounded-3xl sm:rounded-2xl "
                          layout="fill"
                          alt=""
                          src={imagesLink["first"]}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className=" flex justify-center mt-10">
                  <div className=" w-full block">
                    <div className=" text-[#582A88]  text-lg break-words  font-Thai  md:w-full md:p-0 sm:w-full sm:p-5 min-h-[200px]   bg-transparent align-top resize-none whitespace-pre-line ">
                      <div
                        dangerouslySetInnerHTML={{
                          __html: clubArticle || "",
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
                {
                  //section2
                }
                <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl block w-full py-5  lg:hidden ">
                  ตำแหน่ง/หน้าที่
                </p>
                <div className=" flex justify-center gap-3 lg:mt-10">
                  <div className=" w-full relative  ">
                    <div className=" flex justify-center">
                      <svg
                        className=" aspect-[9/5] w-[90%] md:w-full "
                        viewBox="0 0 509 307"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <rect width="509" height="307" rx="23" fill="#D9D9D9" />
                      </svg>
                    </div>
                    <div className=" absolute w-full top-0 flex justify-center z-10">
                      <div className="flex aspect-[9/5] w-[90%] md:w-full z-10 relative">
                        <Image
                          className=" object-cover md:rounded-3xl sm:rounded-2xl "
                          layout="fill"
                          alt=""
                          src={imagesLink["second"]}
                        />
                      </div>
                    </div>
                  </div>
                  <div className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-5xl py-5 hidden lg:block ">
                    ตำแหน่ง
                    <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-left min-w-52 text-3xl  hidden lg:block ">
                      /หน้าที่
                      <ClubStar />
                    </p>
                  </div>
                </div>
                <div className=" flex justify-center mt-10">
                  <div className=" w-full  justify-center block">
                    <p className=" text-[#582A88]  text-lg break-words font-Thai  md:w-full md:p-0 sm:w-full sm:p-5  min-h-[200px]  bg-transparent align-top resize-none whitespace-pre-line ">
                      <div
                        dangerouslySetInnerHTML={{ __html: advantage || "" }}
                      ></div>
                    </p>
                  </div>
                </div>
                {
                  //section3
                }
                {work != "" && (
                  <div>
                    <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-center  text-2xl block w-full py-5  lg:hidden ">
                      ผลงานขององค์กร
                    </p>
                    <div className=" flex justify-center gap-3 lg:mt-10">
                      <p className="  font-semibold text-transparent bg-clip-text bg-gradient-to-b from-[#7533A8] to-[#D62C9F] font-Thai text-right min-w-52 text-4xl py-5 hidden lg:block ">
                        ผลงาน
                        <br />
                        ขององค์กร <ClubStar />
                      </p>

                      <div className=" w-full relative  ">
                        <div className=" flex justify-center">
                          <svg
                            className=" aspect-[9/5] w-[90%] md:w-full "
                            viewBox="0 0 509 307"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="509"
                              height="307"
                              rx="23"
                              fill="#D9D9D9"
                            />
                          </svg>
                        </div>
                        <div className=" absolute  w-full h-full">
                          <p className="  text-center text-[#7533A8] ">
                            
                          </p>
                        </div>
                        <div className=" absolute w-full top-0 flex justify-center z-10">
                          <div className="flex aspect-[9/5] w-[90%] md:w-full z-10 relative">
                            <Image
                              className=" object-cover md:rounded-3xl sm:rounded-2xl "
                              layout="fill"
                              alt=""
                              src={imagesLink["third"]}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" flex justify-center mt-10">
                      <div className=" w-full  justify-centerblock">
                        <p className=" text-[#582A88]  text-lg break-words font-Thai  md:w-full md:p-0 sm:w-full sm:p-5   min-h-[200px]  bg-transparent align-top resize-none whitespace-pre-line ">
                          <div
                            dangerouslySetInnerHTML={{ __html: work || "" }}
                          ></div>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
                <div>
                  {
                    //review1
                  }
                  {review1.review != "" && (
                    <div>
                      <div className=" w-full flex justify-center">
                        <div className=" mt-10 md:w-full w-[90%]  ">
                          <ReviewWidget />
                        </div>
                      </div>
                      <div className=" md:w-full sm:w-[90%]  mt-10 bg-gradient-to-b from-[#112881]/[.90] to-[#8E297A]/[.50] mx-auto   flex p-4 rounded-3xl min-h-30 gap-5">
                        <div className=" relative z-10  min-w-[30%] w-[30%] md:min-w-[25%] md:w-[25%] lg:min-w-[20%] lg:w-[20%] ">
                          <svg
                            className="block w-full "
                            viewBox="0 0 153 153"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="152.941"
                              height="152.941"
                              rx="30"
                              fill="#D9D9D9"
                            />
                          </svg>
                          <div className="absolute top-0 left-0 z-40 aspect-square flex w-full">
                            <Image
                              alt=""
                              className="  object-cover   rounded-3xl sm:rounded-xl "
                              layout="fill"
                              src={reviewImagesLink["first"]}
                            />
                          </div>
                          <div className=" block md:mt-1  z-50 relative">
                            <p className=" text-white md:text-2xl sm:text-md min-h-[28px]  break-words font-semibold  bg-transparent font-Thai">
                              {review1.name}
                            </p>

                            <p className=" block text-white md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                              {" "}
                              เตรียมอุดม {review1.gen}
                            </p>
                            <div className=" flex">
                              <p className=" break-words items-center  text-white min-h-[28px] sm:text-sm md:text-base bg-transparent font-Thai ">
                                {review1.contact}
                              </p>
                            </div>
                          </div>
                        </div>
                        <div className="w-[8px] min-w-[8px]">
                          <svg
                            width="100%"
                            viewBox="0 0 10 318"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5 5L4.99999 313"
                              stroke="white"
                              stroke-width="10"
                              stroke-linecap="round"
                              stroke-dasharray="20 20"
                            />
                          </svg>
                        </div>
                        <div className=" flex  justify-center ">
                          <p className=" text-white  md:text-md text-sm break-words font-Thai  w-full   bg-transparent align-top resize-none whitespace-pre-line  ">
                            {review1.review}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {
                    //review2
                  }
                  {review2.review != "" && (
                    <div className=" md:w-full sm:w-[90%]  mt-10 bg-gradient-to-b from-[#112881]/[.90] to-[#8E297A]/[.50] mx-auto  flex p-4 rounded-3xl min-h-30 gap-5 justify-center ">
                      <div className="  flex justify-start w-full">
                        <p className=" text-white  md:text-md text-sm break-words font-Thai   w-full  bg-transparent align-top resize-none whitespace-pre-line  ">
                          {review2.review}
                        </p>
                      </div>
                      <div className="w-[8px] min-w-[8px]">
                        <svg
                          width="100%"
                          viewBox="0 0 10 318"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L4.99999 313"
                            stroke="white"
                            stroke-width="10"
                            stroke-linecap="round"
                            stroke-dasharray="20 20"
                          />
                        </svg>
                      </div>
                      <div className=" relative z-10  min-w-[30%] w-[30%] md:min-w-[25%] md:w-[25%] lg:min-w-[20%] lg:w-[20%]">
                        <div className=" flex justify-end ">
                          <svg
                            className="block w-full"
                            viewBox="0 0 153 153"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="152.941"
                              height="152.941"
                              rx="30"
                              fill="#D9D9D9"
                            />
                          </svg>
                          <div className="absolute top-0 right-0 z-10  flex w-full aspect-square">
                            <Image
                              alt=""
                              className=" object-cover  rounded-3xl sm:rounded-xl "
                              layout="fill"
                              src={reviewImagesLink["second"]}
                            />
                          </div>
                        </div>
                        <div className=" block md:mt-1  relative z-50">
                          <p className=" text-white md:text-2xl sm:text-md  bg-transparent font-Thai min-h-[28px] font-semibold text-right break-words">
                            {review2.name}
                          </p>

                          <p className="  text-white md:text-xl md:mt-0  sm:text-sm text-base  font-Thai text-right ">
                            {" "}
                            เตรียมอุดม {review2.gen}
                          </p>
                          <p className="   text-white md:text-base md:mt-0  sm:text-sm text-base min-h-[28px] font-Thai text-right break-words">
                            {review2.contact}
                          </p>
                        </div>
                      </div>
                    </div>
                  )}

                  {
                    //review3
                  }
                  {review3.review != "" && (
                    <div className=" md:w-full sm:w-[90%]  mt-10 bg-gradient-to-b from-[#112881]/[.90] to-[#8E297A]/[.50] mx-auto  flex p-4 rounded-3xl min-h-30 gap-5">
                      <div className=" relative z-10  min-w-[30%] w-[30%] md:min-w-[25%] md:w-[25%] lg:min-w-[20%] lg:w-[20%] ">
                        <svg
                          className="block w-full"
                          viewBox="0 0 153 153"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <rect
                            width="152.941"
                            height="152.941"
                            rx="30"
                            fill="#D9D9D9"
                          />
                        </svg>

                        <div className="absolute top-0 left-0 z-40 aspect-square flex w-full">
                          <Image
                            alt=""
                            className=" object-cover rounded-3xl sm:rounded-xl "
                            layout="fill"
                            src={reviewImagesLink["third"]}
                          />
                        </div>
                        <div className=" block md:mt-1  z-50 relative">
                          <p className=" text-white md:text-2xl sm:text-md min-h-[28px]  break-words font-semibold  bg-transparent font-Thai">
                            {review3.name}
                          </p>

                          <p className=" block text-white md:text-xl md:mt-0  sm:text-sm text-base  font-Thai ">
                            {" "}
                            เตรียมอุดม {review3.gen}
                          </p>
                          <div className=" flex">
                            <p className=" break-words items-center  text-white min-h-[28px] sm:text-sm md:text-base bg-transparent font-Thai ">
                              {review3.contact}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="w-[8px] min-w-[8px]">
                        <svg
                          width="100%"
                          viewBox="0 0 10 318"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            d="M5 5L4.99999 313"
                            stroke="white"
                            stroke-width="10"
                            stroke-linecap="round"
                            stroke-dasharray="20 20"
                          />
                        </svg>
                      </div>
                      <div className=" flex  justify-center ">
                        <p className=" text-white  md:text-md text-sm break-words font-Thai  w-full   bg-transparent align-top resize-none whitespace-pre-line  ">
                          {review3.review}
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
            {
              //every asset start here
            }
            <div className=" w-full absolute top-0 z-0  ">
              <ClubTop />
            </div>

            <div className=" absolute bottom-0 w-full z-10">
              <ClubBottom />
            </div>
            <div className=" hidden md:block ">
              <div className=" absolute right-0 top-[200px]">
                <ClubCrystal />
              </div>

              <div className=" absolute left-0 top-[500px]">
                <ClubLamp />
              </div>

              <div className=" absolute right-0 top-[1500px]">
                <ClubFlower />
              </div>
              {review2.review != "" && (
                <div className=" absolute left-0 top-[2500px] block z-0">
                  <ClubCrystal2 />
                </div>
              )}
            </div>
          </div>
        </div>
      </>
    );

  return (
    <>
      <h3>{clubId} not appeared to have article</h3>
    </>
  );
};

export default LandingEdit;
