import react from "react";
import styles from "../styles";

const Button2 = ({styles}) => (
    <button
    type="button"
    className={`cursor-pointer hover:text-[#b4ff00] h-fit py-4 px-6 font-normal font-medium text-[18px] text-white bg-[#25618b] rounded-[32px] gap-[12px] outline-none ${styles}`}
    ><a href="/contact">Saber más</a>

    </button>
)

export default Button2;