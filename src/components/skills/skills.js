import "./skills.css";

const libFrame = [
  { src: "/icons/react.svg", alt: "react" },
  { src: "/icons/nextjs.svg", alt: "nextjs" },
  { src: "/icons/redux.svg", alt: "redux" },
  { src: "/icons/tailwind.svg", alt: "tailwind" },
];

const langTools = [
  { src: "/icons/html.svg", alt: "html" },
  { src: "/icons/css.svg", alt: "css" },
  { src: "/icons/javascript.svg", alt: "redux" },
  { src: "/icons/npm.svg", alt: "npm" },
  { src: "/icons/vite.svg", alt: "vite" },
];

const devops = [
  { src: "/icons/github.svg", alt: "github" },
  { src: "/icons/git.svg", alt: "git" },
  { src: "/icons/docker.svg", alt: "docker" },
];

export default function Skills() {
  return (
    <section id="skills" className="skills-section">
      <div>
        <div className="section-skills">
          <p className="secondary-title">SKILLS</p>
          <h1 className="primary-title">My Skills</h1>
          <p className="skills-desc">
            I have hands-on experience creating high-quality, visually appealing
            user experiences <br /> using modern frontend architecture,
            selecting optimal tools to build scalable, <br />
            engaging web applications focused on design and functionality.
          </p>

          <div className="skills">
            <h3>LIBRARIES AND FRAMEWORKS</h3>
            <div className="library-icons">
              <div className="lib-icon-cont">
                {libFrame.map((el) => (
                  <img className="skills-img" src={el.src} alt={el.alt} />
                ))}
              </div>
            </div>
          </div>
          <div className="skills">
            <h3>LANGUAGES AND TOOLS</h3>
            <div className="lang-tool-icon">
              <div className="lib-icon-cont">
                {langTools.map((el) => (
                  <img className="skills-img" src={el.src} alt={el.alt} />
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="skills">
          <h3>DEVOPS</h3>
          <div className="devops-icon">
            <div className="lib-icon-cont">
              {devops.map((el) => (
                <img className="skills-img" src={el.src} alt={el.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
