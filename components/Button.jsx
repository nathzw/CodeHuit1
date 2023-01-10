import React from "react";


const Button = ({ styles }) => (
    <button type="button" className={` h-fit py-4 px-6 font-normal font-medium text-[18px] text-white bg-[#25618b] rounded-[32px] gap-[12px] outline-none ${styles}`}>
      Hablemos
    </button>
  );
  
  export default Button;