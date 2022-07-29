import Link from "next/link";
import s from "../styles/certificates.module.scss";
import AOS from "aos";
import { useEffect } from "react";
import "aos/dist/aos.css";

const Certificates = () => {
  useEffect(() => {
    AOS.init({ offset: 0, duration: 1000, delay: 200 });
    AOS.refresh();
  }, []);
  const Certificates = [
    {
      cert: "Accenture Digital Skills - UI UX",
      img: "/certificatesPNG/Accenture UI UX-1.png",
      link: "https://www.futurelearn.com/certificates/r4106nm",
      company: "Accenture",
    },
    {
      cert: "Accenture Digital Skills - Artificial Intelligence",
      img: "/certificatesPNG/Accenture AI-1.png",
      link: "https://www.futurelearn.com/certificates/2b4eqek",
      company: "Accenture",
    },
    {
      cert: "GWOC Frontend & UI UX",
      img: "/certificatesPNG/GWOC_PARTICIPATION_CERTIFICATE-1.png",
      link: "https://www.futurelearn.com/certificates/2b4eqek",
      company: "Accenture",
    },
    {
      cert: "Hackerrank ReactJS",
      img: "/certificatesPNG/Hacckerrank React.png",
      link: "https://www.hackerrank.com/certificates/fce75137000b",
      company: "Hackerrank",
    },
    {
      cert: "Hackerrank CSS",
      img: "/certificatesPNG/Hacckerrank CSS.png",
      link: "https://www.hackerrank.com/certificates/61f1a986879b",
      company: "Hackerrank",
    },
    {
      cert: "Hackerrank JS",
      img: "/certificatesPNG/Hacckerrank JS.png",
      link: "https://www.hackerrank.com/certificates/214dba8ef4e7",
      company: "Hackerrank",
    },
    {
      cert: "Frontend Development",
      img: "/certificatesPNG/SkillUP Frontend-1.png",
      link: "https://simpli-web.app.link/e/Ky8i58wB2rb",
      company: "SkillUP / Simplilearn",
    },

    {
      cert: "Accenture Developer Program",
      img: "/certificatesPNG/Accenture Developer Program-1.png",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/Accenture%20Nordics/PxenP4rHNE6Bh4nQz_Accenture%20Nordic_pu58Pmzn9C5BHWFoL_1645041986661_completion_certificate.pdf",
      company: "Accenture",
    },
    {
      cert: "Solutions Architect Experience",
      img: "/certificatesPNG/AWS Solutions Architect-1.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/AWS/kkE9HyeNcw6rwCRGw_AWS%20APAC_pu58Pmzn9C5BHWFoL_1657142187498_completion_certificate.pdf",
      company: "Amazon AWS",
    },
    {
      cert: "Infosys Power Programmer",
      img: "/certificatesPNG/Infosys Power Programmer-1.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Infosys/qyS5w2xfLoFEKAFpH_Infosys_pu58Pmzn9C5BHWFoL_1657281242305_completion_certificate.pdf",
      company: "Infosys",
    },
    {
      cert: "Deloitte STEM Connect",
      img: "/certificatesPNG/Deloitte STEM Connect-1.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Deloitte%20Australia/YPWCiGNTkr6QxcpEu_Deloitte%20Australia_pu58Pmzn9C5BHWFoL_1657307759783_completion_certificate.pdf",
      company: "Deloitte",
    },
    {
      cert: "JP Morgan Software Engineering",
      img: "/certificatesPNG/JP Morgan Software Engineernig-1.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/J.P.%20Morgan/R5iK7HMxJGBgaSbvk_J.P.%20Morgan_pu58Pmzn9C5BHWFoL_1657815359646_completion_certificate.pdf",
      company: "JP Morgan",
    },
    {
      cert: "ANZ Job Ready",
      img: "/certificatesPNG/ANZ Job Ready Experience Program-1.png",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/ANZ/SACf7nKZb3wgvBMkN_ANZ_pu58Pmzn9C5BHWFoL_1645987690589_completion_certificate.pdf",
      company: "ANZ",
    },
    {
      cert: "Accenture Project Management",
      img: "/certificatesPNG/Accenture Project Management Experience Program-1.png",
      link: "https://insidesherpa.s3.amazonaws.com/completion-certificates/Accenture%20North%20America/tHFz7Bfjmh35DXQv6_Accenture_pu58Pmzn9C5BHWFoL_1645991728318_completion_certificate.pdf",
      company: "Accenture",
    },
    {
      cert: "Cognizant Ready Set Agile",
      img: "/certificatesPNG/Cognizant Ready Set Agile-1.png",
      link: "https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Cognizant/ZZswQd6xGydd758vz_Cognizant%20USA_pu58Pmzn9C5BHWFoL_1657141650271_completion_certificate.pdf",
      company: "Cognizant",
    },
    {
      cert: "Blockchain Basics",
      img: "/certificatesPNG/GreatLearning Blockchain-1.png",
      link: "https://olympus1.mygreatlearning.com/course_certificate/ROGTDHNE",
      company: "GreatLearning",
    },
  ];
  return (
    <div className={s.Certificates} id='Certificates'>
      <h2 className={s.heading}>certifications </h2>
      <h4 className={s.next}>{" /> "} &nbsp; &nbsp;contact </h4>

      <div className={s.CertificatesHolder}>
        {Certificates.map((cert, index) => (
          <div className={`${s.Certificate}`} data-aos="fade-up">
            <img src={cert.img}></img>
            <div>
              <h2>{cert.cert}</h2>
              <h4>{cert.company}</h4>
              <Link href={cert.link}>
                <p>View Credential</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Certificates;
