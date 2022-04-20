import React from "react";

import { FaGithub, FaLink } from "react-icons/fa";

import styled from "styled-components";

import {
  StyledBlueTag,
  StyledOrangeTag,
  StyledPinkTag,
  StyledGreenTag,
  StyledLightBlueTag,
  StyledGreyTag,
} from "../components/Tags";

import { PageContainer } from "../components/Containers";

// --- Components --- //

const Portfolio = () => {
  return (
    <PageContainer>
      <h1>Portfolio</h1>
      <StyledProject>
        <div className="project-info">
          <h3>FetchCat.ca</h3>
          <div className="info">Full-Stack Portfolio Site</div>
          <div className="tags">
            <span>Tags:</span>
            <StyledOrangeTag>HTML5</StyledOrangeTag>
            <StyledBlueTag>CSS</StyledBlueTag>
            <StyledGreenTag>JavaScript</StyledGreenTag>
            <StyledLightBlueTag>React</StyledLightBlueTag>
            <StyledGreenTag>Node.js</StyledGreenTag>
            <StyledGreyTag>Express</StyledGreyTag>
            <StyledGreenTag>MongoDB</StyledGreenTag>
          </div>
        </div>
        <div className="project-links">
          <StyledSiteLink href="https://fetchcat.ca" target="_blank">
            <FaLink />
            View Site
          </StyledSiteLink>
          <StyledCodeLink
            href="https://github.com/fetchcat/fetchcat-website"
            target="_blank"
          >
            <FaGithub />
            View Code
          </StyledCodeLink>
        </div>
      </StyledProject>
      <StyledProject>
        <div className="project-info">
          <h3>Grocery List App (React)</h3>
          <div className="info">Full-Stack Grocery List App</div>
          <div className="tags">
            <span>Tags:</span>
            <StyledOrangeTag>HTML5</StyledOrangeTag>
            <StyledBlueTag>CSS</StyledBlueTag>
            <StyledGreenTag>JavaScript</StyledGreenTag>
            <StyledLightBlueTag>React</StyledLightBlueTag>
            <StyledGreenTag>Node.js</StyledGreenTag>
            <StyledGreyTag>Express</StyledGreyTag>
            <StyledGreenTag>MongoDB</StyledGreenTag>
          </div>
        </div>
        <div className="project-links">
          <StyledSiteLink href="https://fetchcat.ca" target="_blank">
            <FaLink />
            View Site
          </StyledSiteLink>
          <StyledCodeLink href="https://github.com/fetchcat/" target="_blank">
            <FaGithub />
            View Code
          </StyledCodeLink>
        </div>
      </StyledProject>
      <StyledProject>
        <div className="project-info">
          <h3>Grocery List App (Vanilla JS)</h3>
          <div className="info">Full-Stack Grocery List App</div>
          <div className="tags">
            <span>Tags:</span>
            <StyledOrangeTag>HTML5</StyledOrangeTag>
            <StyledBlueTag>CSS</StyledBlueTag>
            <StyledGreenTag>JavaScript</StyledGreenTag>
            <StyledGreenTag>Node.js</StyledGreenTag>
            <StyledGreyTag>Express</StyledGreyTag>
            <StyledGreenTag>MongoDB</StyledGreenTag>
            <StyledBlueTag>WebPack</StyledBlueTag>
          </div>
        </div>
        <div className="project-links">
          <StyledSiteLink href="https://fetchcat.ca" target="_blank">
            <FaLink />
            View Site
          </StyledSiteLink>
          <StyledCodeLink href="https://github.com/fetchcat/" target="_blank">
            <FaGithub />
            View Code
          </StyledCodeLink>
        </div>
      </StyledProject>
      <StyledProject>
        <div className="project-info">
          <h3>WeatherSplash</h3>
          <div className="info">Vanilla JS App - REST API</div>
          <div className="tags">
            <span>Tags:</span>
            <StyledOrangeTag>HTML5</StyledOrangeTag>
            <StyledBlueTag>CSS</StyledBlueTag>
            <StyledPinkTag>SASS</StyledPinkTag>
            <StyledBlueTag>REST API</StyledBlueTag>
            <StyledGreenTag>JavaScript</StyledGreenTag>
            <StyledBlueTag>WebPack</StyledBlueTag>
          </div>
        </div>
        <div className="project-links">
          <StyledSiteLink href="https://fetchcat.ca" target="_blank">
            <FaLink />
            View Site
          </StyledSiteLink>
          <StyledCodeLink href="https://github.com/fetchcat/" target="_blank">
            <FaGithub />
            View Code
          </StyledCodeLink>
        </div>
      </StyledProject>
      <StyledProject>
        <div className="project-info">
          <h3>Local Restaurants</h3>
          <div className="info">Vanilla JS App - Google Maps - REST API</div>
          <div className="tags">
            <span>Tags:</span>
            <StyledOrangeTag>HTML5</StyledOrangeTag>
            <StyledBlueTag>CSS</StyledBlueTag>
            <StyledPinkTag>SASS</StyledPinkTag>
            <StyledBlueTag>REST API</StyledBlueTag>
            <StyledGreenTag>JavaScript</StyledGreenTag>
            <StyledBlueTag>WebPack</StyledBlueTag>
          </div>
        </div>
        <div className="project-links">
          <StyledSiteLink href="https://fetchcat.ca" target="_blank">
            <FaLink />
            View Site
          </StyledSiteLink>
          <StyledCodeLink href="https://github.com/fetchcat/" target="_blank">
            <FaGithub />
            View Code
          </StyledCodeLink>
        </div>
      </StyledProject>
    </PageContainer>
  );
};

export default Portfolio;

// --- Styles --- //

const StyledProject = styled.article`
  border-left: solid 10px ${(props) => props.theme.primary};
  border-radius: 10px;
  margin: 10px;
  padding: 20px;
  background-color: white;
  display: flex;
  flex-wrap: wrap;
  .project-container {
    display: flex;
  }
  .project-links {
    display: flex;
    flex-direction: column;
  }

  .project-info {
    flex-wrap: wrap;
    margin-right: auto;
  }

  .info {
    color: ${(props) => props.theme.darkGrey};
    font-size: 0.8em;
    margin-bottom: 10px;
  }

  .tags {
    span {
      margin-right: 10px;
    }
    display: flex;
    flex-wrap: wrap;
  }

  h3 {
    margin-bottom: 10px;
  }
`;

const StyledLink = styled.a`
  color: white;
  text-decoration: none;
  padding: 7px 20px;
  border-radius: 10px;
  display: flex;
  align-items: center;
  svg {
    margin-right: 10px;
  }
`;

const StyledSiteLink = styled(StyledLink)`
  background-color: ${(props) => props.theme.primary};
  :hover {
    background-color: ${(props) => props.theme.primaryHighlight};
  }
  margin-bottom: 15px;
`;

const StyledCodeLink = styled(StyledLink)`
  background-color: ${(props) => props.theme.cta};
  :hover {
    background-color: ${(props) => props.theme.ctaHighlight};
  }
`;
