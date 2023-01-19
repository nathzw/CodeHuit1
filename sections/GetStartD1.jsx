"use client";
import react from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { TitleText } from "../components";
import { fadeIn } from "../utils/motion";
import Button2 from "../components/Button2";
import straggerContainer from  "../utils/motion"

const GetStarteD1 = () => (
    <section className={`${styles.paddings} relative z-10`}>
    <motion.div
    variants={straggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{once: 'false', amount:0.25}}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <div className={`flex-1 ${styles.flexCenter}`}>
        <img
          src="../compuDesa3.png"
          alt="desarrollo1"
          className="w-[90%] h-[90%] object-contain"
        />
      </div>
      <div className="flex-[0.75] flex justify-center text-center flex-col">
        <TitleText
        
          title={
            <>
              El diseño web.
            </>
          }
        ></TitleText>
        <motion.p
          className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          En CODE HUIT creamos y diseñamos páginas web que te aportan valor
          añadido y te posicionan en el mercado como una empresa de referencia.
          Además, en el caso que ya tengas página web, la estudiamos y
          analizamos para detectar cuáles son los fallos de diseño y estructura,
          ayudándote a mejorarla y sacarle el máximo partido.
        </motion.p>
        <div className={`${styles.flexCenter} mt-[20px]`}>
          <Button2 />
        </div>
      </div>
    </motion.div>
  </section>
)
export default GetStarteD1;