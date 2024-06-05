import web from "../assets/web.svg";
import diam from "../assets/diamond.svg";
import time from "../assets/time.svg";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const ServiceCards = () => {
  const variants = {
    visible: (i) => ({
      opacity: 1,
      x: 0,
      transition: {
        duration: 2,
        delay: i * 0.2,
      },
    }),
    hidden: { opacity: 0, x: -20 },
  };

  const controls = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      controls.start((i) => variants.visible(i));
    }
  }, [controls, inView]);

  return (
    <div className="serviceCards">
      {[web, diam, time].map((src, index) => (
        <motion.div
          key={index}
          ref={ref}
          custom={index}
          animate={controls}
          initial="hidden"
          variants={variants}
          className="card"
        >
          <img src={src} alt="service" />
          <h3>
            {["WEBSITE DESIGN", "LOGO DESIGN", "WEBSITE DEVELOPMENT"][index]}
          </h3>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default ServiceCards;
