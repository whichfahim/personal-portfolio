import "../styles/Projects.scss";

function Projects() {
  return (
    <section className="section-projects">
      <h1 className="u-heading-secondary">Some cool things I've built</h1>
      <div className="project-container">
        <div className="project-img-container">
          <img
            src="src\assets\img\geniotech.png"
            alt="geniotech cover image"
            className="project-img"
          />
        </div>

        <div className="project-description">
          <h4 className="project-heading u-text-color-primary">
            E-Learning Platform
          </h4>
          <h4 className="project-subheading">Geniotech</h4>
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
          <div className="project-doc--icons">
            <a href="#" target="__blank">
              <img src="src\assets\icons\Figma.png" alt="figma icon" />
            </a>
            <a href="#" target="__blank">
              <img src="src\assets\icons\Behance.png" alt="behance logo" />
            </a>
            <a href="#" target="__blank">
              <img src="src\assets\icons\Github.png" alt="github logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
