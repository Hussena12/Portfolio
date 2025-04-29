import "./projects.css";

const displayInfo = [
  {
    src: "/img/google-health.jpg",
    alt: "google-heath",
    text: "Note Taking App",
  },
  {
    src: "/img/phoenix.jpg",
    alt: "phoenix",
    text: "E-commerce Website",
  },
  {
    src: "/img/project-man.jpg",
    alt: "project-management",
    text: "Expense-Tracker App",
  },
  {
    src: "/img/cloud-store.jpg",
    alt: "cloud-store",
    text: "Social-media App",
  },
  {
    src: "/img/react-social.jpg",
    alt: "react-social",
    text: "Weather App",
  },
  {
    src: "/img/apple-design.jpg",
    alt: "apple-design",
    text: "Job Portal",
  },
];

export default function Projects() {
  return (
    <section id="works" className="projects-section">
      <div>
        <p className="secondary-title">Works</p>
        <p className="primary-title"> My Works</p>
        <p className="pro-title">
          Search projects by title or filter by category
        </p>
        <div className="pro-search">
          <div className="pro-input">
            <button className="search-btn">
              <ion-icon
                className="search-icon"
                name="search-outline"
              ></ion-icon>
            </button>
            <input placeholder="  Search Projects "></input>
          </div>
          <div className="pro-select">
            <select className="pro-selection">
              <option> All projects</option>
              <option>Web Application</option>
              <option>MObile Application</option>
              <option>UI/UX Design</option>
              <option>Branding</option>
            </select>
          </div>
        </div>

        <div className="display-projects">
          {displayInfo.map((el) => (
            <div className="pro-card">
              <img className="display-img" src={el.src} alt={el.alt}></img>
              <p>{el.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
