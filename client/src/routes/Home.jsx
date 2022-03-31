import React, { useContext } from "react";
import { FaGithubSquare, FaLinkedin } from "react-icons/fa";

import styled from "styled-components";

import { UserContext } from "../context/UserContext";

import Container from "../components/Container";

const StyledLanding = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Home = () => {
  const [user, setUser] = useContext(UserContext);
  const logout = () => {
    setUser({ isAuth: false });
    localStorage.removeItem("user");
  };

  return (
    <Container>
      <StyledLanding>
        <h1>FetchCat</h1>
        <div>Full Stack Development</div>
        <div>
          <div>
            <FaGithubSquare />
          </div>
          <div>
            <FaLinkedin />
          </div>
          <div>c</div>
        </div>
      </StyledLanding>
    </Container>
  );
};

export default Home;
