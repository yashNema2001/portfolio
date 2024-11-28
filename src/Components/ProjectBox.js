import React from 'react';
import { CgFileDocument } from "react-icons/cg";
import { FaGithub } from "react-icons/fa";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    WatchListAppDesc: "WatchListApp is a sophisticated platform that allows users to efficiently organize and prioritize their movie collections, add custom comments, and access real-time IMDb ratings through API integration. Developed with Java and Spring Boot, it offers a seamless and responsive user experience.",
    WatchListAppGithub: "https://github.com/yashNema2001/WatchListWebApp",
    WatchListAppWebsite: "#",
    StudentManagementSystemDesc: "Student Management System is a comprehensive platform that enables educational institutions to efficiently manage student data, including enrollment, attendance, and grades. Developed with Java and Spring Boot, it provides a user-friendly interface for streamlined administration and improved academic oversight.",
    StudentManagementSystemGithub: "https://github.com/yashNema2001/StudentMnagementSystem",
    StudentManagementSystemWebsite: "#",
    BankingSystemDesc: "Engineered a robust banking system using pure JDBC, optimizing database interactions for efficient account management, secure fund transfers, and detailed transaction tracking. Integrated advanced security protocols to safeguard transactions, enhancing customer trust and satisfaction. Spearheaded a database optimization initiative that reduced query response time by 50%, significantly improving system performance. Leveraged advanced SQL queries and comprehensive error-handling techniques to ensure high data integrity and system reliability.",
    BankingSystemGithub: "https://github.com/yashNema2001/BankingSystem",
    BankingSystemWebsite: "#",
  };
  const githubLink = desc[`${projectName}Github`];
  const websiteLink = desc[`${projectName}Website`];
  const description = desc[`${projectName}Desc`];

  return (
    <div className='projectBox'>
      <img className='projectPhoto' src={projectPhoto} alt="Project display" />
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        <p>{description}</p>
        <br />

        {/* Conditionally render GitHub button if URL is available */}
        {githubLink && (
          <a href={githubLink} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><FaGithub /> GitHub</button>
          </a>
        )}

        {/* Demo button always displayed if website link is present */}
        {websiteLink && (
          <a href={websiteLink} target='_blank' rel="noopener noreferrer">
            <button className='projectbtn'><CgFileDocument /> Hosted Link</button>
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectBox;