import project from "../assets/project.svg";
import client from "../assets/client.svg";

const Contact = () => {
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
            <img src={project} />
            <h4 className="statCounter">35+</h4>
            <p>Complete Projects</p>
          </div>
          <div className="stat">
            <img src={client} />
            <h4 className="statCounter">24+</h4>
            <p>Client Review</p>
          </div>
        </div>
      </div>
      <div className="contactForm">
        <h1>GET IN TOUCHE</h1>
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
