import { FC } from "react";
import { Facebook } from "@/vectors/icons/Facebook";
import { X } from "@/vectors/icons/X";
import { Youtube } from "@/vectors/icons/Youtube";
import { Instagram } from "@/vectors/icons/Instagram";
import Link from "next/link";
import { motion } from "framer-motion";
import { Tiktok } from "@/vectors/icons/Tiktok";
import KorChor from "@/vectors/icons/korchor";
import { useSession, signIn, signOut } from "next-auth/react";

const getButton = (session: any, signout: any) => {
  if (!session) {
    return (
      <Link passHref href="/auth">
        <motion.button
          whileHover={{ scale: 1.1 }}
          className="inline-flex px-8 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#FFD995] via-[#FF7ADA] to-[#4B69E9] mt-5 font-regular font-display footer-button"
        >
          เข้าสู่ระบบ
        </motion.button>
      </Link>
    );
  } else {
    return (
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={signout}
        className="inline-flex px-8 py-2 text-white font-bold rounded-full bg-gradient-to-r from-[#FFD995] via-[#FF7ADA] to-[#4B69E9] mt-5 font-regular font-display footer-button"
      >
        ออกจากระบบ
      </motion.button>
    );
  }
};

const Footer: FC<{ theme?: string }> = ({ theme }) => {
  const { data: session, status } = useSession();

  return (
    <footer
      className={`w-full px-8 pt-10 antialiased bg-[#2C1865] ${
        theme == "light" ? "bg-white" : "bg-blue-text"
      }`}
    >
      <div className="flex flex-col items-center justify-between w-full max-w-6xl px-0 mx-auto md:flex-row md:items-start md:px-20">
        <div className="flex justify-center">
          <div className="space-y-5 text-center md:text-left">
            <div
              className={`${
                theme == "light" ? "text-[#37498B]" : "text-white"
              } font-semibold font-sans`}
            >
              <p>TRIAM UDOM</p>
              <p className="-mt-1">OPEN HOUSE 2024</p>
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
                href="https://x.com/triamudomoph"
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.05 }}
              >
                <X />
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
            {getButton(session, signOut)}
          </div>
        </div>
        <div
          className={`${
            theme == "light" ? "text-deep-turquoise" : "text-white"
          } flex flex-col sm:flex-row justify-between w-full max-w-md ml-0 mt-6 sm:mt-0 md:ml-28`}
        >
          <div className="flex flex-col space-y-2 text-center md:text-right max-md:mt-5  font-display">
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
            {session && (
              <Link passHref href="account/ticket">
                <div className="hover:underline">E-ticket</div>
              </Link>
            )}
          </div>
          <div className="flex flex-col space-y-2 text-center md:text-right max-md:mt-5 font-display">
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
              <div className="hover:underline ">ติดต่อ</div>
            </Link>
            <Link passHref href="/map">
              <div className="hover:underline ">แผนผังงาน</div>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex justify-center py-5 mt-10 border-t border-[#CBD5E0] border-opacity-30">
        <KorChor
          classname="h-4 lg:h-8"
          fill={`${theme == "light" ? "" : "#FDF1DB"}`}
        />
      </div>
    </footer>
  );
};

export default Footer;
