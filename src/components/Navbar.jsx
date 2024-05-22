import Logo from "../assets/Logo.svg";

function Navbar() {
  return (
    <div className="navbar">
      <div className="logo-container">
        <img className="logo" src={Logo} />
      </div>
      <div className="main-nav">
        <ul className="main-nav-list">
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
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
