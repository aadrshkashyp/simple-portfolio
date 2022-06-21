import "../styles.css";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Header() {
  return (
    <header className="navigation mb-5">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <nav className="navbar navbar-expand-lg navbar-dark px-0 py-3 py-lg-4">
              <a
                className="navbar-brand font-weight-bold mb-0"
                href="/"
                title="Aadarsh Kashyap"
              >
                <img
                  src="https://aadarshkashyap.pw/assets/images/logo.svg"
                  alt="Aadarsh kashyap"
                />
              </a>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
}
