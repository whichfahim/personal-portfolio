import "../styles/Header.css";

function Header() {
  return (
    <section className="section-header">
      <div className="heading-container">
        <p className="heading-super">Hi, my name is</p>
        {/* <div className="heading-main"> */}
        <h1 className="heading-main--title">Fahim Imtiaz</h1>
        <h1 className="heading-main--subtitle">I build things for the web</h1>
        {/* </div> */}
        <div className="heading-text-container">
          <p className="heading-text">
            I like to think this is where art and code combine to make magic.
          </p>
        </div>
      </div>
      <div className="heading--btn-container">
        <button className="btn-primary">View resume</button>
      </div>
    </section>
  );
}

export default Header;
