import React from "react";
import styles from "../../styles";

import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { TitleText } from "../../components";
import { planetVariants } from "../../utils/motion";
import straggerContainer from "../../utils/motion"


const Finish = () =>(
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
          src="../sistema/fin1.png"
          alt=""
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
      <motion.div
        variants={fadeIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] flex justify-center flex-col text-center"
      >
        <TitleText title={<>Software como servicio</>}></TitleText>
        <motion.p
        className="mt-[8px] font-normal text-[28px] text-center sm:text-[23px] text-secondary-white"
        variants={fadeIn("up", "tween", 0.2, 1)}
        >Es un modelo de distribución de software donde el soporte lógico y los datos que maneja se alojan en servidores de una compañía de tecnologías de información y comunicación (TIC), a los que se accede vía Internet desde un cliente</motion.p>
        <motion.div 
        variants={fadeIn("left", "tween", 0.2, 1)}
        className={`${styles.flexCenter} mt-[32px]`}>
        
        </motion.div>
        
      </motion.div>
    </motion.div>
    {/* whats new */}
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

          <ul className="mt-[8px] font-normal text-[28px] text-left sm:text-[23px] text-white list-disc">
            <li>Menores costos de infraestructura. En cualquier dispositivo con navegador se accede al sistema.</li>
            <li>Sistema constantemente actualizado con las últimas novedades.</li>
            <li>Disponibilidad y seguridad de la información por medio de una empresa especializada.</li>
            <li>Se le permite al cliente completa flexibilidad en el uso de los sistemas operativos de su preferencia, o al cual pueda tener acceso.</li>
          </ul>
        
        <div className={`${styles.flexCenter} mt-[20px]`}>
          
        </div>
      </motion.div>
      <motion.div
        variants={planetVariants("right")}
        className={`flex-1 ${styles.flexCenter}`}
      >
        <img
          src="../sistema/fin2.png"
          alt="mj"
          className="w-[90%] h-[90%] object-contain"
        />
      </motion.div>
    </motion.div>
    </section>
)
export default Finish;