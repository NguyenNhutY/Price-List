import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Reactjs Developer",
          "Freelancer",
          "MERN Stack Developer",
          "Open Source Tools Contributor",
          "React Native Developer",
          "Call API Developer",
          "Technical Bussiness Analyst"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
