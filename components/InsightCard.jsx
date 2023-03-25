"use client";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const InsightCard = ({ imgUrl, title, subtitle, index }) => (
  <motion.div
    variants={fadeIn("up", "spring", index * 0.5, 1)}
    className="flex flex-col gap-4 md:flex-row"
  >
    <img
      src={imgUrl}
      alt="planet-01"
      className="md:w-[270px] w-full h-[250px] rounded-[32px] object-cover"
    />
    <div className="flex flex-row items-center w-full">
      <div>
        <div className="flex-1 md:ml-[62px] flex felx-col max-w-[400px]">
          <h4 className="font-normal lg:text-[32px] text-[26px] text-white">{title}</h4>
        </div>
        <div className="flex-1 md:ml-[62px] flex felx-col max-w-[650px]">
          <p className="mt-[16px] font-normal lg:text-[20px] text-[14px] text-secondary-white">{subtitle}</p>
        </div>
      </div>


      <div className="lg:flex hidden items-center justify-center w-[60px] h-[60px] rounded-full bg-transparent border-[1px] border-white">
        <a href="../contact.html" className="w-[30%] h-[30%] object-contain"><img src="arrow.svg" alt="arrow"  /></a>
      </div>
    </div>
  </motion.div>
);

export default InsightCard;
