"use client";

import React from "react";
import styles from "../styles";
import { TitleText } from "../components";


const abautM = () => (
<div className="text-white">
    <section className={`${styles.topPaddings} relative z-10`}>
        <div className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}>
            <TitleText title={<>MARQUETING DIGITAL</>}></TitleText>
        </div>
    </section>
</div>

)

export default abautM;