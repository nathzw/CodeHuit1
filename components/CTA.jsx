"use client";

import styles from "../styles";
import Button from "./Button";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";
const CTA = () => (
  <motion.div
  variants={footerVariants}
  initial="hidden"
  whileInView="show"
  className={`${styles.paddings} py-4 relative`}>
  <section className={` ${styles.paddings}  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
    <div className="flex flex-col flex-1">
      <h2 className={`${styles.heading2} sm:flex justify-center`}>¡Queremos saber que estas ideando!</h2>
      <p className={`${styles.flexCenter} w-full  sm:flex justify-center  mt-5 text-white mb-4 `}>
      Todo lo que necesitas para tu negocio y hacer crecer tu negocio en cualquier parte del planeta.
      </p>
    </div>

    <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
      <Button />
    </div>
  </section>
  </motion.div>
);

export default CTA;
