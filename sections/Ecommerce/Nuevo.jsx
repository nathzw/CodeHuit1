import react from "react";
import styles from "../../styles";
import { motion } from "framer-motion";
import { textVariant } from "../../utils/motion";
const Nuevo = () => (
    <section className={`${styles.paddings} relative`}>
    <motion.div
          variants={textVariant(2.6)}
          className={`${styles.flexCenter} mx-auto flex  flex-col `}
    >
    </motion.div>
    
    <div className={`${styles.flexCenter}`}>
    <img src="../ecommerce/adaptable.png" className="w-[70%] h-[70%]" alt="" />
    </div>
    
  </section>
)
export default Nuevo;