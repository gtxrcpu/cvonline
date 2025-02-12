import React from "react";

const Portfolios: React.FC = () => {
  const portfolios = [
    {
      title: "Project 1",
      image: "img1.jpg",
    },
    {
      title: "Project 2",
      image: "img1.jpg",
      link: "https://example.com/project2",
    },
    {
      title: "Project 3",
      image: "img1.jpg",
      link: "https://example.com/project3",
    },
  ];

  return (
    <section className="p-8 bg-black shadow-lg rounded-lg m-4">
      <h2 className="text-2xl font-bold">Portfolios</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
        {portfolios.map((portfolio, index) => (
          <a
            key={index}
            href={portfolio.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <div className="bg-gray-100 p-4 rounded-lg shadow hover:shadow-lg transition-shadow duration-300">
              <img
                src={portfolio.image}
                alt={portfolio.title}
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="mt-2 text-lg font-semibold">{portfolio.title}</h3>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
};

export default Portfolios;
