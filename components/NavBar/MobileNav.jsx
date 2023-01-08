import react from "react";
import { Link } from "react-scroll";
import { RxCross1 } from "react-icons/rx";
const MobileNav = ({showMenu, active}) => {
  return (
    
      <ul className={active ? 'flex-col flex items-center fixed inset-0 left-1/2 uppercase bg-white/1 z-40 gap-8 justify-center backdrop-blur-md hover-[#b4ff00] hover:5-[#b4ff00] md:hidden p-8' : 'hidden'}>
        <RxCross1 onClick={showMenu} className="cursor-pointer color-[#b4ff00]" />
        <li className="cursor-pointer hover:text-[#b4ff00]">
          <Link to="/Explore">home</Link>
        </li>
        <li className="cursor-pointer hover:text-[#b4ff00]">
          <Link to="footer.jsx">home</Link>
        </li>
        <li className="cursor-pointer hover:text-[#b4ff00]">
          <Link to="/">home</Link>
        </li>
        <li className="cursor-pointer hover:text-[#b4ff00]">
          <Link to="/">home</Link>
        </li>
      </ul>
    
  );
};
export default MobileNav;