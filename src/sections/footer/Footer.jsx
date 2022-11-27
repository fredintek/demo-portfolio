import { links, socials } from "./data";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer__container">
        <ul className="nav__menu">
          {links.map((flink) => (
            <li key={flink.id}>
              <a href={flink.link}>{flink.title}</a>
            </li>
          ))}
        </ul>

        <div className="footer__socials">
          {socials.map((social) => (
            <a
              key={social.id}
              href={social.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="footer__copyright">
        <small>2022 FREDINTEK &copy; All Rights Reserved</small>
      </div>
    </footer>
  );
};

export default Footer;
