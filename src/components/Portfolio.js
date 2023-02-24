import imageProject1 from "./img/project1.png";
import imageProject2 from "./img/project2.jpg";
import imageProject3 from "./img/weather.jpg";
import imageProject4 from "./img/manuscript.jpg";


const Portfolio = () => {
  const projects = [
    {
      id: 1,
      title: "What are we craving today?",
      gitHubLink: "https://github.com/OlgaGav/what-am-i-craving-today",
      applLink: "https://olgagav.github.io/what-am-i-craving-today/",
      techStack: ["JavaScript", "HTML", "CSS", "API"],
      imgSrc: imageProject1,
    },
    {
      id: 2,
      title: "Centiment",
      gitHubLink: "https://github.com/isayahdurst/centiment",
      applLink: "https://centiment-inc.herokuapp.com",
      techStack: [
        "Node",
        "Express",
        "Dotenv",
        "MySQL",
        "Sequelize",
        "Bcyrpt",
        "JWT",
        "Cookies",
        "Handlebars",
        "Bulma CSS",
        "Multer",
      ],
      imgSrc: imageProject2,
    },
    {
      id: 3,
      title: "Weather Forecast Dashboard",
      gitHubLink: "https://github.com/OlgaGav/weather-dashboard-5-day-forecast",
      applLink: "https://olgagav.github.io/weather-dashboard-5-day-forecast/",
      techStack: ["HTML", "CSS", "JavaScript", "Bootstrap", "OpenWeather API"],
      imgSrc: imageProject3,
    },
    {
      id: 4,
      title: "Simple Blog",
      gitHubLink: "https://github.com/OlgaGav/share-ideas-tech-blog",
      applLink: "https://share-ideas-tech-blog.herokuapp.com/",
      techStack: [
        "HTML",
        "CSS",
        "Materialize",
        "JavaScript",
        "MySQL",
        "Sequelize",
        "Express, express-handlebars",
        "bcrypt",
        "Node.js",
        "Heroku",
      ],
      imgSrc: imageProject4,
    },
  ];

  return (
    <div className="tab-container">
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <div className="project-card" key={project.id}>
              <img src={project.imgSrc} alt="preview of the project" />
              <div className="project-header">
                <h3>{project.title}</h3>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.gitHubLink}
                >
                  GitHub
                </a>
                <a
                  className="link"
                  target="_blank"
                  rel="noopener noreferrer"
                  href={project.applLink}
                >
                  View appl.
                </a>
              </div>
            </div>
            <h4>Tech Stack:</h4>
            <ul>
              {project.techStack.map((option, index) => (
                <li key={index}>{option}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
