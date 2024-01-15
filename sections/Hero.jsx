'use client';

import { motion } from "framer-motion";
import styles from "@/styles";
import { slideIn, staggerContainer, textVariant } from "@/utils/motion";
import { scrollToSection } from "@/utils/function";

const Hero = () => {
  return (
    <section className={`${styles.yPaddings} sm:pl-16 pl-6 h-[100%] flex md:mt-0 mt-[15vh]`}>
      <motion.div
        variants={staggerContainer}
        initial='hidden'
        whileInView='show'
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col h-[100%]`}
      >
        <div className="flex flex-col justify-center items-center relative z-10">
          <motion.h1
            variants={textVariant(1.1)}
            className={`${styles.heroHeading}`}
          >
            Metaverse
          </motion.h1>

          <motion.div
            variants={textVariant(1.2)}
            className="flex flex-row justify-center items-center"
          >
            <h1 className={`${styles.heroHeading}`}>Ma</h1>
            <div className={`${styles.heroDText}`}></div>
            <h1 className={`${styles.heroHeading}`}>ness</h1>
          </motion.div>
        </div>

        <motion.div
          variants={slideIn('right', 'tween', 0.2, 1)}
          className="relative w-full md:-mt-[45px] -mt-[30px] h-[100%] flex"
        >
          <div className="w-full md:h-[100%] h-[100%] hero-gradient hero-bg rounded-tl-[140px] z-[0]"></div>

          {/* <img
          src="/cover.png"
          alt="cover"
          className="w-full sm:h-[500px] h-[350px] object-cover rounded-tl-[140px] z-10 relative"
        /> */}

          <button type="button" onClick={() => scrollToSection('explore')} className="absolute md:-bottom-[65px] -bottom-[50px] md:right-[120px] right-[50px]">
            {/* <div className="w-full flex justify-end sm:-mt-[70px] -mt-[50px] pr-[40px] relative z-10"> */}
            <img
              src="/stamp.png"
              alt="stamp"
              className="md:w-[130px] w-[100px] md:h-[130px] h-[100px] object-contain"
            />
            {/* </div> */}
          </button>
        </motion.div>
      </motion.div>
    </section>
  )
};

export default Hero;
