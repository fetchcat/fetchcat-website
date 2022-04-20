import React, { useContext } from "react";
import styled from "styled-components";

import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";

const UserBanner = () => {
  const [user, setUser] = useContext(UserContext);

  const logout = () => {
    setUser({ isAuth: false });
    localStorage.removeItem("token");
  };

  if (user.isAuth) {
    return (
      <StyledUserBanner>
        <div>
          <div>Hello, {user.firstName}</div>
        </div>
        <div>
          <StyledLink to="/dashboard">Dashboard</StyledLink>
          <StyledLink to="/createblog">Create Blog</StyledLink>
          <StyledLogoutLink to="/" onClick={logout}>
            Logout
          </StyledLogoutLink>
        </div>
      </StyledUserBanner>
    );
  } else {
    return null;
  }
};

export default UserBanner;

const StyledUserBanner = styled.div`
  display: flex;
  padding: 20px 20px;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-top: 60px;
  background-color: ${(props) => props.theme.background};
  border-bottom: solid 1px #cccccc;
  min-height: 120px;
`;

const StyledLogoutLink = styled(Link)`
  padding: 5px 15px;
  color: white;
  background-color: ${(props) => props.theme.cta};
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 10px;
  :hover {
    background-color: ${(props) => props.theme.ctaHighlight};
  }
`;

const StyledLink = styled(Link)`
  padding: 5px 15px;
  color: white;
  background-color: ${(props) => props.theme.primary};
  text-decoration: none;
  text-transform: uppercase;
  margin-left: 10px;
  border-radius: 10px;
  :hover {
    background-color: ${(props) => props.theme.primaryHighlight};
  }
`;
