"use client";

import React from "react";
import styles from "../styles";
import { TitleText } from "../components";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const AbautFin = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.innerWidth} mx-auto text-center`}>
      <TitleText
        title={<>Diseñamos y desarrollamos páginas web de máxima calidad</>}
      />
      <motion.p
        variants={fadeIn("up", "tween", 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white"
      >
        Una página web es un espacio donde puedes contar la historia de tu
        empresa, mostrar lo que ofreces y por qué lo ofreces. En CODE HUIT,
        queremos que destaques ofreciendo un diseño web a la altura de tu
        audiencia y de tus objetivos. Si no destacas, ¿cómo te van a recordar
        tus clientes? Como agencia de diseño web te ayudamos a conseguir tus
        objetivos.
      </motion.p>
    </div>

  </section>
);

export default AbautFin;
