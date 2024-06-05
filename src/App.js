import React, { useState } from "react";
import "./App.css";
import About from "./components/About";
import Banner from "./components/Banner";
import Navbar from "./components/Navbar";
import ScrollTracker from "./components/ScrollTracker";
import ScrollTrackerMobile from "./components/ScrollTrackerMobile";
import Services from "./components/Services";
import useMouse from "@react-hook/mouse-position";
import { motion } from "framer-motion";
import Contact from "./components/Contact";
import Skills from "./components/Skills";
import Footer from "./components/Footer";

function App() {
  const ref = React.useRef(null);
  const [cursorVariant, setCursorVariant] = useState("default");

  const mouse = useMouse(ref, {
    enterDelay: 100,
    leaveDelay: 100,
  });

  let mouseXPosition = -35;
  let mouseYPosition = 0;

  if (mouse.x !== null) {
    mouseXPosition = mouse.clientX;
  }

  if (mouse.y !== null) {
    mouseYPosition = mouse.clientY;
  }

  const variants = {
    default: {
      opacity: 1,
      height: 30,
      width: 30,
      fontSize: "16px",
      backgroundColor: "rgba(0,0,0,0)",
      border: "2px solid gray",

      x: mouseXPosition,
      y: mouseYPosition,
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
    navbar: {
      height: 60,
      width: 60,
      backgroundColor: "#6f6f6f61",
      x: mouseXPosition - 32,
      y: mouseYPosition - 32,
      transition: {
        type: "spring",
        mass: 0.1,
      },
    },
  };
  const spring = {
    type: "spring",
    stiffness: 1000,
    damping: 10,
  };
  function navbarEnter(event) {
    setCursorVariant("navbar");
  }

  function navbarLeave(event) {
    setCursorVariant("default");
  }

  return (
    <div ref={ref}>
      <motion.div
        variants={variants}
        className="circle"
        animate={cursorVariant}
        transition={spring}
      ></motion.div>

      <Navbar onMouseEnter={navbarEnter} onMouseLeave={navbarLeave} />
      <Banner />
      <Services />
      <About />
      <Contact />
      <Skills />
      <Footer />
      <ScrollTrackerMobile />
    </div>
  );
}

export default App;
