import AOS from "aos";
import { useEffect } from "react";
import Landing from "../components/landing";
import s from "../styles/index.module.css";
import "aos/dist/aos.css";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Certificates from "../components/certifications";
import Collaborate from "../components/collaborate";

export default function Home() {
  return (
    <div className={s.page}>
      <Landing />
      <Projects />
      <Skills />
      <Certificates />
      <Collaborate />
    </div>
  );
}
