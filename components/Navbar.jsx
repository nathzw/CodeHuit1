"use client";
import { motion } from "framer-motion";
import styles from "../styles";
import MobileNav from "./NavBar/MobileNav";

const Navbar = () => {
return(
  <div className="w-full h-screen bg-black object-cover flex items-center">
    <MobileNav></MobileNav>
  </div>
)
};
export default Navbar;
