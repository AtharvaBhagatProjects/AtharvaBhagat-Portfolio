import Link from "next/link";
import s from "../styles/project.module.scss";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";

const ProjectCard = (props) => {
  let [ww, setWW] = useState(0);
  useEffect(() => {
    setWW(window.innerWidth);
  }, []);
  return (
    <div
      className={s.ProjectCard}
      data-aos="fade"
      style={{
        flexDirection: props.projID % 2 == 0 || ww <= 720 ? "" : "row-reverse",
      }}
    >
      <video
        src={props.projVideo}
        data-aos="fade-up"
        autoPlay
        muted
        loop
      ></video>
      <div className={s.info}>
        <h1 data-aos="fade-down">{props.projName}</h1>
        <h2 data-aos="fade-down">{props.projType}</h2>
        <h4 data-aos="fade-up">{props.projDesc}</h4>
        <div className={s.Stack} data-aos="fade-right">
          {props.projStack.map((stack) => (
            <b key={stack}>{stack}</b>
          ))}
        </div>
        <div className={s.gitlink} data-aos="fade-up">
          <Link href={props.projLink}>
            <p>View Deployment</p>
          </Link>
          {/* <Link href={props.projGit}>
            <p>Github Repo</p>
          </Link> */}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
