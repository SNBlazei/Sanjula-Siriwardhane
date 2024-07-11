import React from "react";
import "./projects.css";

const projects = [
  {
    title: "Progression Predictor 📊⏳",
    description:
      "This program is designed using Python to assist university staff in predicting the progression outcomes of students based on the credits they have earned. It utilizes user input to gather credits at pass, defer, and fail levels and then determines the appropriate progression outcome for each student.",
    link: "https://github.com/SNBlazei/Marks-Grading-System-For-Universities",
    tech: "Python",
    techColor: "rgba(0, 26, 255, 0.655)",
  },
  {
    title: "Plane Management App✈️🌍",
    description:
      "This Java based application leverages Object-Oriented Programming (OOP) principles to manage airplane seating and ticketing. It allows users to perform various operations such as purchasing tickets, canceling seats, searching for tickets, and displaying seating plans.",
    link: "https://github.com/SNBlazei/Plane-Management-System",
    tech: "Java",
    techColor: "rgb(130, 0, 124)",
  },
];

const Project = ({ title, description, link, tech, techColor }) => (
  <div className="service-box">
    <div className="service-info">
      <h4>{title}</h4>
      <p>
        {description}{" "}
        <a href={`https://www.${tech.toLowerCase()}.org/`}>
          <span style={{ color: techColor, fontWeight: 800 }}>{tech}</span>
        </a>
        .
      </p>
      <p>
        <a
          href={link}
          style={{ fontSize: "small", textDecoration: "underline" }}
        >
          Open Project
        </a>
      </p>
    </div>
  </div>
);

const Projects = () => (
  <section className="services p" id="projects">
    <h2 className="heading">Projects</h2>
    <div className="services-container">
      {projects.map((project, index) => (
        <Project key={index} {...project} />
      ))}
    </div>
  </section>
);

export default Projects;
