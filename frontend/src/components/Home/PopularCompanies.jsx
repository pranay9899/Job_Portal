import React from "react";
import { FaMicrosoft, FaApple,FaGoogle,FaInstagram } from "react-icons/fa";
import { SiTesla, SiTata, SiZoho } from "react-icons/si";


const PopularCompanies = () => {
  const companies = [
    {
      id: 1,
      title: "Microsoft",
      location: "Delhi, India",
      openPositions: 10,
      icon: <FaMicrosoft />,
    },
    {
      id: 2,
      title: "Tesla",
      location: "California, US",
      openPositions: 5,
      icon: <SiTesla />,
    },
    {
      id: 3,
      title: "Apple",
      location: "Bangalore, India",
      openPositions: 20,
      icon: <FaApple />,
    },
    {
      id: 4,
      title: "Google",
      location: "Hyderabad, India",
      openPositions: 10,
      icon: <FaGoogle />,
    },
    {
      id: 5,
      title: "Tata",
      location: "Bangalore, India",
      openPositions: 10,
      icon: <SiTata />,
    },
    {
      id: 6,
      title: "Zoho",
      location: "Tamilnadu, India",
      openPositions: 10,
      icon: <SiZoho />,
    },
  ];
  return (
    <div className="companies">
      <div className="container">
        <h3>TOP COMPANIES</h3>
        <div className="banner">
          {companies.map((element) => {
            return (
              <div className="card" key={element.id}>
                <div className="content">
                  <div className="icon">{element.icon}</div>
                  <div className="text">
                    <p>{element.title}</p>
                    <p>{element.location}</p>
                  </div>
                </div>
                <button>Open Positions {element.openPositions}</button>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default PopularCompanies;
