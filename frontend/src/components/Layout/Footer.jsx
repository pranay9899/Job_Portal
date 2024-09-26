import React, { useContext } from "react";
import { Context } from "../../main";
import { Link } from "react-router-dom";
import {  FaGithub, FaLinkedin } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaWhatsapp } from "react-icons/fa6";

const Footer = () => {
  const { isAuthorized } = useContext(Context);
  return (
    <footer className={isAuthorized ? "footerShow" : "footerHide"}>
      <div>2024 &copy; All Rights Reserved By Sayedhasan.</div>
      <div>
        <Link to={"https://api.whatsapp.com/qr/MFTOUNIURP3WE1?autoload=1&app_absent=0"} target="_blank">
        <FaWhatsapp />
        </Link>
        <Link to={"https://github.com/sayedhasans"} target="_blank">
          <FaGithub /> 
        </Link>
        <Link to={"https://www.linkedin.com/in/sayed-hasan-074032256/"} target="_blank">
          <FaLinkedin />
        </Link>
        <Link to={"https://www.instagram.com/s.h_786619/"} target="_blank">
          <RiInstagramFill />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
