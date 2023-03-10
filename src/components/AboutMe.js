import photoSrc from "./img/avatarL.jpg";

const AboutMe = () => {
  return (
    <div className="tab-container">
      <div className="container">
        <div className="row">
          <div className="col-sm-10 col-md-5 col-lg-5">
            <img
              src={photoSrc}
              alt="head shot of Olga Gavrushenko"
              className="img-thumbnail"
            />
          </div>
          <div className="col-sm-10 col-md-7 col-lg-7 aboutMe text-break">
            <p>
              I am certified Full Stack Developer. Completed Berkley UC
              Bootcamp. I am proficient in HTML5, CSS, JavaScript, jQuery,
              Bootstrap, Node.js, Express.js, React.js, MongoDB, MySQL, Git and
              more. Proficient in all phases of the software development
              lifecycle (SDLC).
            </p>
            <p>
              In background I have progressive experiense in Quality Assuranse.
              Expertise in creating detailed test plans, test cases for manual
              and automation testing within the application under test, testing
              functional and non-functional requirements, requirements analysis,
              design automation framework for UI using Selenium WebDriver and
              RESTfull API using RestAssured (Java), develop and maintain
              frameworks. 
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
