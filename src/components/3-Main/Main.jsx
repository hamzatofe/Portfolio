import "./Main.css";
import myProjects from "./myProjects";
import { useState } from "react";

import { FaLink } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaArrowRight } from "react-icons/fa6";

import { AnimatePresence, motion } from "framer-motion";

const Main = () => {
  const [currentActive, setcurrentActive] = useState("all");
  const [arr, setArr] = useState(myProjects);

  const handleClick = (buttonCategory) => {
    setcurrentActive(buttonCategory);
    const newArr = myProjects.filter((item) => {
      const ZZZ = item.category.find((myItem) => {
        return myItem === buttonCategory;
      });
      return ZZZ === buttonCategory;
    });

    setArr(newArr);
  };

  return (
    <main className="flex p-0! m-0!">
      <section className="left-section flex ">
        <button
          onClick={() => {
            setcurrentActive("all");
            setArr(myProjects);
          }}
          className={currentActive === "all" ? "active" : null}
        >
          all projects
        </button>

        <button
          onClick={() => {
            handleClick("css");
          }}
          className={currentActive === "css" ? "active" : null}
        >
          HTML & CSS
        </button>

        <button
          onClick={() => {
            setcurrentActive("js");
            handleClick("js");
          }}
          className={currentActive === "js" ? "active" : null}
        >
          JavaScript
        </button>
        <button
          onClick={() => {
            setcurrentActive("react");
            handleClick("react");
          }}
          className={currentActive === "react" ? "active" : null}
        >
          React & MUI
        </button>
        <button
          onClick={() => {
            setcurrentActive("node");
            handleClick("node");
          }}
          className={currentActive === "node" ? "active" : null}
        >
          Node & Express
        </button>
      </section>

      <section className="right-section flex gap-8  ">
        <AnimatePresence>
          {arr.map((item) => {
            return (
              <motion.article
                layout
                initial={{ transform: 'scale(0)' }}
                animate={{ transform: 'scale(1)' }}
                transition={{ duration: 0.9 }}
                key={item.imgPath}
                className="card"
              >
                <img width={230} src={item.imgPath} alt="" />
                <div style={{ width: "230px" }} className="box">
                  <h2 className="title">{item.title}</h2>
                  <p className="sub-title">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Inventore totam vitae, doloremque odit labore, et aspernatur
                    
                  </p>
                  <div className="flex icons">
                    <div style={{ gap: "1rem" }} className="flex">
                      <FaLink className="icon" />
                      <FaGithub className="icon" />
                    </div>
                    <a href="1" className="link flex">
                      more <FaArrowRight style={{ marginTop: "2px" }} />
                    </a>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </AnimatePresence>
      </section>
    </main>
  );
};

export default Main;
