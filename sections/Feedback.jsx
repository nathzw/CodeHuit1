"use client";
import { feedback } from "../constants";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, straggerContainer, textVariant, zoomIn} from "../utils/motion";
import FeedbackCard from "../components/FeedbackCard";
const Feedback = () => (
  <section
    id="clients"
    className={`${styles.paddings} ${styles.flexCenter}  relative flex-col`}
  >
    {/* TODO */}
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <motion.div
    variants={straggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] sm:justify-center">
      <motion.h1
      variants={textVariant(1.1)} 
      className={`${styles.heading2} ${styles.flexCenter}`}>
        Nuestro principal <br className="sm:block hidden" />
        equipo de trabajo
      </motion.h1>
      <div
        className="w-full md:mt-0 mt-6"
      >
        <motion.p 
        variants={fadeIn("up", "tween", 0.2, 1)}
        className={`${styles.paragraph} ${styles.flexCenter} text-white text-left max-w-[350px`}>
          Tu nueva manera de crear tus pagina web.
        </motion.p>
      </div>
    </motion.div>
    <motion.div
      variants={fadeIn("up", "tween", 0.2, 1)}
      className="lg:block hidden absolute -left-[-43%] top-[87%] z-30"
      >
        <img src="stamp.png" alt="stamp" className="w-[170px] h-[170px] object-contain" />
      </motion.div>
    <div className="flex flex-wrap justify-center   w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedbackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);6

export default Feedback;
{
  /*Codigo de arriba*/
}
{
  /* <section className={`${styles.paddings} relative z-10`}>
    
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-6`}
    >
      <motion.div
        variants={fadeIn("right", "tween", 0.2, 1)}
        className="flex-[0.5] lg:max-w-[370px] flex justify-end flex-col gradient-05 sm:p-8 p-4 rounded-[32px] border-[1px] border-[#6a6a6a] relative"
      >
        <div className="feedback-gradient" />
        <div>
          <h4 className="font-bold sm:text-[32px] text-[26px] sm:leadiong-[40px] leading-[36px] text-white">Peter Drucker</h4>
          <p className="mt-[8px] font-normal sm:text-[18px] text-[12px] sm:leading-[22px] leading-[16px] text-white">
          consultor de gestión | educador
          </p>
        </div>
        <p className="mt-[28px] font-normal sm:text-[24px] text-[18px] sm:leading-[45px] leading-[39px] text-white">
        “Cada vez que veas un negocio exitoso, fue porque alguna vez alguien tomó una decisión valiente”
        </p>
      </motion.div>
      <motion.div
      variants={fadeIn('left', 'tween', 0.2, 1)}
      className="relative flex-1 flex justify-center items-center"
      >
        <img src="/planet-09.png" alt="" className="w-full lg:h-[610px] h-auto min-h-[210px] object-cover rounded-[40px]" />
        <motion.div
      variants={zoomIn(0.4, 1)}
      className="lg:block hidden absolute -left-[10%] top-[-5%]"
      >
        <img src="stamp.png" alt="stamp" className="w-[170px] h-[170px] object-contain" />
      </motion.div>
      </motion.div>

    </motion.div>
    
  </section>*/
}
