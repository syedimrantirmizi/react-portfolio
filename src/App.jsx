import { useEffect, useRef, useState } from "react";
import Navbar from "./components/Navbar";
import { useInView } from "react-intersection-observer";
import mergeRefs from "merge-refs";

function App() {
  const [colored1, setColored1] = useState(false);
  const [colored2, setColored2] = useState(false);
  const [colored3, setColored3] = useState(false);
  const [colored4, setColored4] = useState(false);
  const home = useRef(null);
  const about = useRef(null);
  const project = useRef(null);
  const contact = useRef(null);
  const scrollToHome = () => {
    window.scrollTo({
      top: home.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToAbout = () => {
    window.scrollTo({
      top: about.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToProject = () => {
    window.scrollTo({
      top: project.current.offsetTop,
      behavior: "smooth",
    });
  };
  const scrollToContact = () => {
    window.scrollTo({
      top: contact.current.offsetTop,
      behavior: "smooth",
    });
  };
  const [ref, inView] = useInView({
    threshold: 0.4,
  });
  const [ref2, inView2] = useInView({
    threshold: 0.4,
  });
  const [ref3, inView3] = useInView({
    threshold: 0.4,
  });
  const [ref4, inView4] = useInView({
    threshold: 0.4,
  });
  const [dots, setDots] = useState([]);
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < 100; i++) {
        newDots.push({
          id: i,
          left: `${Math.random() * 100}vw`,
          top: `${Math.random() * 100}vh`,
          animationDuration: `${Math.random() * 10 + 4}s`,
        });
      }
      setDots(newDots);
    };

    generateDots();
  }, []);
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
  const colors = ["bg-silver_lake_blue", "bg-oxford_blue-800", "bg-yinmn_blue"];
  const languagecol1 = [
    { name: "HTML", image: "html", class: "w-24 p-2" },
    { name: "REACT", image: "react", class: "w-24" },
    { name: "css", image: "css", class: "w-24" },
  ];
  const languagecol2 = [
    { name: "TAILWIND", image: "tailwind", class: "w-24" },
    { name: "NODE.JS", image: "nodejs", class: "w-24 p-2" },
    { name: "EXPRESS.JS", image: "expressjs", class: "p-2" },
    { name: "SASS", image: "sass", class: "w-36 p-2" },
  ];
  const languagecol3 = [
    { name: "MUI", image: "MUI", class: "w-24 p-2" },
    { name: "MONGODB", image: "mongodb", class: "w-24 p-2" },
    { name: "JAVASCRIPT", image: "javascript", class: "w-24" },
  ];
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full overflow-hidden z-10">
        {dots.map((dot) => {
          return (
            <div
              key={dot.id}
              className={`w-1 h-1 rounded-full ${
                colors[Math.floor(Math.random() * colors.length)]
              }  absolute dot`}
              style={{
                left: dot.left,
                top: dot.top,
                animationDuration: dot.animationDuration,
              }}
            ></div>
          );
        })}
      </div>
      <div className="bg-platinum h-full min-h-screen relative scroll-smooth">
        <div
          className="h-screen flex justify-center w-full items-between overflow-hidden relative"
          ref={mergeRefs(ref, home)}
        >
          <div className="w-full h-full relative bg-platinum">
            <div className="w-full h-[85%] flex justify-center px-24 gap-5 items-center flex-col text-rich_black font-heading text-6xl ">
              <div className="text-6xl font-heading  underline-offset-4 flex gap-3 max-lg:flex-col max-lg:text-center">
                <p className="text-silver_lake_blue animate-fade-right animate-once animate-duration-[2000ms] animate-ease-in-out z-20">
                  Hi, I am
                </p>
                <p className="animate-fade-left animate-once animate-duration-[2000ms] animate-ease-in-out z-20">
                  Syed Imran Tirmizi
                </p>
              </div>
              <div className="text-xl text-silver_lake_blue font-maintext text-center animate-fade-up animate-once animate-duration-[5000ms] animate-ease-in-out z-20">
                A MERN Stack Developer
              </div>
              <button
                className="py-2 px-16 rounded font-subheading relative transition-all duration-500 z-20 group animate-fade-down animate-once animate-duration-[2000ms] animate-ease-in-out "
                onClick={scrollToAbout}
              >
                <p className="text-xl text-yinmn_blue transition-colors duration-500 z-20">
                  View my work
                </p>
                <span className="w-full h-1 absolute rounded bottom-0 left-0 ease-in-out transition-all duration-500 group-hover:w-1 group-hover:h-full bg-yinmn_blue -z-10"></span>
                <img src="" alt="" />
              </button>
            </div>
            <img
              src="/wave.svg"
              className="w-full absolute -top-2 rotate-180 z-20"
              alt=""
            />
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
        <div className="">
          <section
            className={`h-full min-h-screen flex flex-col items-center pt-16 transition-all  duration-1000 relative ${
              inView2 ? "opacity-100 " : "opacity-0"
            }`}
            ref={mergeRefs(ref2, about)}
          >
            <p className="text-6xl font-heading underline-offset-4 my-16  text-rich_black flex gap-2 relative z-10">
              <div className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20 "></div>
              <div className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20 "></div>
              About
              <div className="absolute text-6xl font-heading top-0 -right-1 -z-10  text-rich_black-900">
                About
              </div>
            </p>
            <div className="w-full px-16 flex max-xl:flex-col max-xl:gap-16">
              <div className="w-1/2 max-xl:w-full flex flex-col items-center gap-16">
                <img src="/images/imran.jpg" alt="" className="w-52 rounded-full z-20" />
                <p className="text-lg font-maintext text-center px-24 text-oxford_blue z-20">
                  I am Syed Imran Tirmizi, a proficient MERN stack developer
                  with a solid track record of creating robust, scalable, and
                  efficient web applications. Leveraging my expertise in
                  MongoDB, Express.js, React.js, and Node.js, My deep
                  understanding of both front-end and back-end technologies
                  allows me to build full-stack solutions that meet diverse
                  business needs. Passionate about coding and continuous
                  learning, I stay updated with the latest industry trends and
                  best practices, ensuring my skills remain sharp and relevant.
                  Whether developing single-page applications or complex
                  enterprise solutions, my dedication to quality and innovation
                  stands out, making me a valuable asset in the web development
                  community.
                </p>
              </div>
              <div className="w-1/2 max-xl:w-full flex gap-10 justify-center items-center">
                <div className="flex flex-col gap-10">
                  {languagecol1.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-oxford_blue-700 via-oxford_blue-500 to-rich_black-800 p-1 rounded-xl w-44 "
                      >
                        <div className="bg-platinum rounded-xl flex flex-col justify-center items-center ">
                          <img
                            src={`/images/${value.image}.png`}
                            className={`${value.class} z-20`}
                            alt=""
                          />
                          <p className="text-lg font-maintext text-center text-oxford_blue z-20">
                            {`${value.name}`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-10">
                  {languagecol2.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-oxford_blue-700 via-oxford_blue-500 to-rich_black-800 p-1 rounded-xl w-44 "
                      >
                        <div className="bg-platinum rounded-xl flex flex-col justify-center items-center ">
                          <img
                            src={`/images/${value.image}.png`}
                            className={`${value.class} z-20`}
                            alt=""
                          />
                          <p className="text-lg font-maintext text-center text-oxford_blue z-20">
                            {`${value.name}`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
                <div className="flex flex-col gap-10">
                  {languagecol3.map((value, index) => {
                    return (
                      <div
                        key={index}
                        className="bg-gradient-to-r from-oxford_blue-700 via-oxford_blue-500 to-rich_black-800 p-1 rounded-xl w-44 "
                      >
                        <div className="bg-platinum rounded-xl flex flex-col justify-center items-center ">
                          <img
                            src={`/images/${value.image}.png`}
                            className={`${value.class} z-20`}
                            alt=""
                          />
                          <p className="text-lg font-maintext text-center text-oxford_blue z-20">
                            {`${value.name}`}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </section>
          <section
            className={`h-full min-h-screen flex flex-col items-center pt-16 transition-all  duration-1000 relative ${
              inView3 ? "opacity-100 " : "opacity-0"
            }`}
            ref={mergeRefs(ref3, project)}
          >
            <p className="text-6xl font-heading underline-offset-4 my-16  text-rich_black flex gap-2 relative z-10">
              <div className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20 "></div>
              <div className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20 "></div>
              Projects
              <div className="absolute text-6xl font-heading top-0 -right-1 -z-10  text-rich_black-900">
                Projects
              </div>
            </p>
          </section>
          <section
            className={`h-full min-h-screen flex flex-col items-center pt-16 transition-all  duration-1000 relative ${
              inView4 ? "opacity-100 " : "opacity-0"
            }`}
            ref={mergeRefs(ref4, contact)}
          >
            <p className="text-6xl font-heading underline-offset-4 my-32  text-rich_black flex gap-2 relative z-10">
              <div className="absolute bottom-0 -right-7 w-[95%] h-5 bg-silver_lake_blue -z-20 "></div>
              <div className="absolute bottom-0 -right-10 rounded-full w-2 h-2 bg-silver_lake_blue -z-20 "></div>
              Contact
              <div className="absolute text-6xl font-heading top-0 -right-1 -z-10  text-rich_black-900">
                Contact
              </div>
            </p>
            <p className="text-xl font-subheading text-yinmn_blue w-[30%]">
              Have a question or want to work together? Leave your details and
              I'll get back to you as soon as possible.
            </p>
            
          </section>
        </div>
      </div>
    </>
  );
}

export default App;
