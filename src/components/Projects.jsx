import behance from "../assets/icons/Behance.png";
import figma from "../assets/icons/Figma.png";
import github from "../assets/icons/Github.png";

import geniotech from "../assets/img/geniotech.png";
import backtoplay from "../assets/img/backtoplay.png";
import glasscosmetics from "../assets/img/glasscosmetics.png";

function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1 className="u-heading-secondary">Some cool things I've built</h1>
      <div className="project-container">
        <div className="project-img-container">
          <img src={geniotech} alt="geniotech cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            E-Learning Platform
          </h4>
          <p className="project-subheading">Geniotech</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Collaborated with a cross-functional team of four developers to
              develop an e-learning platform.
            </li>
            <li>
              Designed a high-fidelity mockup using Figma for UI/UX
              visualization.
            </li>
            <li>
              Integrated WebRTC for video calling, screen sharing, and chat
              functionalities.
            </li>
            <li>
              Implemented Square payment gateway using APIs to facilitate secure
              transactions.
            </li>
            <li>
              Utilized Django, Python, HTML, CSS, Bootstrap, and JavaScript for
              development.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a
              href="https://www.figma.com/proto/bffZzVzfgH1bNkbBNNhFJS/Geniotech-v0.2?page-id=1%3A3&type=design&node-id=5-2&viewport=1028%2C142%2C0.36&t=dd8cDrRMi6G4L30i-1&scaling=min-zoom&starting-point-node-id=7%3A149"
              target="__blank"
            >
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>
            <a
              href="https://www.behance.net/gallery/197590325/Geniotech-Robotics-and-Programming-for-kids"
              target="__blank"
            >
              <img
                src={behance}
                className="project-doc--icon"
                alt="behance logo"
              />
            </a>
            <a href="https://github.com/whichfahim/GENIO-TECH" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img src={backtoplay} alt="b2p cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">Back To Play</h4>
          <p className="project-subheading">BRAC IT</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Spearheaded the redesign of the company's employee assessment
              application, enhancing usability and design.
            </li>
            <li>
              Streamlined application navigation by reducing the number of pages
              required for user interaction.
            </li>
            <li>
              Utilized React, JavaScript, HTML, CSS, Bootstrap, and ReactQuery
              for REST API integration.
            </li>
            <li>
              Incorporated feedback from Business Analysts (BA), Quality
              Assurance (QA) teams, and development team members into the
              development process.
            </li>
            <li>
              Leveraged version control tools, specifically GitLab, to
              collaborate effectively with a team of five developers.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a
              href="https://www.figma.com/proto/iqjjxBjJAgc4YeknnxhLAv/BackToPlay?page-id=&type=design&node-id=1-4&viewport=334%2C390%2C0.07&t=cGL1fTdBLh6zbFdI-1&scaling=min-zoom&starting-point-node-id=1%3A4"
              target="__blank"
            >
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>
            {/* <a href="#" target="__blank">
              <img
                src={behance}
                className="project-doc--icon"
                alt="behance logo"
              />
            </a>
            <a href="#" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a> */}
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img src={glasscosmetics} alt="glass cover" className="project-img" />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            Glass Website Redesign
          </h4>
          <p className="project-subheading">Glass Cosmetics BD</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Redesigned company website while maintaining brand-consistent
              layout and colors.
            </li>
            <li>
              Produced wireframes and progressed through low-fidelity to
              high-fidelity mockups in Figma.
            </li>
            <li>Implemented development using HTML, CSS, SASS, and JS.</li>
            <li>Ensured design responsiveness across all screen sizes.</li>
            <li>Link to demo on Github: Glass Cosmetics Redesign</li>
          </ul>
          <div className="project-doc--icons-container">
            {/* <a href="#" target="__blank">
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a> */}
            <a
              href="https://www.behance.net/gallery/139245067/Glass-Website-Redesign"
              target="__blank"
            >
              <img
                src={behance}
                className="project-doc--icon"
                alt="behance logo"
              />
            </a>
            <a href="https://whichfahim.github.io/glass/" target="__blank">
              <img
                src={github}
                className="project-doc--icon"
                alt="github logo"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
