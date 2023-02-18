const Portfolio = () => {
  const projects = 
    [
      { 
        id: 1,
        title: 'What are we craving today?', 
        gitHubLink: 'https://github.com/OlgaGav/what-am-i-craving-today',
        applLink: 'https://olgagav.github.io/what-am-i-craving-today/',
        techStack: [
          'JavaScript',
          'HTML',
          'CSS',
          'API'
        ],
        // techStack: 'JavaScript, HTML, CSS, API',
        imgSrc: './img/project1.png'
      },
      { 
        id: 2,
        title: 'Centiment', 
        gitHubLink: 'https://github.com/isayahdurst/centiment',
        applLink: 'https://centiment-inc.herokuapp.com',
        techStack: ['Node', 'Express', 'Dotenv', 'MySQL', 'Sequelize', 'Bcyrpt', 'JWT', 'Cookies', 'Handlebars', 'Bulma CSS', 'Multer'],
        // techStack: 'Node, Express, Dotenv, MySQL, Sequelize, Bcyrpt, JWT, Cookies, Handlebars, Bulma CSS, Multer',
        imgSrc: './img/project2.jpg'
      },
    ]

  return ( 
    <div>
      <h2>My Portfolio</h2>
      <div className="projects">
        {projects.map((project) => (
          <div className="project">
          <div className="project-card" key={project.id}>
            <img src={project.imgSrc} alt="preview of the project" />
            <div className="project-header">
              <h3>{project.title}</h3>
              <a className="link" href={project.gitHubLink}>GitHub</a>
              <a className="link" href={project.applLink}>View appl.</a>
            </div>
          </div> 
          <h3>Tech Stack:</h3>
          <ul>
            {project.techStack.map((option) => (
              <li>{option}</li>
            ))}
          </ul>
          </div>
          
        ))}
      </div>
    </div>
    
   );
}
 
export default Portfolio;