import "../styles.css";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Hero() {
  return (
    <section className="banner-ont mt-5">
      <div className="container content-block">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="heading text-white">
              <span>
                Hi, I'm{" "}
                <img
                  className="rounded-pill"
                  src="https://aadarshkashyap.pw/assets/images/profile-1.png"
                  alt="*"
                />{" "}
                Aadarsh Kashyap
              </span>
              <span> A Website Developer </span>
              <span>
                based in{" "}
                <img
                  src="https://aadarshkashyap.pw/assets/images/india.png"
                  alt="*"
                />{" "}
                India
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
