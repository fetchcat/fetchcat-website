import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin, FaFilePdf } from "react-icons/fa";

import styled from "styled-components";

import Container from "../components/Container";
import MiniCard from "../components/Card/MiniCard";

// --- Component --- //

const Home = () => {
  return (
    <Container>
      <StyledLanding>
        <h1>FetchCat</h1>
        <Tagline>Full Stack Web Development</Tagline>
        <CTABadges>
          <MiniCard>
            <FaGithubSquare />
          </MiniCard>
          <MiniCard>
            <FaLinkedin />
          </MiniCard>
          <MiniCard>
            <FaFilePdf />
          </MiniCard>
        </CTABadges>
      </StyledLanding>
    </Container>
  );
};

export default Home;

// --- Styles --- //

const StyledLanding = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Tagline = styled.div`
  margin-bottom: 25px;
`;

const CTABadges = styled.div`
  display: flex;
  flex-direction: row;
  width: 300px;
  justify-content: space-between;
`;
