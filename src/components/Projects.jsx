import "../styles/Projects.scss";
import behance from "../assets/icons/Behance.png";
import dribbble from "../assets/icons/Dribbble.png";
import figma from "../assets/icons/Figma.png";
import linkedin from "../assets/icons/LinkedIn.png";
import github from "../assets/icons/Github.png";

function Projects() {
  return (
    <section className="section-projects" id="projects">
      <h1 className="u-heading-secondary">Some cool things I've built</h1>
      <div className="project-container">
        <div className="project-img-container">
          <img
            src="src\assets\img\geniotech.png"
            alt="geniotech cover"
            className="project-img"
          />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            E-Learning Platform
          </h4>
          <p className="project-subheading">Geniotech</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur. Curabitur lorem suscipit
              purus hendrerit mi venenatis.
            </li>
            <li>
              Tellus elementum elit ipsum sed nullam. Sit libero feugiat ipsum
              ultrices lectus et sagittis arcu.
            </li>
            <li>
              Erat purus condimentum mi nisl. Vel sit sit egestas nibh vitae
              nunc suspendisse tincidunt.
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
          <img
            src="src\assets\img\backtoplay.png"
            alt="b2p cover image"
            className="project-img"
          />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">Back To Play</h4>
          <p className="project-subheading">BRAC IT</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur. Curabitur lorem suscipit
              purus hendrerit mi venenatis.
            </li>
            <li>
              Tellus elementum elit ipsum sed nullam. Sit libero feugiat ipsum
              ultrices lectus et sagittis arcu.
            </li>
            <li>
              Erat purus condimentum mi nisl. Vel sit sit egestas nibh vitae
              nunc suspendisse tincidunt.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a
              href="https://www.figma.com/proto/iqjjxBjJAgc4YeknnxhLAv/BackToPlay?page-id=&type=design&node-id=1-4&viewport=334%2C390%2C0.07&t=cGL1fTdBLh6zbFdI-1&scaling=min-zoom&starting-point-node-id=1%3A4"
              target="__blank"
            >
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>
            <a href="#" target="__blank">
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
            </a>
          </div>
        </div>
      </div>
      <div className="project-container">
        <div className="project-img-container">
          <img
            src="src\assets\img\glasscosmetics.png"
            alt="glass cover image"
            className="project-img"
          />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            Glass Website Redesign
          </h4>
          <p className="project-subheading">Glass Cosmetics BD</p>
          <p>May 2023 - October 2024</p>
          <ul>
            <li>
              Lorem ipsum dolor sit amet consectetur. Curabitur lorem suscipit
              purus hendrerit mi venenatis.
            </li>
            <li>
              Tellus elementum elit ipsum sed nullam. Sit libero feugiat ipsum
              ultrices lectus et sagittis arcu.
            </li>
            <li>
              Erat purus condimentum mi nisl. Vel sit sit egestas nibh vitae
              nunc suspendisse tincidunt.
            </li>
          </ul>
          <div className="project-doc--icons-container">
            <a href="#" target="__blank">
              <img src={figma} className="project-doc--icon" alt="figma icon" />
            </a>
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
