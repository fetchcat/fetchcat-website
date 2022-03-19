import React, { useContext, useEffect } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { AuthContext, AuthProvider } from "./context/AuthContext";

// --- Components --- //

import Header from "./components/Header/Header";

import Landing from "./routes/Landing";
import Blog from "./routes/Blog";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Register from "./routes/Register";
import Login from "./routes/Login";
import Error404 from "./routes/Error404";

import AuthRoute from "./routes/AuthRoute";
import Dashboard from "./routes/Dashboard";

// --- Theme --- //

import Theme from "./components/Theme";
import styled, { createGlobalStyle } from "styled-components";

// --- Global Styles --- //

const GlobalStyles = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  #root {
    display: flex;
    flex-direction: column;
    min-width: 500px;
    height: 100vh;
    font-family: "Montserrat", sans-serif;
  }

  .active {
    right: 0px !important;
  }
`;

const Container = styled.div`
  width: 100%;
`;

// --- Component --- //

const App = () => {
  //const [authState, setAuthState] = useContext(AuthContext);

  // const isAuthenticated = async () => {
  //   return await fetch("http://localhost:5000/isAuth", { method: "get" });
  // };

  // const loadAuthData = async () => {
  //   isAuthenticated();
  // };

  return (
    <AuthProvider>
      <Theme>
        <Container>
          <GlobalStyles />
          <Router>
            <Header title="FetchCat" />
            <Routes>
              <Route path="/" element={<Landing />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="*" element={<Error404 />} />
              <AuthRoute path="/dashboard" element={<Dashboard />} />
            </Routes>
          </Router>
        </Container>
      </Theme>
    </AuthProvider>
  );
};

export default App;
