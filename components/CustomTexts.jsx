'use client';

import { motion } from "framer-motion";
import { textContainer, textVariant2 } from "@/utils/motion";

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal sm:text-[18px] text-[14px] text-secondary-white ${textStyles}`}
  >
    {
      Array.from(title).map((letter, index) => (
        <motion.span
          variants={textVariant2}
          key={index}

        >
          {letter === ' ' ? '\u00A0' : letter}
        </motion.span>
      ))
    }
  </motion.p>
);

export const TitleText = ({ title, textStyles }) => (
  <motion.h2
    variants={textVariant2}
    initial='hidden'
    whileInView='show'
    className={`mt-[8px] font-bold md:text-[45px] text-[35px] text-white ${textStyles}`}
  >
    {title}
  </motion.h2>
);
