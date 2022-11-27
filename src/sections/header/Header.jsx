import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import data from "./data";
import "./Header.css";
import HeaderImage from "./../../assets/header.png";

const Header = () => {
  useEffect(() => {
    AOS.init({ duration: 2000, offset: 50 });
  }, []);

  return (
    <header id="header">
      <div className="container header__container">
        <div className="header__profile" data-aos="fade-in">
          <img src={HeaderImage} alt="my photo" />
        </div>

        <h3 data-aos="fade-up">Alfred Arinze</h3>
        <p data-aos="fade-up">
          You are one click away from building your dream website, web
          application or mobile application. Send me the details of your project
          for a modern, mobile responsive and highly performant application
          today!
        </p>

        <div className="header__cta" data-aos="fade-up">
          <a href="#contact" className="btn primary">
            Let's Talk
          </a>
          <a href="#portfolio" className="btn light">
            My Work
          </a>
        </div>

        <div className="header__socials">
          {data.map((item) => (
            <a
              key={item.id}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.icon}
            </a>
          ))}
        </div>
      </div>
    </header>
  );
};

export default Header;
