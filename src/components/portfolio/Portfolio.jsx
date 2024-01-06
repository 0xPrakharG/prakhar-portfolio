import { useRef } from "react";
import "./portfolio.scss";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";

const items = [
  {
    id: 1,
    title: "SocioConnect",
    img: "./socioconnect.png",
    desc: "SocioConnect is a social media networking website. Its a MERN stack website. User can create, like and comment on post, send and recieve friend requests.",
    code: "https://github.com/0xPrakharG/socioconnect",
  },
  {
    id: 2,
    title: "AdminOps",
    img: "./adminops.png",
    desc: "This is admin dashboard made with react.js. User can maintain the admin data in the form of graphs. schedule events in calendar, manage tasks in the kanban board, arrange the name of the employees in a form of table which allows filtering, sorting and pagination.",
    code: "https://github.com/0xPrakharG/admin_dashboard",
    demo: "https://admin-dashboard-0xprakharg.vercel.app",
  },
  {
    id: 3,
    title: "Sumz",
    img: "./aisummarizer.png",
    desc: "This project helps in summarizing the given blog link in a certain number of words. This is a React project. I have used Rapid API to summarize the blogs.",
    code: "https://github.com/0xPrakharG/Ai_Summarizer",
    demo: "https://ai-summarizer-five.vercel.app/",
  },
  {
    id: 4,
    title: "Atmos",
    img: "./atmos.png",
    desc: "Atmos is a basic airline 3D website. Its made with React Three Fibre. User have to scroll through to get the complete info of the airline and a great experience.",
    code: "https://github.com/0xPrakharG/Atmos-rtf",
    demo: "https://atmos-rtf.vercel.app/",
  },
  {
    id: 5,
    title: "Todo List App",
    img: "./todo.png",
    desc: "This is a todo list creating app. This is developed with next.js. User can create a list of task that he/she wants to tak up for the day. User can also edit and delete the entry in the list. The data of this app is stored in the json server which is hosted online so the data does not gets lost.",
    code: "https://github.com/0xPrakharG/todo_next13",
    demo: "https://todo-next13.vercel.app/",
  },
];

const Single = ({ item }) => {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
  });

  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section>
      <div className="container">
        <div className="wrapper">
          <div className="imgContainer" ref={ref}>
            <img src={item.img} alt="" />
          </div>
          <motion.div className="textContainer" style={{ y }}>
            <h2>{item.title}</h2>
            <p>{item.desc}</p>
            <div className="buttonContainer">
              {item.demo && (
                <a href={item.demo} target="_blank">
                  Demo
                </a>
              )}
              <a href={item.code} target="_blank">
                Code
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default function Portfolio() {
  const ref = useRef();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["end end", "start start"],
  });

  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  return (
    <div className="portfolio" ref={ref}>
      <div className="progress">
        <h1>Featured Works</h1>
        <motion.div style={{ scaleX }} className="progressBar"></motion.div>
      </div>
      {items.map((item) => (
        <Single item={item} key={item.id} />
      ))}
    </div>
  );
}
