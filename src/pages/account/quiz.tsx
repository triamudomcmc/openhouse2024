import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import axios from "axios";
import QuizMainGems from "@/vectors/quiz/Main";

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
      questionText: "สิ่งแรกที่คุณจะทำหลังจากอ่านจดหมายจบ",
      answerOptions: [
        { answerText: "ถ่ายรูปคู่กับจดหมาย โพสต์ลงสตอรี่ !", score: 5 },
        { answerText: "หยิบของใส่กระเป๋า", score: 1 },
        { answerText: "วิ่งไปบอกแม่", score: 6 },
        { answerText: "รีบกินมื้อเช้าต่อให้เสร็จ", score: 3 },
      ],
    },
    {
      questionText:
        "คุณได้เดินก้าวเข้ามาผ่านประตูเมืองเข้ามา สถานที่แรกที่คุณอยากไปในเมืองนี้",
      answerOptions: [
        { answerText: "แหล่งมูเตลู", score: 8 },
        { answerText: "ท้องทะเลอันกว้างใหญ่", score: 5 },
        { answerText: "ห้วงแห่งยามราตรีกาล", score: 4 },
        { answerText: "ดินแดนอาทิตย์ไม่หลับไหล", score: 1 },
      ],
    },
    {
      questionText:
        "ระหว่างทางคุณเดินผ่านร้านขายหนังสือ คุณเข้าไปในร้าน หนังสือที่คุณจะหยิบคือ",
      answerOptions: [
        { answerText: "ตัวเลขลับสมอง", score: 7 },
        { answerText: "โลกวิทย์น่ารู้", score: 9 },
        { answerText: "สมุดคัดตัวอักษร", score: 1 },
        { answerText: "คู่มือการทำขนม", score: 4 },
      ],
    },
    {
      questionText:
        "คุณเดินไปเจอคุณยายนักโหราศาสตร์เชิญคุณเปิดไพ่ทำนายชีวิต คุณจะเลือกเปิดเรื่อง",
      answerOptions: [
        { answerText: "ความโชคดี", score: 1 },
        { answerText: "โชคลาภ", score: 5 },
        { answerText: "ความรัก", score: 3 },
        { answerText: "การเรียน", score: 7 },
      ],
    },
    {
      questionText: "บุคลิกใดที่บ่งบอกถึงคุณมากที่สุด",
      answerOptions: [
        { answerText: "สุขุม ใจเย็น", score: 3 },
        { answerText: "อ่อนโยน แต่แข็งแกร่ง", score: 6 },
        { answerText: "กล้าคิด กล้าทำ", score: 5 },
        { answerText: "รักอิสระ", score: 1 },
      ],
    },
    {
      questionText: "คติประจำใจที่น่าจะตรงกับคุณมากที่สุด",
      answerOptions: [
        { answerText: "อยากสูงต้องเขย่ง อยากเก่งต้องขยัน !", score: 6 },
        { answerText: "ฝันให้ไกล แล้วไปให้สุด !", score: 3 },
        { answerText: "ลิขิตฟ้าหรือจะสู้มานะตน !", score: 5 },
        { answerText: "ล้มแล้วลุก ทุกข์แล้วยิ้ม !", score: 1 },
      ],
    },
    {
      questionText:
        "คุณจะเริ่มจากทำอะไรในงาน Triam Udom Open House 2024 ก่อนดีนะ",
      answerOptions: [
        { answerText: "ไปสำรวจ ณ ย่านแห่ง 8 อัญมณี", score: 6 },
        {
          answerText: "ส่งจดหมายที่ที่ทำการไปรษณีย์ ณ นครแห่งอัญมณี",
          score: 5,
        },
        { answerText: "ดูการแสดงที่โรงละครแห่งนครอัญมณี", score: 3 },
        { answerText: "ถ่ายรูปโฟโต้บูธเป็นที่ระลึก", score: 1 },
      ],
    },
  ];
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [hideQuestion, setHideQuestion] = useState(true);
  const [score, setScore] = useState(0);

  function handleAnswerOptionClick(answerScore: number) {
    setScore(score + answerScore);
    if (currentQuestion === 2) {
      setHideQuestion(true);
    }
    console.log(score + answerScore);
    setCurrentQuestion(currentQuestion + 1);
  }
  return (
    <div className="  min-h-screen bg-gradient-to-b from-[#FFFFF3] from-70% to-[#8C42F4] to-100%">
      <div className="mt-16 flex justify-center">
        {hideQuestion && <div><QuizMainGems /></div>}
        {!hideQuestion && (
          <div className=" block">
            <div className=" text-center">
              {questions[currentQuestion]?.questionText}
            </div>
            <div className=" block">
              <button
                className=" w-full"
                onClick={() => {
                  handleAnswerOptionClick(
                    questions[currentQuestion].answerOptions[0].score
                  );
                }}
              >
                {questions[currentQuestion]?.answerOptions[0].answerText}
              </button>
              <button
                className=" w-full"
                onClick={() => {
                  handleAnswerOptionClick(
                    questions[currentQuestion].answerOptions[1].score
                  );
                }}
              >
                {questions[currentQuestion]?.answerOptions[1].answerText}
              </button>
              <button
                className=" w-full"
                onClick={() => {
                  handleAnswerOptionClick(
                    questions[currentQuestion].answerOptions[2].score
                  );
                }}
              >
                {questions[currentQuestion]?.answerOptions[2].answerText}
              </button>
              <button
                className=" w-full"
                onClick={() => {
                  handleAnswerOptionClick(
                    questions[currentQuestion].answerOptions[3].score
                  );
                }}
              >
                {questions[currentQuestion]?.answerOptions[3].answerText}
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
