import { useState } from "react";
import Links from "./links/Links";
import "./sidebar.scss";
import ToggleBotton from "./toggleButton/toggleBotton";
import { motion } from "framer-motion";

const variants = {
  open: {
    clipPath: "circle(850px at 50px 50px)",
  },
  closed: {
    clipPath: "circle(30px at 50px 50px)",
    transition: {
      delay: 0.3,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Sidebar() {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? "open" : "closed"}>
      <motion.div className="bg" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBotton setOpen={setOpen} />
    </motion.div>
  );
}
