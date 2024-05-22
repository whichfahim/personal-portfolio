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
          Lorem ipsum dolor sit amet consectetur. Consequat ultrices enim
          bibendum ipsum vel neque dui facilisis quis. In leo adipiscing tortor
          elementum purus vita e venenatis.
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
          <img className="socials__icon--github" src={github} />
        </a>
        <a
          href="https://www.linkedin.com/in/fahim-imtiaz/"
          target="__blank"
          className="socials__icon"
        >
          <img className="socials__icon--linkedin" src={linkedin} />
        </a>
        <a
          href="https://www.behance.net/fahimimtiaz3"
          target="__blank"
          className="socials__icon"
        >
          <img className="socials__icon--behance" src={behance} />
        </a>
        <a
          href="https://dribbble.com/whichfahim"
          target="__blank"
          className="socials__icon"
        >
          <img className="socials__icon--dribbble" src={dribbble} />
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
