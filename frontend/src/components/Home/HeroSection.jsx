import React from "react";
import { FaBuilding, FaSuitcase, FaUsers, FaUserPlus } from "react-icons/fa";

const HeroSection = () => {
  const details = [
    {
      id: 1,
      title: "1,23,441",
      subTitle: "Live Job",
      icon: <FaSuitcase />,
    },
    {
      id: 2,
      title: "91220",
      subTitle: "Companies",
      icon: <FaBuilding />,
    },
    {
      id: 3,
      title: "2,34,200",
      subTitle: "Job Seekers",
      icon: <FaUsers />,
    },
    {
      id: 4,
      title: "1,03,761",
      subTitle: "Employers",
      icon: <FaUserPlus />,
    },
  ];
  return (
    <>
      <div className="heroSection">
        <h1 className="start">One Step Closer To Your Dream Job</h1>
        <div className="container">
          
          <div className="title">
            <h2>Find a job that suits</h2>
            <h2>your interests and skills</h2>
            <p>
            Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.

            </p>
          </div>
          <div className="image">
            <img src="/heroS.jpg" alt="hero" />
          </div>
        </div>
       
      </div>
    </>
  );
};

export default HeroSection;
