// components/Skills.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

const Skills: React.FC = () => {
  const skills = [
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "CSS",
    "Tailwind CSS",
  ];

  return (
    <section className="p-8 bg-black shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon
          icon={faCheckCircle}
          className="h-6 w-6 text-indigo-600 mr-2"
        />{" "}
        Skills
      </h2>
      <ul className="mt-2 list-disc list-inside">
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
};

export default Skills;
