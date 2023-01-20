import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";

const NewSistem = () => (
  <section className={`${styles.paddings} relative`}>
    <div
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TitleText title={<>Sistemas disponibles</>} />
      <p className="mt-[8px] font-normal sm:text-[32px] text-[20px] text-center text-secondary-white">
      CODE HUIT ofrece una serie de módulos que le permiten enfocarse en un área de su negocio y explotar al máximo sus beneficios
      </p>
    </div>
  </section>
);

export default NewSistem;
