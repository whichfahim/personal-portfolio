import Logo from "../assets/Logo.svg";
import "../styles/Navbar.scss";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      <div className="main-nav">
        <ol className="main-nav-list">
          <li>
            <a className="main-nav-link" href="#about">
              About
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#projects">
              Projects
            </a>
          </li>
          <li>
            <a className="main-nav-link" href="#experience">
              Experience
            </a>
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Navbar;
