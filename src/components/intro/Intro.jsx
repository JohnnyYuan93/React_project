import "./intro.css";

import { FaAward } from "react-icons/fa";
import React from "react";
import { VscFolderLibrary } from "react-icons/vsc";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Intro = () => {
  return (
    <section id="about" >
      <h5>Get to know</h5>
      <h2>About Me</h2>
      <div className="container about__container">

        <div className="about__content">
          <div className="about__cards">
            <div className="about__card">
              <FaAward className="about__icon" />
              <h3>Education</h3>
              <p><strong><i>Victoria University of Wellington</i></strong><br />
                July 2023 - present | Wellington, NZ<br />
                M.S. in Software development</p>

              <p className="cv"><strong><i>Boston University</i></strong><br />
                July 2015 - Jun 2016 | Boston, MA<br />
                M.S. in Statistical Practice</p >
            </div>
            <div className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h3>Work Experience</h3>
              <p><strong><i>Li Auto</i></strong><br />
                Dec 2020 - May 2023 | Beijing, China<br />
                Data Scientist</p >

              <p><strong><i>Ai Bank</i></strong><br />
                Dec 2018 - Nov 2020 | Beijing, China<br />
                Data Analyst</p >
            </div>
          </div>
        </div>

      </div>
    </section >
  );
};

export default Intro;
