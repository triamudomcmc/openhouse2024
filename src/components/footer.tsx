import { FC } from "react";
import { Facebook } from "@/vectors/icons/Facebook";
import { Twitter } from "@/vectors/icons/Twitter";
import { Youtube } from "@/vectors/icons/Youtube";
import { Instagram } from "@/vectors/icons/Instagram";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tiktok } from "@/vectors/icons/Tiktok";
import KorChor from "@/vectors/icons/korchor";
import { useSession, signIn, signOut } from "next-auth/react";


export default function Footer() {

const { data: session, status } = useSession();

  return (
    <footer className="w-full px-8 pt-10 antialiased bg-blue-500">
      <div className="flex flex-col items-center justify-between w-full max-w-6xl px-0 mx-auto sm:flex-row sm:items-start sm:px-20">
        <div className="flex justify-center">
          <div className="space-y-5 text-center sm:text-left">
            <div className={`text-white font-semibold font-sans`}>
              <p>TRIAM UDOM</p>
              <p className="-mt-1">OPEN HOUSE 2023</p>
            </div>
            <div className="flex space-x-3">
              <motion.a
                href="https://www.facebook.com/TriamUdomOPH"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <Facebook />
              </motion.a>
              <motion.a
                href="https://www.instagram.com/triamudom.oph/"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <Instagram />
              </motion.a>
              <motion.a
                href="https://twitter.com/triamudomoph"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <Twitter />
              </motion.a>
              <motion.a
                href="https://www.youtube.com/c/TriamUdomOpenHouse"
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <Youtube />
              </motion.a>
              <motion.a
                href="https://www.tiktok.com/@triamudom.oph"
                target="_blank"
                whileHover={{ scale: 1.05 }}
              >
                <Tiktok />
              </motion.a>
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={() => signOut()}
              className={ status === "authenticated" ? "inline-flex px-8 py-2 text-white rounded-full font-regular font-display footer-button" : "hidden"}
            >
              ออกจากระบบ
            </motion.button>
            <Link passHref href="/login">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className={ status === "unauthenticated" ? "inline-flex px-8 py-2 text-white rounded-full font-regular font-display footer-button" :"hidden"}
        >
          ลงทะเบียน
        </motion.button>
      </Link>

          </div>
        </div>
        <div
          className={`text-white
           flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 sm:ml-28`}
        >
          <div className="flex flex-col space-y-2 text-center sm:text-right font-display">
            <Link passHref href="/">
              <div className="hover:underline">หน้าแรก</div>
            </Link>
            {/* <Link passHref href="/records">
              <a className="hover:underline">รายการย้อนหลัง</a>
            </Link> */}
            {/* <Link passHref href="/programmes">
              <a className="hover:underline">สายการเรียน</a>
            </Link> */}
            <Link passHref href="/clubs">
              <div className="hover:underline">ชมรม</div>
            </Link>
            {status === "authenticated" && (
              <Link passHref href="account/ticket">
                <div className="hover:underline">บัตรของคุณ</div>
              </Link>
            )}
          </div>
          <div className="flex flex-col mt-2 space-y-2 text-center sm:text-right sm:mt-0 font-display">
            {/* <Link passHref href="/map">
              <a className="hover:underline">แผนผัง</a>
            </Link> */}
            <Link passHref href="/admission">
              <div className="hover:underline">การสอบเข้า</div>
            </Link>
            {/* {user?.uid && (
              <Link passHref href="account/ticket">
                <a className="hover:underline">บัตรของคุณ</a>
              </Link>
            )} */}
            <Link passHref href="/directions">
              <div className="hover:underline">การเดินทาง</div>
            </Link>
            <Link passHref href="/contact">
              <div className="hover:underline">ติดต่อ</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 mt-10 border-t border-[#CBD5E0] border-opacity-30">
        <KorChor classname="h-4 lg:h-8" fill="#FDF1DB" />
      </div>
    </footer>
  );
}
