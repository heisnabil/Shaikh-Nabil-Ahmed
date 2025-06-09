import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "TE CSE-AIML STUDENT",
          "NEURONYX CLUB (STUDENT HEAD)",
          "Freelancer",
          "AI-MODEL DEVELOPER",
          "Open Source Contributor",
          "Python Developer",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
