import React from "react";

import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

const projectList = [
  {
    title: "AI Sentiment Analyzer",
    description:
      "Collaborated with MLSA summer project team to build the front-end of an AI chatbot that analyzes sentiments based on text provided.",
    url: "https://github.com/ateebamateen21/sentiment-analyzer-frontend",
  },
  {
    title: "Next Auth App",
    description: "Built a Next.js app with authentication using NextAuth.js, mongoose and mongoDB.",
    url: "https://github.com/ateebamateen21/nextauth-app",
  },
  {
    title: "Currency Converter",
    description: "Built a currency converter using React, Redux, and the ExchangeRate-API.",
    url: "https://github.com/ateebamateen21/currencyConverter",
  },
  {
    title: "Modern UI",
    description:
      "Built UI of a modern website for a company using React, ReactStrap, and styled-components.",
    url: "https://github.com/ateebamateen21/ui-design",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 className="text-center pb-3">Portfolio</h2>
      <div className=" flex flex-col md:flex-row gap-2  ">
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container px-5">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
