import pfp from "../assets/pfp.png";
import { TypeAnimation } from "react-type-animation";
import { HiDownload } from "react-icons/hi";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
const Banner = () => {
  const variants = {
    visible: { opacity: 1, x: 0, transition: { duration: 2 } },
    hidden: { opacity: 0, x: -20 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="banner">
      <motion.div
        ref={ref}
        animate={controls}
        initial="hidden"
        variants={variants}
        className="bannerDescription"
      >
        <h1>
          HI, I'M MOEMEN!
          <br />
          CREATIVE{" "}
          <span>
            {
              <TypeAnimation
                sequence={[
                  // Same substring at the start will only be typed out once, initially
                  "DESIGNER",
                  1000, // wait 1s before replacing "Mice" with "Hamsters"
                  "DEVELOPPER",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            }
          </span>
        </h1>
        <p>
          I'm a passionate UI/UX designer with a mission to create delightful
          and intuitive digital experiences. With a strong foundation in design
          principles and a keen eye for detail, I specialize in translating
          complex ideas into user-friendly interfaces that captivate and engage.
        </p>
        <button className="mainBtn">
          Download CV <HiDownload />
        </button>
      </motion.div>

      <div className="profilePic">
        <img src={pfp} alt="img" />
      </div>
    </div>
  );
};

export default Banner;
