import "./About.css";
import AboutImage from "./../../assets/about.jpg";
import CV from "./../../assets/cv.pdf";
import { HiDownload } from "react-icons/hi";
import { Card } from "./../../components";
import data from "./data";

const About = () => {
  return (
    <section id="about" data-aos="fade-in">
      <div className="container about__container">
        <div className="about__left">
          <div className="about__portrait">
            <img src={AboutImage} alt="my photo" />
          </div>
        </div>
        <div className="about__right">
          <h2>About Me</h2>
          <div className="about__cards">
            {data.map((item) => (
              <Card key={item.id} className="about__card">
                <span className="about__card-icon">{item.icon}</span>
                <h5>{item.title}</h5>
                <small>{item.desc}</small>
              </Card>
            ))}
          </div>
          <p>
            Building projects my clients love has always been my passion. Being
            in the web development industry for over 3 years and serving more
            than 70 happy clients worldwide, I'm always motivated to do more!
          </p>
          <p>
            Hi, my name is Alfred Arinze from Nigeria, based in Cyprus. I'm a
            full-stack web developer with an on-going bachelors degree in
            mathematics. My top priority is to get your business online right
            away, giving you industry-standard design and all functionality you
            need to operate smoothly online. Get in touch today with the details
            of your project let's get started! Check out my resume below!
          </p>

          <a href={CV} download className="btn primary">
            Download Cv <HiDownload />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
