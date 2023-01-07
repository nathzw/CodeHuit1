import react from "react";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
const MobileNavContainer = ({name, Link}) =>{
    return(
        <div className="flex flex-col items-center py-2">
            <Link
            to={Link}
            spy={true}
            smooth={true}
            hashSpy={true}
            offse={50}
            duration={500}
            isDynamic={true}
            ignoreCancelEvents={false}
            spyThrottle={500}

            >
                <motion.div className="flex flex-col items-center justify-center"
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                transition={{type: "tween", diration: 1}}
                >
                     <div className="pt-4">
                        <h3 className="text-sm font-normal no-underline align-middle tracking-wide normal-case leading-none text-white">{name}</h3>
                     </div>
                     
                </motion.div>
            
            </Link>
                    </div>
    )
}

export default MobileNavContainer;