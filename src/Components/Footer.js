import "../styles.css";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Footer() {
  return (
    <footer className="footer-alt text-center black-bg">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-12 ">
            <div className="section-title">
              <h4 className="h1 font-weight-light text-white mb-0">
                Have a project in mind?
              </h4>
              <h4 className="h1 font-weight-light text-white mb-4 pb-3">
                Let’s get to work.
              </h4>
            </div>
          </div>
          <div className="col-12 ">
            <ul className="footer-link text-center list-unstyled list-inline">
              <li className="list-inline-item">
                <a href="https://github.com/aadrshkashyp">GitHub</a>
              </li>
              <li className="list-inline-item">
                <a href="https://twitter.com/AadarshKashyp">Twitter</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.instagram.com/aadrshkashyp/">Instagram</a>
              </li>
              <li className="list-inline-item">
                <a href="https://www.linkedin.com/in/aadarsh--kashyap/">
                  Linkedin
                </a>
              </li>
            </ul>
          </div>
          <div className="col-12 ">
            <p className="h6 font-weight-light mb-0 ">
              <a>
                Copyright &copy; Developed by
                <img
                  className="footer-img"
                  src="https://aadarshkashyap.pw/assets/images/ak.svg"
                  alt=""
                />
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
