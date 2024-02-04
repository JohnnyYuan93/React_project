import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/jiapeng-yuan-b448437b/"
        target="_blank"
      >
        <BsLinkedin size={20} />
      </a>
      <a
        href="https://github.com/JohnnyYuan93"
        target="_blank"
      >
        <FaGithub size={20}/>
      </a>
    </div>
  );
};

export default HeaderSocials;
