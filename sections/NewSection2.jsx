import React from "react";
import styles from "../styles";
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";
const NewSection2 = () =>(
    <section className={`${styles.paddings} relative bgBlanco`}>
<div>
<motion.p
          className="mt-[-108px] font-normal text-[28px] text-center sm:text-[23px] text-black"
          variants={fadeIn("up", "tween", 0.2, 1)}
        >
         El diseño y desarrollo de páginas web no es un proceso que se deba dejar a la improvisación, sino que debe planificarse muy bien. En CODE HUIT desarrollamos una estrategia adecuada a la marca, donde marcaremos los pasos y objetivos a seguir. Una imagen llamativa no es suficiente. Hay que tener en cuenta la generación de ventas y tráfico, algo que se logra con estrategias de marketing específicas y avanzadas. Nuestra agencia no sólo diseña webs, sino que te ayuda al crecimiento de tu página, consiguiendo captar tráfico y ventas gracias a una buena planificación. Algunos puntos destacados de la ruta que llevamos a cabo a la hora de diseñar una web:

        </motion.p>
</div>
    </section>
)

export default NewSection2;