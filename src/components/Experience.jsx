import "../styles/Experience.scss";

function Experience() {
  return (
    <section className="section-experience" id="experience">
      <h1 className="u-heading-secondary">Work Experience</h1>

      <div className="nav-tabs-container">
        <ul class="nav nav-tabs" id="myTab" role="tablist">
          <li class="nav-item" role="presentation">
            <button
              class="nav-link active"
              id="geniotech-tab"
              data-bs-toggle="tab"
              data-bs-target="#geniotech"
              type="button"
              role="tab"
              aria-controls="geniotech"
              aria-selected="true"
            >
              Geniotech
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="BRAC-IT-tab"
              data-bs-toggle="tab"
              data-bs-target="#BRAC-IT"
              type="button"
              role="tab"
              aria-controls="BRAC-IT"
              aria-selected="false"
            >
              BRAC IT
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="NAL-tab"
              data-bs-toggle="tab"
              data-bs-target="#NAL"
              type="button"
              role="tab"
              aria-controls="NAL"
              aria-selected="false"
            >
              NAL Ltd.
            </button>
          </li>
          <li class="nav-item" role="presentation">
            <button
              class="nav-link"
              id="freelance-tab"
              data-bs-toggle="tab"
              data-bs-target="#freelance"
              type="button"
              role="tab"
              aria-controls="freelance"
              aria-selected="false"
            >
              Freelance
            </button>
          </li>
        </ul>
        <div class="tab-content" id="myTabContent">
          <div
            class="tab-pane fade show active"
            id="geniotech"
            role="tabpanel"
            aria-labelledby="geniotech-tab"
          >
            <h2>Software Engineer Intern</h2>
            <p>September 2023 - April 2024</p>
            <ul>
              <li>
                Collaborated closely with cross-functional teams to design and
                implement intuitive user interfaces, ensuring seamless user
                experiences.
              </li>
              <li>
                Created responsive web interfaces utilizing HTML5, CSS3, ES6,
                and Python (Django), ensuring compatibility across diverse
                browsers and devices.
              </li>
              <li>Designed UI mockups in Figma, prioritizing UX principles.</li>
              <li>
                Identified and resolved issues reported by QA team through
                thorough troubleshooting and debugging processes.
              </li>
              <li>
                Implemented intricate layouts faithfully to designs, optimizing
                user experience.
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade show"
            id="BRAC-IT"
            role="tabpanel"
            aria-labelledby="BRAC-IT-tab"
          >
            <h2>Software Engineer Intern</h2>
            <p>January 2022 - October 2022</p>
            <ul>
              <li>
                Spearheaded the redesign and prototyping of the company's
                employee assessment application using Figma.
                <li>Developed interactive UI prototypes in Figma.</li>
                <li>
                  Optimized application navigation, reducing the number of pages
                  required for user tasks.
                </li>
                <li>
                  Utilized React, JavaScript, HTML, CSS, Bootstrap, and
                  ReactQuery to integrate REST APIs.
                </li>
                <li>
                  Executed advanced responsive design techniques, including
                  media queries, desktop-first approach, and rem units.
                </li>
                <li>
                  Integrated feedback from Business Analysts, Quality Assurance,
                  and team members into project deliverables.
                </li>
                <li>
                  Implemented 7-1 CSS architecture, emphasizing component-based
                  design, BEM methodology, and reusable code.
                </li>
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade show"
            id="NAL"
            role="tabpanel"
            aria-labelledby="NAL-tab"
          >
            <h2>Software Engineer Intern</h2>
            <p>September 2023 - April 2024</p>
            <ul>
              <li>
                Developed functional ASP.NET pages for internal company use.{" "}
              </li>
              <li>
                Collaborated with the development team to maintain and update
                ERP and MRP applications.
              </li>
              <li>
                Designed a web application to analyze factory performance using
                ASP.NET, SQL, and C#.
              </li>
              <li>
                Generated automated performance reports using Crystal Reports
                and SQL Server Reporting Services (SSRS).
              </li>
              <li>
                Utilized SQL Server Management Studio to write SQL queries and
                manage ERP and MRP systems.
              </li>
            </ul>
          </div>
          <div
            class="tab-pane fade show"
            id="freelance"
            role="tabpanel"
            aria-labelledby="freelance-tab"
          >
            <h2>Fiverr</h2>
            <p>January 2021 - July 2021</p>
            <ul>
              <li>
                Collaborated with clients to gather requirements, provide
                regular updates, and deliver projects on time and within budget.
              </li>
              <li>
                Created wireframes, mockups, and prototypes using Figma and
                Adobe XD to visualize design concepts for clients.
              </li>
              <li>
                Utilized version control systems like Git for efficient project
                management and collaboration.
              </li>
              <li>
                Developed RESTful APIs and integrated third-party services to
                enhance website functionality.
              </li>
              <li>
                Optimized website performance and SEO, resulting in improved
                search engine rankings and faster load times.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;
