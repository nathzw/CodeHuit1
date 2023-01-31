import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { straggerContainer } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import { TitleText } from "../../components";
import { planetVariants } from "../../utils/motion";

const WhatsNew = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={planetVariants("left")}
        className={`${styles.flexCenter}`}
      >
        <img
          src="../ecommerce/celu3.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Confía en un equipo que lo hace. </>}></TitleText>
        <motion.p
          className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
          Ofrecemos una solución de tienda digital personalizada que es única y
          puede construirse de acuerdo con sus necesidades.
        </motion.p>
      </motion.div>
    </motion.div>
  </section>
);

export default WhatsNew;
