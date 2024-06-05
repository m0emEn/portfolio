import project from "../assets/project.svg";
import client from "../assets/client.svg";
import React, { useEffect } from "react";
import { useAnimation, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const Contact = () => {
  const variants = {
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: { duration: 1, delay: 0.2 },
    },
    hidden: { opacity: 0, y: 20, skewY: 1 },
  };
  const controls = useAnimation();
  const [ref, inView] = useInView();
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);
  return (
    <div className="contact">
      <div className="description">
        <div className="title">
          <h1>
            Design <span>and Innovation</span>
          </h1>
        </div>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          auting fugit sed thisnquia consequuntur magni dolores eos designer
          heresm qui ratione voluptatem sequi nesciuNeque porro quisquam est,
          oursqui dolorem ipsum quia dolor sit amet consectetur, adipisci velit,
          sed quia non numquam
        </p>
        <div className="stats">
          <div className="stat">
            <img src={project} alt="" />
            <h4 className="statCounter">
              <CountUp end={35} enableScrollSpy={true} />+
            </h4>
            <p>Complete Projects</p>
          </div>
          <div className="stat">
            <img src={client} alt="" />
            <h4 className="statCounter">
              <CountUp end={24} enableScrollSpy={true} />+
            </h4>
            <p>Client Review</p>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <motion.h1
          ref={ref}
          animate={controls}
          initial="hidden"
          variants={variants}
        >
          GET IN TOUCHE
        </motion.h1>
        <p>
          Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
          auting fugit sed thisnquia consequuntur magni dolores eos designer
        </p>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" autoComplete={"false"} />
        <input type="number" placeholder="Your Number" />
        <textarea placeholder="Message" />
        <button className="mainBtn">Submit Now</button>
      </div>
    </div>
  );
};

export default Contact;
