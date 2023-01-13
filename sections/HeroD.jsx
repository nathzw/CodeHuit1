"use client";
import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { textVariant } from "../utils/motion";
import { TitleText } from "../components";

const HeroD = () =>(
    <section className="mb-40 mt-40">
    <div className="container mx-auto px-6 md:px-12 xl:px-32">
      <div className="text-center text-white">
        <motion.div 
        variants={textVariant(2.6)}
        className="block rounded-lg shadow-lg px-6 py-12 md:py-16 md:px-12">
          <TitleText className="text-5xl md:text-6xl xl:text-7xl font-bold tracking-tight mb-12 uppercase" title="DESARROLLO WEB" />
        </motion.div>
      </div>
    </div>
    </section>
)

export default HeroD;