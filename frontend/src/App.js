import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// --- Components --- //

import Header from "./components/Header";

import Landing from "./Routes/Landing";
import Blog from "./Routes/Blog";
import Portfolio from "./Routes/Portfolio";
import About from "./Routes/About";
import Contact from "./Routes/Contact";
import Register from "./Routes/Register";
import Login from "./Routes/Login";
import Error404 from "./Routes/Error404";

// --- Theme --- //

import Theme from "./components/Theme";
import styled, { createGlobalStyle } from "styled-components";

// --- Global Styles --- /

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

const App = () => {
  return (
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
          </Routes>
        </Router>
      </Container>
    </Theme>
  );
};

export default App;
