import Link from "next/link";
import s from "../styles/landing.module.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Landing = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000, delay: 200 });
    AOS.refresh();
  }, []);
  return (
    <div className={s.landing}>
      <div className={s.navBar} data-aos="fade-down">
        <h1>
          atharva <div></div>
        </h1>
        <div>
          <h4
            onClick={() => document.getElementById("Projects").scrollIntoView()}
          >
            work
          </h4>
          <h4
            onClick={() => document.getElementById("Skills").scrollIntoView()}
          >
            skills
          </h4>
          <h4
            onClick={() => document.getElementById("Contacts").scrollIntoView()}
          >
            contact
          </h4>
        </div>
      </div>
      <div
        className={s.background}
        data-aos="fade-up"
        data-aos-delay="300"
      ></div>
      <div className={s.half} data-aos="fade-down" data-aos-delay="300">
        <Link href="https://www.linkedin.com/in/atharva-bhagat">
          <h4>in</h4>
        </Link>
        <Link href="https://www.github.com/ConnextDigital">
          <h4>git</h4>
        </Link>
        <Link href="https://www.fiverr.com/atharvabhagat">
          <h4>fl</h4>
        </Link>
      </div>
      <div className={s.cvButtons} data-aos="fade-up">
        <Link href="/ATHARVA BHAGAT RESUME.pdf">
          <h3>resume</h3>
        </Link>
        <Link href="/Design Portfolio.pdf">
          <h3>ui portfolio</h3>
        </Link>
        <h3
          onClick={() => document.getElementById("Projects").scrollIntoView()}
        >
          view projects
        </h3>
        <h3
          onClick={() =>
            document.getElementById("Certificates").scrollIntoView()
          }
        >
          credentials
        </h3>
      </div>
      <img alt="" src="/5.png" className={s.photo} data-aos="fade-up" />
      <div className={s.text} data-aos="fade-left" data-aos-delay="400">
        <h1>
          <b>Driving the passion of design & development</b>
        </h1>
        <h2>I am Atharva Bhagat,</h2>
        <p>
          A Full Stack Developer who loves to curate user experiences and
          designs.
        </p>
        <p>Engineer | Information Technology</p>
        <h3
          onClick={() => document.getElementById("Contacts").scrollIntoView()}
        >
          Get in touch
        </h3>
      </div>
      <div className={s.emboss} data-aos="fade-up" data-aos-delay="500">
        <h1>interests</h1>

        <h3>- ui ux</h3>
        <h3>- web design</h3>
        <h3>- mern dev</h3>
        <h3></h3>

        <h4> {" /> "} &nbsp; &nbsp;my work </h4>
      </div>
    </div>
  );
};

export default Landing;
