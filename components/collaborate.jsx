import Link from "next/link";
import s from "../styles/collaborate.module.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Collaborate = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000, delay: 200 });
    AOS.refresh();
  }, []);
  return (
    <div className={s.Collaborate} id="Contacts">
      <h2 className={s.heading}>contact</h2>
      <div className={s.CollaborateHolder}>
        <div className={s.info}>
          <h1>Liked my work?</h1>
          <h2>Hire me as a full-time employee</h2>
          <span>
            <img alt="" src="/contacts/email.gif"></img>
            <Link href="mailto:atharva.r.bhagat@gmail.com">
              <h3>atharva.r.bhagat@gmail.com</h3>
            </Link>
          </span>
          <span>
            <img alt="" src="/contacts/phone.gif"></img>
            <h3>+91 8097985835</h3>
          </span>
          <h2>Hire me as a Freelancer / Get a project Quote </h2>

          <span>
            <img alt="" src="/contacts/chat.gif"></img>
            <Link href="mailto:atharvabhagatprojects@gmail.com">
              <h3>atharvabhagatprojects@gmail.com</h3>
            </Link>
          </span>
          <span>
            <img alt="" src="/contacts/work.gif"></img>
            <Link href="https://atharvabhagatprojects.netlify.app">
              <h3>atharvabhagatprojects.netlify.app</h3>
            </Link>
          </span>
          <span>
            <img alt="" src="/contacts/mail.gif"></img>
            <Link href="https://www.fiverr.com/atharvabhagat">
              <h3>fiverr/atharvabhagat</h3>
            </Link>
          </span>
          <h2>Lets Connect Socially !</h2>
          <div>
            <span>
              <video src="/contacts/linkedin.mp4" autoPlay muted loop></video>
              <Link href="https://linkedin.com/in/atharva-bhagat">
                <h3>/in/atharva-bhagat</h3>
              </Link>
            </span>
            <span>
              <video src="/contacts/instagram.mp4" autoPlay muted loop></video>
              <Link href="https://instagram.com/ath.ar.va">
                <h3>/ath.ar.va</h3>
              </Link>
            </span>
            <span>
              <video src="/contacts/github.mp4" autoPlay muted loop></video>
              <Link href="https://github.com/atharvabhagat">
                <h3>/AtharvaBhagat</h3>
              </Link>
            </span>
            <span>
              <video src="/contacts/github.mp4" autoPlay muted loop></video>
              <Link href="https://github.com/connextdigital">
                <h3>/ConnextDigital</h3>
              </Link>
            </span>

            <span>
              <video src="/contacts/whatsapp.mp4" autoPlay muted loop></video>
              <Link href="https://linkedin.com/in/atharva-bhagat">
                <h3>+91 8097985835</h3>
              </Link>
            </span>
          </div>
        </div>
        <video src="/contacts/info.mp4" muted autoPlay loop />
      </div>
      <div className={s.footer}>
        <h2>
          Designed & Managed by <b>ATHARVA BHAGAT PROJECTS</b>{" "}
          <p>Powered by NextJS & SCSS</p>
        </h2>
        <video src="/contacts/footerLogo.mp4" autoPlay muted loop></video>
      </div>
    </div>
  );
};

export default Collaborate;
