import "../styles.css";
import "../custom.css";
import "bootstrap/dist/css/bootstrap.min.css";

export default function SubHero() {
  return (
    <section className="py-3 banner">
      <div className="container">
        <div className="row">
          <div className="col-lg-10">
            <div className="my-3 my-lg-5 text-white">
              <h2 className="text-white font-weight-500">
                who’s passionate <br /> about bringing crazy ideas to life
                <span className="text-primary arrow-s1">{">"}</span>
                <span className="dash-s1">_</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
