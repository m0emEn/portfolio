import web from "../assets/web.svg";
import diam from "../assets/diamond.svg";
import time from "../assets/time.svg";
const Services = () => {
  return (
    <div className="services">
      <div className="titles">
        <h3>MY SERVICES</h3>
        <h1>
          Crafting stories through
          <br /> design and innovation
        </h1>
      </div>
      <div className="serviceCards">
        <div className="card">
          <img src={web} />
          <h3>WEBSITE DESIGN</h3>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui
          </p>
        </div>
        <div className="card">
          <img src={diam} />
          <h3>LOGO DESIGN</h3>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui
          </p>
        </div>
        <div className="card">
          <img src={time} />
          <h3>WEBSITE DEVELOPMENT</h3>
          <p>
            Nemo design enim ipsam voluptatem quim voluptas sit aspernatur aut
            odit auting fugit sed thisnquia consequuntur magni dolores eos
            designer heresm qui
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
