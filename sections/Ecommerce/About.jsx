import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";

const About = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.flexCenter} text-center`}>
      <TitleText
        title={
          <>
            ¿Por qué crear tu tienda E-commerce con CODE
            <span className="color-code">HUIT</span>?
          </>
        }
      />
    </div>
    <div className={`${styles.flex} text-center`}>
      <p className="text-white text-center sm:text-[32px] text-[20px]">
      Hace años que desarrollamos sitios e-commerce para clientes de diferentes
      rubros y la experiencia hasta aquí nos ha dado un recorrido amplio y
      diverso por las necesidades de las empresas. Sabemos que el desarrollo web
      es una parte clave y fundamental en el desarrollo de un plan digital que
      comienza aquí pero que luego continúa con una estrategia para lograr el
      posicionamiento de tu web, poder llegar a tu público .
      </p>
    </div>
  </section>
);
export default About;
