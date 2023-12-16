import Logo from '../assets/Logo.svg'
import '../styles/Navbar.css'

function Navbar(){
    return(
        <div className='navbar'>
        <div className='logo-container'><img className='logo' src={Logo} /></div>
        <div className='main-nav'>
          <ol className="main-nav-list">
            <li><a className="main-nav-link" href="#"><span className='u-txt-color-secondary'>01.</span> About</a> </li>
            <li><a className="main-nav-link" href="#"><span className='u-txt-color-secondary'>02.</span> Experience</a></li>
            <li><a className="main-nav-link" href="#"><span className='u-txt-color-secondary'>03.</span> Projects</a></li>
          </ol>
        </div>
      </div>
    )
}

export default Navbar;