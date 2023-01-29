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
    
    <div className="items-center justify-center flex-1">
    <img src="../ecommerce/adaptable.png" className="w-full h-full" alt="" />
    </div>
    
  </section>
)
export default Nuevo;