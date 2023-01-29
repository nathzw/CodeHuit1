import React from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import {straggerContainer} from "../../utils/motion"
import { fadeIn } from "../../utils/motion";
import { TitleText } from "../../components";
import { planetVariants } from "../../utils/motion";
import Button2 from "../../components/Button2";
const GetStart = () => (
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
          src="../ecommerce/celu1.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>La Mejor Forma</>}></TitleText>
        <motion.p
        className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        variants={fadeIn("up", "tween", 0.2, 1)}
        >Mostrá tus productos con una tienda online. Que la gente pueda comprar tus productos desde cualquier lugar en cualquier momento y sea mas fácil que nunca hacerlo</motion.p>
      </motion.div>
    </motion.div>
    {/* item 2 */}
    <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: "false", amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto flex lg:flex-row flex-col gap-8`}
    >
      <motion.div
        variants={fadeIn("left", "tween", 0.2)}
        className="flex-[0.75] flex justify-center text-center flex-col"
      >
        <TitleText title={<>Ventajas</>}></TitleText>
        <motion.p
          variants={fadeIn("up", "tween", 0.2, 1)}
          className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        >
          Te ayudará a caricaturizar la venta de tus productos, te proporciona las herramientas necesarias para desarrollar un negocio digital y convertir clientes que pueden convertirse en tu fuente de ingresos.
        </motion.p>

      </motion.div>
      <motion.div
      variants={planetVariants("right")}
      className={`flex-1 ${styles.flexCenter} `}
      >
        <img src="../ecommerce/celu2.png" alt="mj" className="w-[90%] h-[90%] object-contain" />

      </motion.div>

    </motion.div>
    </section>
)

export default GetStart;