import behance from "../assets/icons/Behance.png";
import dribbble from "../assets/icons/Dribbble.png";
import linkedin from "../assets/icons/LinkedIn.png";
import github from "../assets/icons/Github.png";

function Header() {
  return (
    <section className="section-header">
      <div className="heading-container">
        <p className="heading-super">Hi, my name is</p>
        <h1 className="heading-main--title">Fahim Imtiaz</h1>
        <h1 className="heading-main--subtitle">I build things for the web</h1>
        <p className="heading-text">
          I'm a software engineer with a focus on designing, prototyping, and
          building exceptional and memorable digital experiences.
        </p>
        <a className="btn-primary" href="src\Resume.pdf" target="_blank">
          View resume
        </a>
      </div>
      <div className="socials">
        <a
          href="https://github.com/whichfahim"
          target="__blank"
          className="socials__icon"
        >
          <img
            className="socials__icon socials__icon--github"
            src={github}
            alt="github icon"
          />
        </a>
        <a
          href="https://www.linkedin.com/in/fahim-imtiaz/"
          target="__blank"
          className="socials__icon"
        >
          <img
            className="socials__icon socials__icon socials__icon--linkedin"
            src={linkedin}
            alt="linkedin icon"
          />
        </a>
        <a
          href="https://www.behance.net/fahimimtiaz3"
          target="__blank"
          className="socials__icon"
        >
          <img
            className="socials__icon socials__icon--behance"
            src={behance}
            alt="behance icon"
          />
        </a>
        <a
          href="https://dribbble.com/whichfahim"
          target="__blank"
          className="socials__icon"
        >
          <img
            className="socials__icon socials__icon--dribbble"
            src={dribbble}
            alt="dribbble icon"
          />
        </a>
        <div className="vertical"></div>
      </div>
      <div className="circles">
        <div className="circle-primary"></div>
        <div className="circle-secondary"></div>
        <div className="circle-grey"></div>
      </div>
    </section>
  );
}

export default Header;
