import React from 'react';
import CVC from './CV';
import Socials from './Socials';
import './header.css';
import Typewriter from "typewriter-effect";
import background from "../../assets/background.jpg";
import Contact from "../contact/Contact";
import Experience from "../experience/Experience";
import Intro from "../intro/Intro";

const Header = () => {
  return (
    <header id="home" >
      <div className="container header__container">
        <h4>Hello I'm</h4>
        <h1>Jiapeng(Johnny) Yuan</h1>
        <h4 className="text-light">
          <Typewriter
            options={{
              strings: [
                "Full-Stack Developer",
                "Data Analyst",
              ],
              autoStart: true,
              loop: true,
              deleteSpeed: 50,
            }}
          />
        </h4>
        <Intro />
        <CVC />
        <Experience />
        <Contact />
        <Socials />
      </div>
    </header>
  );
};

export default Header;
