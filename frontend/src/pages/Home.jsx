import { NavLink } from "react-router-dom";

import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

// --- Component --- //

const Home = () => {
  return (
    <div className="container">
      <div className="hero">
        <h1>Hi, I'm Michelle</h1>
        <p>Self-Taught Web Developer</p>
        <div className="cta-links">
          <a
            href="https://github.com/fetchcat"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithubSquare />
          </a>
          <a
            href="https://www.linkedin.com/in/michelleerogers/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
          <a href="#" target="_blank" rel="noreferrer">
            <FaFilePdf />
          </a>
        </div>
        <NavLink to="/contact">
          <button className="primary button">
            <GrMail /> Contact
          </button>
        </NavLink>
      </div>
      <div className="skills">
        <h1>Skills</h1>
        <div className="skill-container">
          <div className="skill-card">
            <h2>Front-End</h2>
            <div className="tag-box">
              <div className="tag orange">HTML5</div>
              <div className="tag blue">CSS</div>
              <div className="tag pink">SASS</div>
              <div className="tag green">JavaScript</div>
              <div className="tag lightblue">React</div>
            </div>
          </div>
          <div className="skill-card">
            <h2>Back-End</h2>
            <div className="tag-box">
              <div className="tag green">Node.js</div>
              <div className="tag grey">Express</div>
              <div className="tag pink">HTTP Protocol</div>
              <div className="tag blue">REST API</div>
            </div>
          </div>
          <div className="skill-card">
            <h2>Misc.</h2>
            <div className="tag-box">
              <div className="tag orange">Google Cloud</div>
              <div className="tag grey">Bash Scripting</div>
              <div className="tag green">MongoDB</div>
              <div className="tag grey">Git and Github</div>
              <div className="tag blue">WebPack</div>
              <div className="tag yellow">Chrome DevTools</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
