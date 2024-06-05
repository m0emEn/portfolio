import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Skills = () => {
  const skills = [
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "100%" },
    { name: "JavaScript", percentage: "90%" },
    { name: "React", percentage: "85%" },
    { name: "NodeJS", percentage: "78%" },
    { name: "Express", percentage: "80%" },
    { name: "MongoDB", percentage: "87%" },
    { name: "Figma", percentage: "95%" },
    { name: "Illustrator", percentage: "72%" },
    { name: "Photoshop", percentage: "93%" },
  ];

  return (
    <div className="skills">
      <div className="titles">
        <h3>MY Skills</h3>
        <h1>
          Showcasing my
          <br /> talent and experience
        </h1>
      </div>
      <div className="skill-container">
        <AnimatePresence initial={false}>
          {skills.map((skill, index) => (
            <SkillBar key={index} skill={skill} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
};

const SkillBar = ({ skill }) => {
  const { name, percentage } = skill;
  const [ref, inView] = useInView();

  const barVariants = {
    hidden: { width: 0 },
    visible: { width: percentage, transition: { duration: 1 } },
  };

  return (
    <div className="skill-item">
      <p>{name}</p>
      <p>{percentage}</p>
      <motion.div
        ref={ref}
        className="skill-bar"
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        exit="hidden"
        variants={barVariants}
      ></motion.div>
    </div>
  );
};

export default Skills;
