import React, { useState, useEffect, FC } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import axios from "axios";
import QuizMainGems from "@/vectors/quiz/Main";
import RightCircle from "@/vectors/quiz/right";
import LeftCircle from "@/vectors/quiz/left";
import Dialog1 from "@/vectors/quiz/dialog1";
import Dialog2 from "@/vectors/quiz/dialog2";
import Dialog3 from "@/vectors/quiz/dialog3";
import Dialog4 from "@/vectors/quiz/dialog4";
import Dialog5 from "@/vectors/quiz/dialog5";
import Dialog6 from "@/vectors/quiz/dialog6";
import Dialog7 from "@/vectors/quiz/dialog7";
import Dialog8 from "@/vectors/quiz/dialog8";
import Dialog9 from "@/vectors/quiz/dialog9";
import QuestionSvg from "@/vectors/quiz/question";
import Star from "@/vectors/quiz/star";

export default function Quiz() {
  const questions = [
    {
      questionText: "มื้อเช้าคุณเลือกทาน",
      answerOptions: [
        { answerText: "ข้าวเหนียวหมูปิ้ง", score: 6 },
        { answerText: "ข้าวผัดอเมริกัน", score: 3 },
        { answerText: "หมาล่า", score: 1 },
        { answerText: "นมสดกับซีเรียล", score: 5 },
      ],
    },
    {
      questionText: "สิ่งแรกที่คุณจะทำ\nหลังจากอ่านจดหมายจบ",
      answerOptions: [
        { answerText: "ถ่ายรูปคู่กับจดหมาย โพสต์ลงสตอรี่ !", score: 5 },
        { answerText: "หยิบของใส่กระเป๋า", score: 1 },
        { answerText: "วิ่งไปบอกแม่", score: 6 },
        { answerText: "รีบกินมื้อเช้าต่อให้เสร็จ", score: 3 },
      ],
    },
    {
      questionText: "สถานที่แรกที่คุณอยากไป\nในเมืองนี้",
      answerOptions: [
        { answerText: "แหล่งมูเตลู", score: 8 },
        { answerText: "ท้องทะเลอันกว้างใหญ่", score: 5 },
        { answerText: "ห้วงแห่งยามราตรีกาล", score: 4 },
        { answerText: "ดินแดนอาทิตย์ไม่หลับไหล", score: 1 },
      ],
    },
    {
      questionText: "หนังสือที่คุณจะหยิบคือ  ",
      answerOptions: [
        { answerText: "ตัวเลขลับสมอง", score: 7 },
        { answerText: "โลกวิทย์น่ารู้", score: 9 },
        { answerText: "สมุดคัดตัวอักษร", score: 1 },
        { answerText: "คู่มือการทำขนม", score: 4 },
      ],
    },
    {
      questionText: "คุณจะเลือกเปิดเรื่อง",
      answerOptions: [
        { answerText: "ความโชคดี", score: 1 },
        { answerText: "โชคลาภ", score: 5 },
        { answerText: "ความรัก", score: 3 },
        { answerText: "การเรียน", score: 7 },
      ],
    },
    {
      questionText: "บุคลิกใดที่บ่งบอกถึงคุณ\nมากที่สุด",
      answerOptions: [
        { answerText: "สุขุม ใจเย็น", score: 3 },
        { answerText: "อ่อนโยน แต่แข็งแกร่ง", score: 6 },
        { answerText: "กล้าคิด กล้าทำ", score: 5 },
        { answerText: "รักอิสระ", score: 1 },
      ],
    },
    {
      questionText: "คติประจำใจ\nที่น่าจะตรงกับคุณมากที่สุด",
      answerOptions: [
        { answerText: "อยากสูงต้องเขย่ง อยากเก่งต้องขยัน !", score: 6 },
        { answerText: "ฝันให้ไกล แล้วไปให้สุด !", score: 3 },
        { answerText: "ลิขิตฟ้าหรือจะสู้มานะตน !", score: 5 },
        { answerText: "ล้มแล้วลุก ทุกข์แล้วยิ้ม !", score: 1 },
      ],
    },
    {
      questionText:
        "คุณจะเริ่มจากทำอะไรในงาน\nTriam Udom Open House 2024\nก่อนดีนะ",
      answerOptions: [
        { answerText: "สำรวจ ณ ย่านอัญมณีทั้ง 8 ", score: 6 },
        {
          answerText: "เก็บ E-stamp ให้ครบทุกดวง",
          score: 5,
        },
        { answerText: "ดูการแสดงที่โรงละครแห่งนครอัญมณี", score: 3 },
        { answerText: "ถ่ายรูปที่โฟโต้บูธเป็นที่ระลึก", score: 1 },
      ],
    },
  ];

  const dialog = [
    "คุณกำลังกินมื้อเช้า",
    "แต่คุณเหลือบไปเห็นซองจดหมายบนโต๊ะกินข้าว\nในจดหมายนั้นได้เชิญคุณไปที่นครอัญมณี\nเพื่อค้นหาอัญมณีอันล้ำค่า!",
    "คุณได้เดินก้าวเข้ามาผ่านประตูเมืองเข้ามา",
    "ระหว่างทางคุณเดินผ่านร้านขายหนังสือ\nคุณเข้าไปในร้าน",
    "คุณเดินไปเจอคุณยายนักโหราศาสตร์\nเธอเชิญคุณเปิดไพ่ทำนายชีวิต",
    "คุณมาถึงจุดหมายของคุณแล้ว\nแต่ก่อนที่จะเข้าไปยังด้านในสถานที่นั้นได้  \nคุณต้องข้ามสะพานทดสอบบุคลิกก่อน\nถึงจะไปยังจุดหมายได้",
    "คุณเข้ามาถึงด้านในแล้ว \nคุณพบกับอัญมณีประกายตามากมาย\nนครที่เต็มไปด้วยอัญมณีที่มีแสงสว่างภายในตัวเอง\nราวกับพวกเขานั้นโดดเด่นกันคนละแบบ",
    "ถึงเวลาแล้วที่คุณจะต้องออกไปค้นหาตัวเอง",
  ];

  interface ComponentMap {
    [key: number]: FC<{ className?: string | undefined }>;
    default: null;
  }

  const componentMap: ComponentMap = {
    2: Dialog2,
    3: Dialog3,
    4: Dialog4,
    5: Dialog5,
    6: Dialog6,
    7: Dialog7,
    8: Dialog8,
    9: Dialog9,
    default: null,
  };

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [firstPage, setFirstPage] = useState(true);
  const [isFirstDialog, setIsFirstDialog] = useState(false);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [dialogPage, setDialogPage] = useState(2);
  const [dialogSvgComponent, setDialogSvgComponent] =
    useState<React.ReactNode | null>(null);
  const [hideQuestion, setHideQuestion] = useState(true);
  const [score, setScore] = useState(0);
  const [id, setId] = useState(Number);
  const [finished, setFinished] = useState(false);
  const router = useRouter();
  const { data: session, status } = useSession({
    required: true,
    onUnauthenticated() {
      router.push("/auth"); // The user is not authenticated, handle it here.
    },
  });

  let userData = JSON.stringify({
    email: session?.user?.email,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let hasAccountConfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: `https://openhouse2024-backend.vercel.app/api/user/has-account`,
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function hasAccountRequest() {
    if (status === "authenticated") {
      try {
        const response = await axios.request(hasAccountConfig);
        if (response.data === false) {
          router.push("/account/form");
        } else {
          userRequest();
        }
      } catch (error) {}
    }
  }

  let config = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/get",
    headers: {
      "Content-Type": "application/json",
    },
    data: userData,
  };

  async function userRequest() {
    try {
      const response = await axios.request(config);
      setId(response.data.id);
    } catch (error) {}
  }

  let gemsData = JSON.stringify({
    id: id,
    score: score,
    environmentKeys: process.env.ENVIRONMENT_KEY,
  });

  let Gemsconfig = {
    method: "post",
    maxBodyLength: Infinity,
    url: "https://openhouse2024-backend.vercel.app/api/user/gems",
    headers: {
      "Content-Type": "application/json",
    },
    data: gemsData,
  };

  async function gemsRequest() {
    console.log(score);
    try {
      const response = await axios.request(Gemsconfig);
      router.push("/account/gems");
      console.log(response.data);
    } catch (error) {}
  }

  useEffect(() => {
    hasAccountRequest();
  }, [status]);

  useEffect(() => {
    gemsRequest();
  }, [finished]);

  useEffect(() => {
    const Component = componentMap[dialogPage] || componentMap.default;
    setDialogSvgComponent(
      Component ? (
        <Component className=" lg:w-auto lg:h-auto md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%] " />
      ) : null
    );
  }, [dialogPage]);

  async function handleAnswerOptionClick(answerScore: number) {
    setScore(score + answerScore);
    console.log(score + answerScore);
    if (currentQuestion < questions.length - 1) {
      setHideQuestion(true);
      setIsDialogOpen(true);
      setCurrentQuestion(currentQuestion + 1);
    }
    if (currentQuestion >= questions.length - 1) {
      setFinished(true);
    }
  }

  function handleStart() {
    setFirstPage(false);
    setIsFirstDialog(true);
  }

  function handleFirstDialog() {
    setIsFirstDialog(false);
    setIsDialogOpen(true);
  }

  function handleDialog() {
    setIsDialogOpen(false);
    setDialogPage(dialogPage + 1);
    setHideQuestion(false);
  }
  return (
    <div className="  min-h-screen w-screen overflow-x-hidden bg-radial relative flex justify-center items-center">
      {/* firstpage */}
      {firstPage && (
        <div className=" text-white flex justify-center text-center md:pt-20 h-full  relative z-50">
          <div>
            <span className=" bg-[#261C8A] rounded-full  md:text-3xl text-xl font-medium px-3">
              แบบทดสอบ
            </span>
            <div className="mt-5 lg:text-7xl md:text-5xl text-3xl ">
              อัญมณีไหนที่ใช่คุณ !
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className=" font-Bodwars bg-[#E76FB9] px-8 py-2 rounded-full md:mt-[500px] mt-[400px] "
              onClick={handleStart}
            >
              start
            </motion.button>
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 z-0 ">
            <QuizMainGems className=" lg:w-[616px] lg:h-[525px] md:w-[493px] md:h-[420px] sm:w-[394px] sm:h-[336px] " />
          </div>
        </div>
      )}

      {/* dialog */}

      {/* first dialog */}
      {isFirstDialog && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className=" w-screen h-screen relative z-50"
          onClick={handleFirstDialog}
        >
          <div className=" flex justify-center items-center h-full">
            <div className=" block text-center">
              <div className=" flex justify-center">
                <Dialog1 className=" lg:w-auto lg:h-auto md:w-[80%] md:h-[80%] sm:w-[60%] sm:h-[60%] " />
              </div>
              <div className=" mt-10 text-white font-semibold md:text-xl text-lg ">
                เช้าวันหนึ่งคุณตื่นมา
              </div>
            </div>
          </div>
          <div className=" absolute left-1/2 -translate-x-1/2 bottom-8 text-[#B1B1B1] ">
            แตะเพื่อไปต่อ
          </div>
        </motion.div>
      )}

      {/* second above dialog */}
      {isDialogOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            duration: 0.5,
            delay: 0.1,
          }}
          className=" w-screen h-screen relative z-50"
          onClick={handleDialog}
        >
          <div className=" flex justify-center items-center h-full">
            <div className=" block text-center">
              {dialogSvgComponent && (
                <div className=" flex justify-center">{dialogSvgComponent}</div>
              )}
              <div className=" mt-10 text-white font-semibold md:text-xl text-lg  whitespace-pre-line ">
                {dialog[dialogPage - 2]}
              </div>
              <div className=" absolute left-1/2 -translate-x-1/2 bottom-8 text-[#B1B1B1] ">
                แตะเพื่อไปต่อ
              </div>
            </div>
          </div>
        </motion.div>
      )}

      {!hideQuestion && (
        <div className="w-screen h-screen relative z-[99]">
          <div className=" flex justify-center items-center h-full text-center text-white">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{
                duration: 0.5,
                delay: 0.1,
              }}
              className=" block"
            >
              <div className=" flex justify-center">
                <div className=" relative w-fit z-[99]">
                  <div className=" w-fit  ">
                    <QuestionSvg className=" md:w-auto md:h-auto w-[339px]" />
                  </div>
                  <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{
                      duration: 0.5,
                      delay: 0.1,
                    }}
                    className=" absolute md:-top-10 md:-left-10 -top-0 -left-6 "
                  >
                    <Star className=" max-md:w-[98px] max-md:h-[98px] " />
                  </motion.div>
                  <div className=" md:text-3xl text-xl font-bold text-center absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 whitespace-pre-line w-full">
                    {questions[currentQuestion]?.questionText}
                  </div>
                </div>
              </div>
              <div className="  flex justify-center md:text-base text-sm ">
                <div className=" block font-semibold md:w-1/2 w-3/4">
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" w-full h-12 bg-gradient-to-r from-[#D966B6] to-[#5300C8] shadow-lg rounded-full mt-5  "
                    onClick={() => {
                      handleAnswerOptionClick(
                        questions[currentQuestion].answerOptions[0].score
                      );
                    }}
                  >
                    {questions[currentQuestion]?.answerOptions[0].answerText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" w-full h-12 bg-gradient-to-r from-[#D966B6] to-[#5300C8] shadow-lg rounded-full mt-5"
                    onClick={() => {
                      handleAnswerOptionClick(
                        questions[currentQuestion].answerOptions[1].score
                      );
                    }}
                  >
                    {questions[currentQuestion]?.answerOptions[1].answerText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" w-full h-12 bg-gradient-to-r from-[#D966B6] to-[#5300C8] shadow-lg rounded-full mt-5 "
                    onClick={() => {
                      handleAnswerOptionClick(
                        questions[currentQuestion].answerOptions[2].score
                      );
                    }}
                  >
                    {questions[currentQuestion]?.answerOptions[2].answerText}
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className=" w-full h-12 bg-gradient-to-r from-[#D966B6] to-[#5300C8] shadow-lg rounded-full mt-5 "
                    onClick={() => {
                      handleAnswerOptionClick(
                        questions[currentQuestion].answerOptions[3].score
                      );
                    }}
                  >
                    {questions[currentQuestion]?.answerOptions[3].answerText}
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      )}

      {/* assets */}
      <LeftCircle className=" absolute left-0 bottom-0 z-0 lg:w-auto lg:h-auto md:w-[343px] md:h-[400px] w-[221px] h-[252px]  " />
      <RightCircle className=" absolute right-0 top-0 z-0  lg:w-auto lg:h-auto md:w-[345px] md:h-[395px] w-[221px] h-[252px] " />
    </div>
  );
}
