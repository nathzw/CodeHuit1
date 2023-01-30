"use client";
import { feedback } from "../constants";
import { motion } from "framer-motion";
import styles from "../styles";
import { fadeIn, textVariant, zoomIn} from "../utils/motion";
import FeedbackCard from "../components/FeedbackCard";
import {straggerContainer} from  "../utils/motion";
import { TitleText } from "../components";
const Feedback = () => (
  <section
    id="clients"
    className={`${styles.paddings} ${styles.flexCenter}  relative flex-col`}
  >
    <div className="absolute z-[0] w-[50%] h-[50%] -right-[50%] rounded-full blue__gradient bottom-40" />
    <motion.div
    variants={straggerContainer}
    initial="hidden"
    whileInView="show"
    viewport={{ once: false, amount: 0.2 }}
    className="w-full flex justify-between items-center md:flex-row flex-col sm:mb-16 mb-6 relative z-[1] sm:justify-center">
      <TitleText title={<>Nuestro principal equipo de trabajo</>}></TitleText>
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
);

export default Feedback;