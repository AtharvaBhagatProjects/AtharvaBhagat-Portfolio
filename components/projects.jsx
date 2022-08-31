import Link from "next/link";
import s from "../styles/project.module.scss";
import AOS from "aos";
import { useEffect, useState } from "react";
import "aos/dist/aos.css";
import ProjectCard from "./projectCard";

const Projects = () => {
  const ProjectsArray = [
    {
      projName: "CodiGo - Learn with Engineers",
      projType: "Web Application | Data Science",
      projDesc: `An online course streaming platform and programming platform where users can learn from the engineers themselves and get certified by taking skill tests. 
 Implemented Quality Content Checks, Recommendation Systems, Notification Systems, Password Authentication & Hashing, Interactive Dashboards and many more modules. Helps students learn & practise new skills for free. `,
      projVideo: "/CodigoProject.mp4",
      projStack: [
        "NextJS",
        "ReactJS",
        "ExpressJS",
        "SCSS",

        "MongoDB",
        "TensorflowJS",
        "PythonAI",
      ],
      projLink: "https://codigoindia.netlify.app",
      projGit: "",
    },
    {
      projName: "SuchitaRaje - Apparel Studio",
      projType: "Shopping & Management | eCommerce",
      projDesc: `An amazing experience of shopping. A eCommerce website for a client to start her apparel business. Innovative UI with perfect information and cards to make the shopping experience hassle-free and smooth. Online Management app for the received orders. Email and SMS Notification System along with Supply Chain Handling Support. 
      Payment Gateway Support makes it a full fledged eCommerce Store`,
      projVideo: "/SuchitaStudio.mp4",
      projStack: [
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "SCSS",

        "Firebase",
        "Heroku",
        "NodeJS",
      ],
      projLink: "https://suchitarajestudio.netlify.app",
      projGit: "",
    },
    {
      projName: "Connext Solutions - Atharva Bhagat Projects",
      projType: "Web Application | Freelancing",
      projDesc: `A full-flegded personal freelancing website where I and my friends take up projects for businesses at standard charges. It has complete range of services that can be availed from us. It also has our portfolio and contacts to connect with us and get done work. A personalized fiverr ! `,
      projVideo: "/ConnextStudio.mp4",
      projStack: [
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "SCSS",
        "Heroku",
        "NodeJS",
      ],
      projLink: "https://connext.netlify.app",
      projGit: "",
    },
    {
      projName: "Connext ARB Books",
      projType: "Education | eCommerce",
      projDesc: `A book store that gets you covered with all semesters of Mumbai University at reasonable prices. Get books delivered at your home and excel in your exams. Topper's handwritten notes supported by professors. Plans have been finalized to introduce subscription based system an start sale of eBooks and also invite other university creators to sell their work on our store.`,
      projVideo: "/ConnextBooks.mp4",
      projStack: [
        "NextJS",
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
        "Heroku",
        "NodeJS",
      ],
      projLink: "https://connext-arb-books.vercel.app",
      projGit: "",
    },
    {
      projName: "Qvaesha Hospitals",
      projType: "Web Application | UI UX",
      projDesc: `A hospital web application where one can get acknowleged with all the facilities, departments of the hospital and book appointment with the doctors online. A Covid19 tracker and information to create awareness included. Modernizing the healthcare by taking services online. Also includes a Pharmacy store to get medicines delivered at doorstep. Implemented Coupon Discounts and mailing system with external APIs.`,
      projVideo: "/Qvaesha.mp4",
      projStack: [
        "JS",
        "CSS",
        "Firebase",
        "Figma",
        "GoogleSheets",
        "MailSystem",
      ],
      projLink: "https://qvaesha-arb-hospitals.netlify.app",
      projGit: "",
    },
    {
      projName: "DevConnect",
      projType: "Social Media | Community App ",
      projDesc: `Get connected with peers and collaborate together on projects. Find people who match with your education and skills and would love to know more about you. Showcase your projects to them and communicate via application itself. Video calling, Messaging, Project Management, Notification Systems, Password Authentication & Hashing, Interactive Dashboards and many more modules. `,
      projVideo: "/DevConnect.mp4",
      projStack: [
        "ReactJS",
        "ExpressJS",
        "MongoDB",
        "Firebase",
        "NodeJS",
        "GoogleAuth",
      ],
      projLink: "https://devconnect-tsec.netlify.app",
      projGit: "",
    },
    {
      projName: "MINI - Voice Assistant",
      projType: "Desktop Application | Web Scraper",
      projDesc: `In this era of hectic and busy schedules,
 An efficient search engine 
to get the latest information is a need of time. Traditional search 
engines which have a keypad-click input interface make your hands 
busy and you have to devote your complete time for that task and 
cannot do side tasks meanwhile. 
So, we developed an intelligent search engine which works on voice 
commands and not only searches the internet but also automates 
many tasks mentioned in the later part of the report. We have also 
developed the traditional style to maintain the vintage feel. `,
      projVideo: "/mini.mp4",
      projStack: [
        "Python",
        "Django",
        "Beautiful Soup",
        "OpenCV",
        "Pygame",
        "PyAutoGUI",
        "PyAudio",
      ],
      projLink: "https://www.youtube.com/watch?v=dK9-QZ0UkU8&t=8s",
      projGit: "",
    },
    {
      projName: "MusicBAY - Unleash the Music in you",
      projType: "Desktop Application | Entertainment",
      projDesc: `The project is based on the JavaFX library of Java to create GUI 
applications and Java Media Player class. 
The Application has a Graphical User Interface which provides the user with 
various options of songs categorized into various fields. 
When the user clicks on a particular song, our own musicBAY music player 
starts to play the songs. The music player has various controls to make your 
experience better.  `,
      projVideo: "/musicBay.mp4",
      projStack: ["Java", "JavaFX", "JavaMedia", "Figma"],
      projLink: "https://www.youtube.com/watch?v=9YdPrRcTSuA&t=1s",
      projGit: "",
    },
  ];
  let [ww, setWW] = useState(0);
  useEffect(() => {
    setWW(window.innerWidth);
  }, []);
  return (
    <div className={s.ProjectsPage} id="Projects">
      <h2 className={s.heading}>projects</h2>
      <div className={s.ProjHolder}>
        {ProjectsArray.map((project, index) => (
          <ProjectCard
            projName={project.projName}
            projType={project.projType}
            projDesc={project.projDesc}
            projVideo={project.projVideo}
            projStack={project.projStack}
            projLink={project.projLink}
            projGit={project.projGit}
            projID={index}
            key={index}
          />
        ))}
        <div className={s.ProjectCard}>
          <video
            src="/ui2.mp4"
            autoPlay
            muted
            loop
            style={{ height: ww < 720 ? "55vh" : "45vh" }}
          ></video>
          <video
            src="/ui1.mp4"
            autoPlay
            muted
            loop
            style={{ height: ww < 720 ? "55vh" : "45vh" }}
          ></video>

          <div className={s.info}>
            <h1>Workflow & Hackio</h1>
            <h2>Mobile Apps | PWA</h2>
            <h4>
              Designed Mobile Application UIs in the form of Progressive Web
              Apps as well as Android apps. Developed to improve on UI UX and
              Frontend in Mobile Applications. Developed both as a PWA in NextJS
              and in Android with Flutter-Dart. Login Screens, User
              Interactions, Firebase datastore connected in Dart to provide
              basic CRUD functionalities.
            </h4>
            <div className={s.Stack}>
              <b>Flutter</b>
              <b>Dart</b> <b>NextJS</b> <b>Firebase</b>
            </div>
          </div>
        </div>
      </div>
      <h4 className={s.next}>{" /> "} &nbsp; &nbsp;my skills </h4>
    </div>
  );
};

export default Projects;
