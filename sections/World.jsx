'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { fadeIn, staggerContainer } from "@/utils/motion";
import { TitleText, TypingText } from "@/components";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={staggerContainer}
      initial='hidden'
      whileInView='show'
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex flex-col`}
    >
      <TypingText title='| People on the World' textStyles='text-center' />

      <TitleText title={
        <>
          Track friends around you and invite them to play together in the same world
        </>
      }
        textStyles='text-center'
      />

      <motion.div
        variants={fadeIn('up', 'tween', 0.3, 1)}
        className="relative mt-[25px] flex w-full h-[500px]"
      >
        <img
          src="/map.png"
          alt="map"
          className="w-full h-full object-contain"
        />

        <div className="absolute lg:top-16 sm:top-28 top-36 max-[370px]:top-48 lg:left-40 sm:left-12 left-3 w-[60px] max-[370px]:w-[40px] h-[60px] max-[370px]:h-[40px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 lg:left-[25%] md:left-[15%] sm:left-[18%] left-[15%] md:w-[160px] sm:w-[120px] w-[90px] max-[370px]:w-[70px] md:h-[120px] sm:h-[90px] h-[65px] max-[370px]:h-[50px] p-[6px] md:rounded-[20px] rounded-[10px] bg-[#5d6680]">
          <img
            src="/mask-group-02.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute top-1/2 left-[45%] w-[60px] max-[370px]:w-[40px] h-[60px] max-[370px]:h-[40px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-03.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute lg:top-16 sm:top-28 top-36 max-[370px]:top-48 md:right-[25%] sm:right-[18%] right-[25%] md:w-[160px] sm:w-[120px] w-[90px] max-[370px]:w-[70px] md:h-[120px] sm:h-[90px] h-[65px] max-[370px]:h-[50px] p-[6px] md:rounded-[20px] rounded-[10px] bg-[#5d6680]">
          <img
            src="/mask-group-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>

        <div className="absolute lg:bottom-16 md:bottom-32 sm:bottom-36 bottom-36 max-[370px]:bottom-44 lg:right-28 sm:right-6 right-3 w-[60px] max-[370px]:w-[40px] h-[60px] max-[370px]:h-[40px] p-[6px] rounded-full bg-[#5d6680]">
          <img
            src="/people-01.png"
            alt="people"
            className="w-full h-full"
          />
        </div>
      </motion.div>
    </motion.div>
  </section>
);

export default World;
