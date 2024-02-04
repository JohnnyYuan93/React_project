import "./portfolio.css";

import IMG1 from "../../assets/encryption.jpeg";
import IMG2 from "../../assets/webbrowser.png";
import IMG3 from "../../assets/bugworld.webp";
import React from "react";

//Portfolio function
const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Encryption Project",
      img: IMG1,
      description:
        "It is a Java application that can encrypt and decrypt files using AES, DES, and Caesar Cipher.",
      technologies: "JAVA | AES | DES | Caesar Cipher",
      link: "https://gitlab.ecs.vuw.ac.nz/yuanjiap/encryptionproject",
    },
    {
      id: 2,
      title: "Web Browser",
      img: IMG2,
      description:
        "It is a web browser that can open multiple tabs, bookmark pages, and save history.",
      technologies: "JAVA | JavaFx  ",
      link: "https://github.com/JohnnyYuan93/WebBrowser",
    },
    {
      id: 3,
      title: "Bug World",
      img: IMG3,
      description:
        "bug world is a Java application that simulate the world of bugs.",
      technologies: "JAVA | JavaFx  ",
      link: "https://github.com/JohnnyYuan93/WebBrowser",
    },

  ];

  return (
    <section id="portfolio">
      <h4>My Recent Work</h4>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Project Link
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
