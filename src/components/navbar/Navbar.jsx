import "./navbar.scss";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiGmail } from "react-icons/si";
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

export default function Navbar() {
  return (
    <div className="navbar">
      {/* Sidebar */}
      <Sidebar />
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Prakhar
        </motion.span>
        <div className="social">
          <a href="#">
            <FaLinkedin />
          </a>
          <a href="#">
            <FaGithub />
          </a>
          <a href="#">
            <FaXTwitter />
          </a>
          <a href="#">
            <SiGmail />
          </a>
        </div>
      </div>
    </div>
  );
}
