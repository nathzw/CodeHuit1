import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
import { ParrafoT } from "../../components/CustomTexts";
const Hero = () => (
  <section className={`${styles.paddings} relative`}>
    <div className={`${styles.flexCenter}`}>
      <TitleText title={<>POLITICAS DE PRIVACIDAD</>} />
    </div>
    <div className={`${styles.flexCenter} text-center`}>
      <TitleText
        title={
          <>Qué datos personales recopilamos de los visitantes y por qué.</>
        }
      />
    </div>
    <div className={`${styles.flexStart}`}>
        <ParrafoT title={<>última actualización: 02/02/2023</>} />
    </div>
  </section>
);

export default Hero;
