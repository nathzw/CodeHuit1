"use client"
import styles from "../styles";
import Button from "./Button";
import { motion } from "framer-motion";
import { footerVariants } from "../utils/motion";

const CTA1 = () => (
    <motion.div
    variants={footerVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.paddings} py-4 relative`}>
    <section className={` ${styles.paddings}  sm:flex-row flex-col bg-black-gradient-2 rounded-[20px] box-shadow`}>
      <div className="flex-1 flex flex-col">
        <h2 className={`${styles.heading2} sm:flex justify-center text-center`}>¡No ponemos límite a tu diseño y desarrollo web!
Somos expertos en conseguir resultados</h2>
      </div>
  
      <div className={`${styles.flexCenter} sm:ml-10 ml-0 sm:mt-0 mt-10`}>
        <Button />
      </div>
    </section>
    </motion.div>
)
export default CTA1;