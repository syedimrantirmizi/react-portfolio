/* eslint-disable react/no-unescaped-entities */
import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { useInView } from "react-intersection-observer";
import mergeRefs from "merge-refs";
import Dots from "./components/Dots";
import projects from "./data/projects";

function App() {
  const [colored1, setColored1] = useState(false);
  const [colored2, setColored2] = useState(false);
  const [colored3, setColored3] = useState(false);
  const [colored4, setColored4] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const [ref, inView] = useInView({
    threshold: 0.2,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.2,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.1,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.2,
  });
  const scrollToHome = () => {
    window.scrollTo({
      top: home.current.offsetTop,
      behavior: "smooth",
    });
  };
  const navOffset = 72;
  const scrollToAbout = () => {
    window.scrollTo({
      top: Math.max(about.current.offsetTop - navOffset, 0),
      behavior: "smooth",
    });
  };
  const scrollToProject = () => {
    window.scrollTo({
      top: Math.max(project.current.offsetTop - navOffset, 0),
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    window.scrollTo({
      top: Math.max(contact.current.offsetTop - navOffset, 0),
      behavior: "smooth",
    });
  };
  useEffect(() => {
    setColored1(false);
    setColored2(false);
    setColored3(false);
    setColored4(false);
    if (inView) {
      setColored1(true);
    }
    if (inView2) {
      setColored2(true);
    }
    if (inView3) {
      setColored3(true);
    }
    if (inView4) {
      setColored4(true);
    }
  }, [inView, inView2, inView3, inView4]);
  const languagecol1 = [
    { name: "HTML", image: "html", class: "w-20 p-2 sm:w-24 max-lg:w-12" },
    { name: "REACT", image: "react", class: "w-20 sm:w-24 max-lg:w-12" },
    { name: "css", image: "css", class: "w-20 sm:w-24 max-lg:w-12" },
  ];
  const languagecol2 = [
    { name: "TAILWIND", image: "tailwind", class: "w-20 sm:w-24 max-lg:w-12" },
    { name: "NODE.JS", image: "nodejs", class: "w-20 p-2 sm:w-24 max-lg:w-12" },
    { name: "EXPRESS.JS", image: "expressjs", class: "p-2 w-16 sm:w-auto" },
    { name: "SASS", image: "sass", class: "w-24 p-2 sm:w-36 max-lg:w-16" },
  ];
  const languagecol3 = [
    { name: "MUI", image: "MUI", class: "w-20 p-2 sm:w-24 max-lg:w-12" },
    { name: "MONGODB", image: "mongodb", class: "w-20 p-2 sm:w-24 max-lg:w-12" },
    { name: "JAVASCRIPT", image: "javascript", class: "w-20 sm:w-24 max-lg:w-12" },
  ];
  return (
    <>
      <div className="bg-platinum h-full min-h-screen relative w-full">
        <div
          className="min-h-screen flex justify-center w-full items-center relative"
          ref={mergeRefs(ref, home)}
        >
          <div className="w-full min-h-screen relative bg-platinum flex flex-col">
            <img
              src="/wave.svg"
              className="w-full absolute -top-2 rotate-180 z-20 pointer-events-none"
              alt=""
            />
            <div className="w-full flex-1 flex justify-center px-4 sm:px-8 md:px-16 lg:px-24 gap-4 sm:gap-5 items-center flex-col text-rich_black font-heading">
              <div className="text-3xl sm:text-5xl lg:text-6xl font-heading underline-offset-4 flex flex-col sm:flex-row gap-1 sm:gap-3 text-center sm:text-left max-w-full">
                <h1 className="text-silver_lake_blue animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out z-20">
                  Hi, I am
                </h1>
                <h1 className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out z-20 break-words">
                  Syed Imran Tirmizi
                </h1>
              </div>
              <h2 className="text-base sm:text-xl text-silver_lake_blue font-maintext text-center animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out z-20 px-2">
                A MERN Stack Developer
              </h2>
              <button
                className="py-2 px-8 sm:px-16 rounded font-subheading relative transition-all duration-500 z-20 group animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out"
                onClick={scrollToAbout}
              >
                <p className="text-lg sm:text-xl text-yinmn_blue transition-all duration-500 z-20 group-hover:text-[24px]">
                  View my work
                </p>
                <span className="w-full h-[2px] absolute rounded bottom-0 left-0 ease-in-out transition-all duration-500 group-hover:w-[2px] group-hover:h-full bg-yinmn_blue -z-10"></span>
              </button>
            </div>
          </div>
        </div>
        <Navbar
          colored1={colored1}
          colored2={colored2}
          colored3={colored3}
          colored4={colored4}
          scrollToHome={scrollToHome}
          scrollToAbout={scrollToAbout}
          scrollToProject={scrollToProject}
          scrollToContact={scrollToContact}
        />
        <section
          className={`h-full flex flex-col items-center scroll-mt-20 pt-10 sm:pt-16 px-4 sm:px-8 transition-all duration-[3000ms] relative ${
            inView2 ? "opacity-100" : "opacity-0"
          }`}
          ref={mergeRefs(ref2, about)}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading underline-offset-4 my-10 sm:my-16 text-rich_black flex gap-2 relative z-20">
            <span className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20"></span>
            <span className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20"></span>
            About
            <span className="absolute text-4xl sm:text-5xl lg:text-6xl font-heading top-0 -right-1 -z-10 text-rich_black-900">
              About
            </span>
          </h1>
          <div className="w-full max-w-6xl flex flex-col xl:flex-row xl:gap-8 gap-12">
            <aside className="w-full xl:w-1/2 flex flex-col items-center gap-2 max-sm:gap-4">
              <img
                src="/images/imran.jpg"
                alt="Syed Imran Tirmizi"
                className="w-36 h-36 sm:w-52 sm:h-52 rounded-full z-20 mb-4 object-cover object-top"
              />
              <ul className="text-left list-disc px-4 sm:px-10 lg:px-16 max-w-xl">
                <li className="text-base sm:text-lg font-maintext pb-4 text-yinmn_blue z-20">
                  MERN stack developer
                </li>
                <li className="text-base sm:text-lg font-maintext pb-4 text-yinmn_blue z-20">
                  Based in Pakistan
                </li>
                <li className="text-base sm:text-lg font-maintext pb-4 text-yinmn_blue z-20">
                  Expertise in MongoDB, Express.js, React.js, and Node.js
                </li>
              </ul>
            </aside>
            <div className="w-full xl:w-1/2 flex gap-3 sm:gap-6 lg:gap-10 justify-center items-start">
              {[languagecol1, languagecol2, languagecol3].map((column, colIndex) => (
                <div key={colIndex} className="flex flex-col gap-4 sm:gap-8 lg:gap-10">
                  {column.map((value) => {
                    return (
                      <div
                        key={value.name}
                        className="bg-gradient-to-tr from-oxford_blue-800 via-oxford_blue-900 to-rich_black-800 p-1 rounded-xl w-[5.5rem] sm:w-28 lg:w-44"
                      >
                        <div className="bg-platinum rounded-xl flex flex-col justify-center items-center min-h-[5.5rem] sm:min-h-[6.5rem] lg:min-h-0 py-2">
                          <img
                            src={`/images/${value.image}.png`}
                            className={`${value.class} z-20`}
                            alt={value.name}
                          />
                          <p className="text-[10px] sm:text-sm lg:text-lg font-maintext text-center text-oxford_blue z-20 px-1 leading-tight">
                            {value.name}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ))}
            </div>
          </div>
        </section>
        <section
          className={`flex flex-col items-center scroll-mt-20 pt-10 sm:pt-16 px-4 sm:px-8 lg:px-12 transition-all duration-1000 relative ${
            inView3 ? "opacity-100" : "opacity-0"
          }`}
          ref={mergeRefs(ref3, project)}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading underline-offset-4 mt-10 sm:mt-16 mb-12 sm:mb-20 text-rich_black flex gap-2 relative z-20">
            <span className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20"></span>
            <span className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20"></span>
            Projects
            <span className="absolute text-4xl sm:text-5xl lg:text-6xl font-heading top-0 -right-1 -z-10 text-rich_black-900">
              Projects
            </span>
          </h1>
          <div className="w-full max-w-6xl flex flex-col gap-16 sm:gap-24 mb-16">
            {projects.map((item, index) => {
              const isEven = index % 2 === 1;
              const underlineClass = isEven
                ? "absolute w-full h-[2px] bottom-0 right-0 ease-in-out transition-all duration-[350ms] group-hover:h-full bg-yinmn_blue -z-10"
                : "absolute w-full h-[2px] bottom-0 left-0 ease-in-out transition-all duration-[350ms] group-hover:h-full bg-yinmn_blue -z-10";
              return (
                <article
                  key={item.title}
                  className={`w-full relative z-20 flex flex-col lg:flex-row items-center gap-6 lg:gap-10 ${
                    isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <a
                    href={item.live}
                    className="w-full lg:w-[58%] shrink-0 hover:scale-[0.98] transition-transform duration-300"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <div className="w-full aspect-[16/10] bg-silver_lake_blue overflow-hidden relative rounded-md shadow-lg shadow-oxford_blue/20">
                      <img
                        src={item.image}
                        className="w-full h-full object-cover object-top"
                        alt={item.title}
                      />
                      <span className="absolute w-full h-[3px] bg-platinum top-1"></span>
                      <span className="absolute w-full h-[3px] bg-platinum top-3"></span>
                      <span className="absolute w-full h-[3px] bg-platinum top-5"></span>
                      {isEven ? (
                        <>
                          <span className="absolute w-[3px] h-full bg-platinum left-1"></span>
                          <span className="absolute w-[3px] h-full bg-platinum left-3"></span>
                          <span className="absolute w-[3px] h-full bg-platinum left-5"></span>
                        </>
                      ) : (
                        <>
                          <span className="absolute w-[3px] h-full bg-platinum right-1"></span>
                          <span className="absolute w-[3px] h-full bg-platinum right-3"></span>
                          <span className="absolute w-[3px] h-full bg-platinum right-5"></span>
                        </>
                      )}
                    </div>
                  </a>
                  <div
                    className={`w-full lg:flex-1 flex flex-col gap-4 sm:gap-5 ${
                      isEven ? "lg:items-end lg:text-right" : "lg:items-start"
                    }`}
                  >
                    <h2 className="font-heading text-2xl sm:text-3xl lg:text-4xl text-rich_black leading-tight">
                      {item.title}
                    </h2>
                    <p className="font-maintext text-base sm:text-lg text-oxford_blue leading-relaxed max-w-xl">
                      {item.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-3 ${
                        isEven ? "lg:justify-end" : ""
                      }`}
                    >
                      <a
                        href={item.live}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-6 sm:px-8 w-fit font-subheading relative transition-all duration-500 z-20 group"
                      >
                        <p className="text-base sm:text-xl text-yinmn_blue transition-colors duration-[350ms] z-20 group-hover:text-platinum">
                          Live App
                        </p>
                        <span className={underlineClass}></span>
                      </a>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noreferrer"
                        className="py-2 px-6 sm:px-8 w-fit font-subheading relative transition-all duration-500 z-20 group"
                      >
                        <p className="text-base sm:text-xl text-yinmn_blue transition-colors duration-[350ms] z-20 group-hover:text-platinum">
                          Learn more
                        </p>
                        <span className={underlineClass}></span>
                      </a>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>
        </section>
        <section
          className={`h-full min-h-screen flex flex-col items-center scroll-mt-20 pt-10 sm:pt-16 px-4 sm:px-8 pb-24 transition-all duration-1000 relative ${
            inView4 ? "opacity-100" : "opacity-0"
          }`}
          ref={mergeRefs(ref4, contact)}
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading underline-offset-4 my-16 sm:my-24 text-rich_black flex gap-2 relative z-10">
            <span className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20"></span>
            <span className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20"></span>
            Contact
            <span className="absolute text-4xl sm:text-5xl lg:text-6xl font-heading top-0 -right-1 -z-10 text-rich_black-900">
              Contact
            </span>
          </h1>
          <p className="text-base sm:text-xl font-subheading text-yinmn_blue w-full max-w-xl text-center z-20 px-2">
            Have a question or want to work together? Contact me at these links
            and I'll get back to you as soon as possible.
          </p>
          <div className="z-20 flex justify-center items-center gap-4 sm:gap-8 pt-10 sm:pt-16 w-full max-w-lg">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://github.com/syedimrantirmizi"
              className="flex justify-center"
            >
              <img src="/images/githubicon.png" alt="GitHub" className="w-14 sm:w-20 lg:w-28" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/syedimrantirmizi/"
              className="flex justify-center"
            >
              <img src="/images/linkedinicon.png" alt="LinkedIn" className="w-14 sm:w-20 lg:w-28" />
            </a>
            <a
              target="_blank"
              rel="noreferrer"
              href="mailto:syedimrantirmizi@gmail.com"
              className="flex justify-center"
            >
              <img src="/images/email.png" className="w-12 sm:w-16 lg:w-24" alt="Email" />
            </a>
          </div>
        </section>
        <Dots />
      </div>
    </>
  );
}

export default App;
