import data from "./data";
import "./FloatingNav.css";
import { Link } from "react-scroll";

const FloatingNav = () => {
  return (
    <ul id="floating__nav">
      {data.map((item) => (
        <Link
          activeClass="active"
          to={item.link}
          spy={true}
          smooth={true}
          offset={-60}
          duration={500}
          key={item.id}
          className="floating__nav-item"
        >
          {item.icon}
        </Link>
      ))}
    </ul>
  );
};

export default FloatingNav;
