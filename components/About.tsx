// components/About.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About: React.FC = () => {
  return (
    <section className="p-8 bg-black shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon
          icon={faUser}
          className="h-6 w-6 text-indigo-600 mr-2"
        />{" "}
        About Me
      </h2>
      <p className="mt-2">
        I am a passionate developer with expertise in building web applications.
      </p>
    </section>
  );
};

export default About;
