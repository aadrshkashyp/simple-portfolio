import "../styles.css";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Resume() {
  return (
    <div className="container my-5 black-bg">
      <section>
        <div className="neumo-card mb-4">
          <div className="row">
            <div className="col-md-6">
              <img
                className="img-fluid rounded-left"
                src="https://aadarshkashyap.pw/assets/images/pimg-1.png"
                alt="project"
              />
            </div>

            <div className="col-md-6 p-5 align-self-center">
              <h5 className="font-weight-normal text-light mb-3">About Me</h5>

              <p className="text-muted">
                I'm a Website developer with a strong history in website
                management and development. Expert in all aspects of website
                creation, including design, plug-ins, SEO, optimization, and
                Website Hosting implementation. Skilled in creating engaging and
                interactive websites. I also have Frontend Coding and Graphic
                Designing capabilities which I usually do by using web search or
                collaborate with developers directly, that's a fun thing for me
              </p>

              <ul className="list-unstyled font-small mt-5 mb-0">
                <li>
                  <p className="text-uppercase text-light mb-2">
                    <strong>Work experiances</strong>
                  </p>
                  <p className="text-muted mb-4">Lead Developer at RTIwala.</p>
                </li>

                <li>
                  <p className="text-uppercase text-light mb-2">
                    <strong>Education</strong>
                  </p>
                  <p className="text-muted mb-4">
                    Learning MERN stack with SkillSafari
                  </p>
                </li>

                <li>
                  <p className="text-uppercase text-light mb-2">
                    <strong>Main expertise</strong>
                  </p>
                  <p className="text-muted mb-4">
                    Front-End Development, Wordpress Development, Website
                    Management
                  </p>
                </li>

                <li>
                  <p className="text-uppercase text-light mb-2">
                    <strong>Languages Abilities</strong>
                  </p>
                  <p className="text-muted mb-4">Hindi, English</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
