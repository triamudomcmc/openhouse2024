import { motion } from "framer-motion";
import Link from "next/link";

export const Programme = ({
  name,
  thainame,
  width,
  height,
  className,
}: {
  name: string;
  thainame: string;
  width?: string;
  height?: string;
  className?: string;
}) => {
  return (
    <Link href={`/programmes/${name}`}>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{
          duration: 0.2,
          delay: 0.2
        }}
        className={`text-center cursor-pointer ${className} `}
      >
        <div>
          <img
            alt={`${name}`}
            src={`/assets/programme/${name}.png`}
            className="mx-auto"
          />
        </div>
        <div className={`max-w-[250px] mx-auto `}>
          <h3 className="font-light lg:text-2xl md:text-lg text-white">
            {thainame}
          </h3>
        </div>
      </motion.div>
    </Link>
  );
};
