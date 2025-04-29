import "./hero.css";

export default function Hero() {
  return (
    <section id="home" className="hero-section">
      <div className="hero">
        <div className="hero-text">
          <h1>Hi, I am Hussen Ali</h1>
          <p className="skill-desc">
            A Front-End Developer & Design <br />
            enthusiast
          </p>
          <div className="social-icons">
            <div className="icons-cont">
              <a
                href="mailto:ha0959943@gmail.com"
                aria-label="Email"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  className="social-icon"
                  name="mail-outline"
                ></ion-icon>
              </a>
            </div>
            <div className="icons-cont">
              {" "}
              <a
                href="https://www.linkedin.com/in/hussen-ali-9138ab289"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon
                  className="social-icon"
                  name="logo-linkedin"
                ></ion-icon>
              </a>
            </div>
            <div className="icons-cont">
              {" "}
              <a
                href="https://github.com/Hussena12"
                target="_blank"
                rel="noopener noreferrer"
              >
                <ion-icon className="social-icon" name="logo-github"></ion-icon>
              </a>
            </div>
          </div>

          <div className="hero-icons">
            <button className="btn-download talk">
              <p>Let's talk</p>
            </button>
            <button className="btn-download down">
              <p>
                <ion-icon
                  className="down-icon"
                  name="arrow-down-circle-outline"
                ></ion-icon>
              </p>
              <p> Download CV</p>
            </button>
          </div>
        </div>
        <div className="">
          <img src="/img/hero-img.svg" className="hero-img" alt="hero-img" />
        </div>
      </div>
    </section>
  );
}
