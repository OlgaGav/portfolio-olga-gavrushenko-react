const Project = ({ projects }) => {
  return (
    <div className="tab-container">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-2 row-cols-lg-3 row-cols-xl-8 g-3">
        {projects.map((project, index) => (
          <div className="col">
            <div className="card" key={index}>
              <img
                src={project.imgSrc}
                alt="preview of the project"
                className="img-project card-img-top"
              />

              <div className="project-header">
                <h5>{project.title}</h5>
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

              <div className="card-body">
                <h5>Tech Stack:</h5>
                <ul>
                  {project.techStack.map((option, index) => (
                    <li key={index}>{option}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Project;
