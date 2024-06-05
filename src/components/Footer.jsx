import logo from "../assets/logo.png";
import { FaRegCopyright } from "react-icons/fa";

const Footer = () => {
  return (
    <footer>
      <div className="brand">
        <img src={logo} alt="logo" />
        <h3>
          MOEMEN <FaRegCopyright /> copyright all rights reserved
        </h3>
      </div>
    </footer>
  );
};

export default Footer;
