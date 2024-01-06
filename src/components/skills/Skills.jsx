import "./skills.scss";
import { motion } from "framer-motion";

const variants = {
  initial: {
    x: -500,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};

const skills = [
  {
    id: 1,
    name: "NextJS",
    img: "./skills/next.svg",
  },
  {
    id: 2,
    name: "ReactJS",
    img: "./skills/react.svg",
  },
  {
    id: 3,
    name: "Typescript",
    img: "./skills/ts.svg",
  },
  {
    id: 4,
    name: "Javascript",
    img: "./skills/js.svg",
  },

  {
    id: 5,
    name: "NodeJS",
    img: "./skills/node.svg",
  },
  {
    id: 6,
    name: "MongoDB",
    img: "./skills/mongodb.svg",
  },
  {
    id: 7,
    name: "ExpressJS",
    img: "./skills/express.svg",
  },
  {
    id: 8,
    name: "HTML",
    img: "./skills/html.svg",
  },
  {
    id: 9,
    name: "CSS",
    img: "./skills/css.svg",
  },
  {
    id: 10,
    name: "Tailwind CSS",
    img: "./skills/tailwind.svg",
  },
  {
    id: 11,
    name: "mySql",
    img: "./skills/mysql.svg",
  },
  {
    id: 12,
    name: "Firebase",
    img: "./skills/firebase.svg",
  },
  {
    id: 13,
    name: "MUI",
    img: "./skills/mui.svg",
  },
  {
    id: 14,
    name: "Figma",
    img: "./skills/figma.svg",
  },
  {
    id: 15,
    name: "Bootstrap",
    img: "./skills/bootstrap.svg",
  },
];
export default function Skills() {
  return (
    <div className="skills">
      <motion.h1 variants={variants} initial="initial" whileInView="animate">
        Skills
      </motion.h1>
      <motion.div
        variants={variants}
        initial="initial"
        whileInView="animate"
        className="skillContainer"
      >
        {skills.map((skill) => (
          <motion.div className="icons" variants={variants} key={skill.id}>
            <img src={skill.img} alt={skill.name} />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}
