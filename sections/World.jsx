"use client";
import { motion } from "framer-motion";

import styles from "../styles";
import {  fadeIn } from "../utils/motion";
import { TitleText, TypingText } from "../components";
import {straggerContainer} from "../utils/motion";

const World = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex  flex-col`}
    >
      <TypingText title="|Nuestros clientes" textStyles="text-center" />
      <TitleText
        title={<>Conoce a las empresas que eliguieron trabajar con nosotros:</>}
        textStyles="text-center"
      />
      <motion.div
        variants={fadeIn("up", "tween", 0.3, 1)}
        className="relative mt-[68px] flex w-full h-[550px]"
      >
        <img src="/map.png" alt="map" className="object-cover w-full h-full" />
        {/*empresa 1 */}
        <div className="absolute bottom-20 right-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
          <a href="#"><img src="people-01.png" alt="empresa-1" className="w-full h-full" /></a>
        </div>
        {/*empresa 2 */}
        <div className="absolute top-10 left-20 w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
         <a href="#"><img src="people-02.png" alt="empresa-1" className="w-full h-full" /></a> 
        </div>
        {/*empresa 3 */}
        <div className="absolute top-1/2 left-[45%] w-[70px] h-[70px] p-[6px] rounded-full bg-[#5d6680]">
         <a href="#"><img src="people-03.png" alt="empresa-1" className="w-full h-full" /></a> 
        </div>
      </motion.div>
    </motion.div>

  </section>
);

export default World;
