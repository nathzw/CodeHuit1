
import React from "react";
import styles from "../../styles";
import { TitleText } from "../../components";
const Hero = () => (
    <section className={`${styles.paddings} relative`}>
        <div className={`${styles.flexCenter}`}>
        <TitleText title={<>POLITICAS DE PRIVACIDAD</>} />
        </div>
    </section>
);

export default Hero;