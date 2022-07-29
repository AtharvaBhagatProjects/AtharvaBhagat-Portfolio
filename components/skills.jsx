import s from "../styles/skills.module.scss";

const Skills = () => {
  const languages = [
    {
      lang: "ReactJS",
      img: "/images/react.svg",
    },
    {
      lang: "NextJS",
      img: "/images/next.svg",
    },
    {
      lang: "NodeJS",
      img: "/images/nodejs.png",
    },
    {
      lang: "ExpressJS",
      img: "/images/express.png",
    },
    {
      lang: "Sass",
      img: "/images/sass.png",
    },
    {
      lang: "Mongodb",
      img: "/images/mongo.svg",
    },
    {
      lang: "Javascript",
      img: "/images/javaScript.png",
    },
    {
      lang: "Java",
      img: "/images/java.png",
    },
    {
      lang: "Python",
      img: "/images/python.png",
    },
    {
      lang: "Firebase",
      img: "/images/firebase.svg",
    },
    {
      lang: "MySQL",
      img: "/images/mysql.png",
    },
    {
      lang: "HTML5",
      img: "/images/html.png",
    },
    {
      lang: "CSS3",
      img: "/images/css.png",
    },
  ];
  const tools = [
    {
      lang: "Figma",
      img: "/images/figma.svg",
    },
    {
      lang: "Github",
      img: "/images/github.svg",
    },
    {
      lang: "Heroku",
      img: "/images/heroku.svg",
    },
    {
      lang: "Netlify",
      img: "/images/netlify.png",
    },
    {
      lang: "VS Code",
      img: "/images/vsc.svg",
    },

    {
      lang: "Android Studio",
      img: "/images/android.svg",
    },
    {
      lang: "JetBrains",
      img: "/images/jetbrains.svg",
    },
  ];
  return (
    <div className={s.skillsPage} id='Skills'>
      <h2 className={s.heading}>skills </h2>
      <h4 className={s.next}>{" /> "} &nbsp; &nbsp;certifications </h4>
      {/* <h4 className={s.bar}></h4> */}
      <h2 className={s.lang}>
        {"<"} languages & frameworks {"/>"}
      </h2>
      {/* <h4 className={s.bar2}></h4> */}
      <div className={s.skillsHolder}>
        {languages.map((lang) => (
          <div className={s.skillsBox}>
            <img src={lang.img} />
            <h4>{lang.lang}</h4>
          </div>
        ))}
      </div>
      {/* <h4 className={s.bar}></h4> */}
      <h2 className={s.lang}>
        {"<"} tools {"/>"}
      </h2>
      {/* <h4 className={s.bar2}></h4> */}
      <div className={s.skillsHolder}>
        {tools.map((lang) => (
          <div className={s.skillsBox}>
            <img src={lang.img} style={{ height: "8vh" }} />
            <h4>{lang.lang}</h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
