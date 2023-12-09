import Link from "next/link";
import { motion } from "framer-motion";

export default function _404() {
  return (
    <div className=" bg-[#FCF7E1]">
      <div className=" flex justify-center items-center h-screen">
        <div className=" block ">
          <div className=" flex justify-center">
            <svg
              width="321"
              height="380"
              viewBox="0 0 321 380"
              className="max-md:w-[251px] max-md:h-[304px] "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="154.738"
                cy="160.671"
                r="67.6481"
                transform="rotate(18 154.738 160.671)"
                stroke="#7625B9"
                stroke-opacity="0.8"
                stroke-width="18"
              />
              <rect
                x="84.5708"
                y="212.737"
                width="42.8143"
                height="17.3767"
                rx="8.68833"
                transform="rotate(39 84.5708 212.737)"
                fill="#7625B9"
                fill-opacity="0.8"
              />
              <rect
                x="78.1929"
                y="234.404"
                width="24.8786"
                height="105.998"
                rx="12.4393"
                transform="rotate(39 78.1929 234.404)"
                fill="#7625B9"
                fill-opacity="0.8"
              />
              <path
                d="M162 114L141 193.5L156 207.5"
                stroke="#7625B9"
                stroke-opacity="0.8"
                stroke-width="14"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M172.5 75.5L176.5 62L254.5 7L314 141.5L234 283.5L190.5 241.5"
                stroke="#7625B9"
                stroke-opacity="0.8"
                stroke-width="14"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M177.75 176.075V164.15C181.8 163.95 184.9 163.1 187.05 161.6C189.25 160.05 190.35 157.775 190.35 154.775V153.725C190.35 151.425 189.65 149.65 188.25 148.4C186.85 147.1 184.975 146.45 182.625 146.45C180.125 146.45 178.125 147.175 176.625 148.625C175.125 150.075 174.1 151.925 173.55 154.175L166.425 151.325C166.875 149.775 167.525 148.275 168.375 146.825C169.275 145.375 170.4 144.1 171.75 143C173.1 141.85 174.7 140.95 176.55 140.3C178.4 139.6 180.525 139.25 182.925 139.25C185.375 139.25 187.6 139.6 189.6 140.3C191.6 141 193.3 142 194.7 143.3C196.1 144.55 197.175 146.1 197.925 147.95C198.675 149.75 199.05 151.75 199.05 153.95C199.05 156.2 198.65 158.225 197.85 160.025C197.1 161.775 196.075 163.275 194.775 164.525C193.525 165.775 192.1 166.8 190.5 167.6C188.9 168.35 187.25 168.875 185.55 169.175V176.075H177.75ZM181.725 193.4C179.825 193.4 178.425 192.95 177.525 192.05C176.675 191.1 176.25 189.9 176.25 188.45V187.175C176.25 185.725 176.675 184.55 177.525 183.65C178.425 182.7 179.825 182.225 181.725 182.225C183.625 182.225 185 182.7 185.85 183.65C186.75 184.55 187.2 185.725 187.2 187.175V188.45C187.2 189.9 186.75 191.1 185.85 192.05C185 192.95 183.625 193.4 181.725 193.4Z"
                fill="#7625B9"
                fill-opacity="0.72"
              />
            </svg>
          </div>
          <div className=" md:text-3xl text-xl font-bold text-[#7625B9]">
            This page could not be found
          </div>
          <div className=" flex justify-center">
            <Link href="/">
              <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                className="bg-[#7625B9] text-[#FCF7E1] text-[14px] lg:text-[20px] mt-[10px] lg:mt-[30px] w-[100px] h-[25px] lg:w-[150px] lg:h-[40px] rounded-[20px]">
                กลับสู่หน้าแรก
              </motion.button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
