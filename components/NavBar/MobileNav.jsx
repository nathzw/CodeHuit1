import react, { useState } from "react";
import {BiChevronLeft} from "react-icons/bi"
const MobileNav = () => {
    const[toggle, setToggle] = useState(false)
  return (
    <div className={`bg-glass h-[96%] w-[20rem] rounded-3x1 ml-6 p-4 transition-all duration-500 border-solid border-glass relative`}>
        <div className="">
            <BiChevronLeft/>
        </div>
    </div>
  )

};

export default MobileNav;
