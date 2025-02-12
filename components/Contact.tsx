// components/Contact.tsx
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const Contact: React.FC = () => {
  return (
    <section className="p-8 bg-black shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-bold flex items-center">
        <FontAwesomeIcon
          icon={faEnvelope}
          className="h-6 w-6 text-indigo-600 mr-2"
        />{" "}
        Contact Me
      </h2>
      <p className="mt-2">Feel free to reach out through my email:</p>
      <p className="mt-1 text-blue-600">
        <a href="mailto:your-email@example.com">your-email@example.com</a>
      </p>
    </section>
  );
};

export default Contact;
