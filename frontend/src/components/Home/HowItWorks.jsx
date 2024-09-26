import React from "react";
import { FaUserPlus } from "react-icons/fa";
import { MdFindInPage } from "react-icons/md";
import { IoMdSend } from "react-icons/io";

const HowItWorks = () => {
  return (
    <>
      <div className="howitworks">
        <div className="container">
          <h3>How JobSeek Works</h3>
          <div className="banner">
            <div className="card">
              <FaUserPlus />
              <p>Create Account</p>
              <p>
              Launch your site & capture leads! Simple, fast website & landing page builders with email tools to boot.
              </p>
            </div>
            <div className="card">
              <MdFindInPage />
              <p>Find a Job/Post a Job</p>
              <p >
              The description of who you are as a job aspirant, highlighting your interests and professional goals and elucidating what you are looking to achieve in your career
              </p>
            </div>
            <div className="card">
              <IoMdSend />
              <p>Apply For Job/Recruite Suitable Candidates</p>
              <p>
              It is written explanation that outlines the essential responsibilities and requirements for a vacant position.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HowItWorks;
