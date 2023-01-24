"use client";

import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
import { fadeIn } from "../../utils/motion";
import { straggerContainer } from "../../components";
const Abaut = () => (
  <section className={`${styles.paddings} relative`}>
    <motion.div
      variants={textVariant(2.6)}
      className="flex flex-row justify-center w-full text-center mt-[100px]"
    >
      <TitleText title={<>¿En qué creemos?</>} />
    </motion.div>
    <div className={`section relative pt-20 pb-8 md:pt-16 md:pb-0 `}>
      <div class="container xl:max-w-6xl mx-auto px-4">
        <div className="flex flex-row flex-wrap -mx-4 text-center">
          {/* item 1 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 border rounded-[30px] bg-glass-mor border-white/20 ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4">
                <img src="../branding/foco.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                IDEAS
              </h3>
              <p class="text-white">
              Una marca existe por un motivo y para servir a un propósito. Si no, mejor que no esté.
              </p>
            </div>
          </div>
          {/* item 2 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 border rounded-[30px] bg-glass-mor border-white/20  ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4">
                <img src="../branding/huella.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                IDENTIDAD
              </h3>
              <p class="text-white">
              Tiene que transmitir una personalidad y provocar. Hay que sentir algo cuando la vemos.
              </p>
            </div>
          </div>

          {/* item 3 */}
          <div className="flex-shrink w-full max-w-full px-4 sm:w-1/2 lg:w-1/3 lg:px-6 wow fadeInUp">
            <div className="px-12 py-8 mb-12 transition duration-300 rounded-[30px] bg-glass-mor border border-white/20  ease-in-out transform border-none hover:-translate-y-2">
              <div className="inline-block mb-4">
                <img src="../branding/pajaro.png" alt="" />
              </div>
              <h3 class=" uppercase text-lg leading-normal mb-2 font-semibold text-white">
                LIBERTAD
              </h3>
              <p class="text-white">
              Cuanto más libre es una marca en su comunicación, más puede decir, hacer y crecer.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <motion.div
    variants={textVariant(2.6)}
      className={`${styles.innerWidth} mx-auto flex  flex-col `}
      >
            <motion.div
      variants={straggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Podemos aportar nuestro know-how a tu marca y ayudarte a crecer.
Diseñemos juntos un camino, para que su comunicación inspire y transmita su personalidad única a tus clientes y al mundo.
      </motion.p>
    </motion.div>
    </motion.div>
  </section>
);

export default Abaut;
