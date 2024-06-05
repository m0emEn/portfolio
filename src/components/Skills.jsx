const Skills = () => {
  const skills = [
    { name: "HTML", percentage: "100%" },
    { name: "CSS", percentage: "100%" },
    { name: "JavaScript", percentage: "90%" },
    { name: "React", percentage: "85%" },
    { name: "NodeJS", percentage: "78%" },
    { name: "Express", percentage: "80%" },
    { name: "MongoDB", percentage: "90%" },
    { name: "Figma", percentage: "95%" },
    { name: "Illustrator", percentage: "70%" },
    { name: "Photoshop", percentage: "100%" },
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
        {skills.map((skill, index) => (
          <div className="skill-item" key={index}>
            <p>{skill.name}</p>
            <p>{skill.percentage}</p>
            <div
              className="skill-bar"
              style={{ width: skill.percentage }}
            ></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
