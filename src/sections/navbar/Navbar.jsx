import LOGO from "./../../assets/logo.jpg";
import data from "./data";
import "./Navbar.css";
import { IoIosColorPalette } from "react-icons/io";
import { useModalContext } from "../../context/modalContext";
import { Link } from "react-scroll";

const Navbar = () => {
  const { showModalHandler } = useModalContext();

  return (
    <nav>
      <div className="container nav__container">
        <a href="index.html" className="nav__logo">
          <img src={LOGO} alt="Logo" />
        </a>
        <ul className="nav__menu">
          {data.map((itm) => (
            <li key={itm.id} className="nav__list">
              <Link
                activeClass="active"
                to={itm.link}
                spy={true}
                smooth={true}
                offset={-120}
                duration={500}
                className="nav__link"
              >
                {itm.title}
              </Link>
            </li>
          ))}
        </ul>
        <button id="theme__icon" onClick={() => showModalHandler()}>
          <IoIosColorPalette />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
