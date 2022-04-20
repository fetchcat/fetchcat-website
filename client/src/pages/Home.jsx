import { NavLink } from "react-router-dom";

import styled from "styled-components";

import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";
import { GrMail } from "react-icons/gr";

import {
  StyledBlueTag,
  StyledOrangeTag,
  StyledPinkTag,
  StyledGreenTag,
  StyledLightBlueTag,
  StyledGreyTag,
  StyledYellowTag,
} from "../components/Tags";

import Button from "../components/Button";

// --- Component --- //

const Home = () => {
  return (
    <>
      <StyledHero>
        <h1>Hi, I'm Michelle</h1>
        <p>Self-Taught Web Developer</p>
        <div className="cta-links">
          <FaGithubSquare />
          <FaLinkedin />
          <FaFilePdf />
        </div>
        <NavLink to="/contact">
          <Button primary>
            <GrMail /> Contact
          </Button>
        </NavLink>
      </StyledHero>
      <StyledSkills>
        <h1>Skills</h1>
        <div className="skill-container">
          <div className="skill-card">
            <h2>Front-End</h2>
            <div className="tag-box">
              <StyledOrangeTag>HTML5</StyledOrangeTag>
              <StyledBlueTag>CSS</StyledBlueTag>
              <StyledPinkTag>SASS</StyledPinkTag>
              <StyledGreenTag>JavaScript</StyledGreenTag>
              <StyledLightBlueTag>React</StyledLightBlueTag>
            </div>
          </div>
          <div className="skill-card">
            <h2>Back-End</h2>
            <div className="tag-box">
              <StyledGreenTag>Node.js</StyledGreenTag>
              <StyledGreyTag>Express</StyledGreyTag>
              <StyledPinkTag>HTTP Protocol</StyledPinkTag>
              <StyledBlueTag>REST API</StyledBlueTag>
            </div>
          </div>
          <div className="skill-card">
            <h2>Misc.</h2>
            <div className="tag-box">
              <StyledYellowTag>Google Cloud</StyledYellowTag>
              <StyledOrangeTag>Bash Scripting</StyledOrangeTag>
              <StyledGreenTag>MongoDB</StyledGreenTag>
              <StyledGreyTag>Git and Github</StyledGreyTag>
              <StyledBlueTag>WebPack</StyledBlueTag>
              <StyledYellowTag>Chrome DevTools</StyledYellowTag>
            </div>
          </div>
        </div>
      </StyledSkills>
    </>
  );
};

export default Home;

// --- Styles --- //

const StyledHero = styled.div`
  padding: 20px;
  margin-top: 50px;
  h1 {
    margin-bottom: 0px;
  }
  background-color: ${(props) => props.theme.background};
  display: flex;
  min-height: 550px;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  .cta-links {
    display: flex;
    align-items: center;
    margin: 20px 0px 50px 0px;
    svg {
      width: 40px;
      height: 40px;
      margin: 0px 10px;
      color: ${(props) => props.theme.dark};
    }
  }
`;

const StyledSkills = styled.div`
  h1 {
    text-align: center;
    color: white;
    margin-bottom: 20px;
  }
  background-color: ${(props) => props.theme.secondary};
  min-height: 400px;
  display: flex;
  flex: 1;
  padding: 20px;
  flex-direction: column;
  .skill-container {
    display: flex;
  }
  .skill-card {
    width: 100%;
    margin-right: 20px;
    border-radius: 10px;
    padding: 20px;
    background: white;
    h2 {
      text-align: center;
      margin-bottom: 20px;
    }
  }
  .tag-box {
    display: flex;
    flex-wrap: wrap;
  }
`;
