import "../styles/About.scss";
import Logo from "../assets/img/me.jpeg";

function About() {
  return (
    <section className="section-about" id="about">
      <h1 className="u-heading-secondary">About me</h1>
      <div className="about-me-container">
        <img src={Logo} alt="self portrait" className="about-img" />
        <ul className="about-me-list">
          <li>
            I am a passionate designer and web developer with a keen eye for
            good design and a love for the creative process. I thrive on
            envisioning innovative designs, creating detailed wireframes and
            mockups, and bringing them to life through code. With extensive
            experience in HTML, CSS, SASS, JavaScript, and front-end frameworks
            like React, I have successfully collaborated with{" "}
            <strong>startups</strong>, <strong>large corporations</strong>, and{" "}
            <strong>individual clients</strong> to deliver outstanding web
            solutions.
          </li>
          <li>
            As a seasoned web developer, I specialize in building{" "}
            <strong>responsive</strong>, <strong>user-friendly</strong> websites
            and applications. My proficiency in front-end development ensures
            that the end product not only looks great but also{" "}
            <strong>performs optimally</strong>. I am dedicated to continuously
            improving my skills and staying up-to-date with the latest industry
            trends.
          </li>
          <li>
            In addition to my professional work, I have a strong interest in{" "}
            <strong>SEO</strong>, ensuring that the websites I develop are{" "}
            <strong>optimized for search engines</strong> to achieve higher
            rankings and better visibility. This attention to detail helps drive
            more traffic and improve user engagement.
          </li>
          <li>
            When I'm not coding or designing, you can find me playing or
            watching football, catching up on my want-to-watch list, hitting the
            gym, or training to become a <strong>Pokemon master</strong>.
          </li>
        </ul>
      </div>
    </section>
  );
}

export default About;
