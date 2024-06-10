import React from "react";

import image from "../images/motion-background.jpg";

const imageAltText = "purple and blue abstract background";

const description =
  "An environmental engineering undergraduate student with a passion for software development. I am a self-taught developer with a keen interest in modern web technologies.";

const skillsList = ["ReactJs", "NextJs", "TypeScript", "Shadcn", "Tailwind CSS", "MongoDB"];

const detailOrQuote =
  "Open to work on new projects and ideas. I am always looking for opportunities to learn and grow.";

const About = () => {
  return (
    <section className="padding px-4" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div className="bg-white w-full md:w-2/3 mx-auto">
        <h2 className="text-center pb-3">About Myself</h2>
        <p className="large px-4 text-justify">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p className="py-4 text-center">{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
