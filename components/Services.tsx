// components/Services.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

const Services: React.FC = () => {
  const services = ["Web Development", "UI/UX Design", "SEO Optimization"];

  return (
    <section className="p-8 bg-black shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="h-6 w-6 text-indigo-600 mr-2"
        />{" "}
        Services
      </h2>
      <ul className="mt-2 list-disc list-inside">
        {services.map((service, index) => (
          <li key={index}>{service}</li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
