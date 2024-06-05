import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import ServiceCards from "./ServiceCards";

const Services = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true });

  useEffect(() => {
    if (inView) {
      controls.start((i) => ({
        opacity: 1,
        y: 10,
        transition: { duration: 0.3, delay: i * 0.07 },
      }));
    }
  }, [controls, inView]);

  const text = "MY SERVICES";

  return (
    <div className="services">
      <div className="titles">
        <motion.div ref={ref} initial="hidden">
          {text.split("").map((char, index) => (
            <motion.span
              key={index}
              custom={index}
              initial={{ opacity: 0, y: -50 }}
              animate={controls}
              className="subtitle"
            >
              {char}
            </motion.span>
          ))}
        </motion.div>

        <h1>
          Crafting stories through
          <br /> design and innovation
        </h1>
      </div>
      <ServiceCards />
    </div>
  );
};

export default Services;
