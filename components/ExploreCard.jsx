'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn } from "@/utils/motion";

const ExploreCard = ({ id, imgUrl, title, index, active, handleClick }) => (
  <motion.div
    variants={fadeIn('right', 'spring', index * 0.5, 0.75)}
    className={`relative ${active === id ? 'lg:flex-[5] flex-[10]' : 'lg:flex-[1] flex-[2]'} flex items-center justify-center min-w-[130px] h-[500px] transition-[flex] duration-[0.7s] ease-out-flex cursor-pointer`}
    onClick={() => handleClick(id)}
  >
    <img
      src={imgUrl}
      alt={title}
      className="absolute w-full h-full object-cover rounded-[24px]"
    />
    {
      active !== id ? (
        <h3 className="font-semibold sm:text-[26px] text-[18px] text-white absolute z-0 lg:bottom-20 lg:rotate-[-90deg] lg: origin-[0,0]">
          {title}
        </h3>
      ) : (
        <div className="absolute bottom-0 p-8 lg:justify-start justify-between lg:items-start items-center w-full lg:flex-col flex bg-[rgba(0,0,0,0.5)] rounded-b-[24px]">
          <div className={`${styles.flexCenter} w-[60px] h-[60px] rounded-[24px] glassmorphism lg:mb-[16px] mb-0`}>
            <img
              src="/headset.svg"
              alt="headset"
              className="w-1/2 h-1/2 object-contain"
            />
          </div>

          <div>
            <p className="font-normal text-[16px] leading-[20px] text-white uppercase">
              Enter the Metaverse
            </p>
            <h2 className="lg:mt-[24px] mt-[12px] font-semibold sm:text-[32px] text-[24px] text-white">
              {title}
            </h2>
          </div>
        </div>
      )
    }
  </motion.div>
);

export default ExploreCard;
