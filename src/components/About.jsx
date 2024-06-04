import { HiDownload } from "react-icons/hi";
const About = () => {
  return (
    <div className="about">
      <div className="aboutDescription">
        <h3>ABOUT ME</h3>
        <h1>
          Transforming visions into
          <br />
          exceptional portfolios
        </h1>
        <div>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui ratione
          </p>
          <button className="mainBtn">
            Download CV <HiDownload />
          </button>
        </div>
      </div>
      <div className="pic">
        <img src="https://placehold.co/395x475" alt="img" />
      </div>
    </div>
  );
};

export default About;
