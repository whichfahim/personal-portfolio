function Navbar(){
    return(
        <div className='navbar'>
        <div className='logo'></div>
        <div className='main-nav'>
          <ol className="main-nav-list">
            <li><a className="main-nav-link" href="#">About</a> </li>
            <li><a className="main-nav-link" href="#">Experience</a></li>
            <li><a className="main-nav-link" href="#">Projects</a></li>
          </ol>
        </div>
      </div>
    )
}

export default Navbar;