import React, { useEffect, useState } from "react";

const Dots = () => {
  const colors = ["bg-silver_lake_blue", "bg-oxford_blue-800", "bg-yinmn_blue"];
  const [dots, setDots] = useState([]);
  const totalDots = window.visualViewport.width >= "1200" ? 100 : 50;
  console.log(totalDots)
  useEffect(() => {
    const generateDots = () => {
      const newDots = [];
      for (let i = 0; i < totalDots; i++) {
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
  return (
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
  );
};

export default Dots;
