// import {quotes} from '../assents/quotes.svg'
import { motion } from "framer-motion";
import { straggerContainer,} from "../utils/motion";
const FeedbackCard = ({ content, name, title, imgUrl, img2 }) => (
  <div className="flex justify-between flex-col px-5 py-5 rounded-[20px]  max-w-[300px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={img2} alt="double_quotes" className="w-[42.6px] h-[27.6px] object-contain" />
    <p className="font-poppins font-normal text-[18px] leading-[32.4px] text-white my-10">
      {content}
    </p>

    <div className="flex flex-row">
      <img src={imgUrl} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="flex flex-col ml-4">
        <h4 className="font-poppins font-semibold text-[20px] leading-[32px] text-white">
          {name}
        </h4>
        <p className="font-poppins font-normal text-[16px] leading-[24px] text-white">
          {title}
        </p>
      </div>
    </div>
  </div>
);


export default FeedbackCard;