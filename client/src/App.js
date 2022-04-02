import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

// --- Components --- //

import Header from "./components/Header";
import Container from "./components/Container";

// --- Route Components --- //

import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Error404 from "./pages/Error404";

//import AuthRoute from "./routes/AuthRoute";
//import Dashboard from "./routes/Dashboard";

// --- App Component --- //

const App = () => {
  return (
    <Container>
      <Router>
        <UserProvider>
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
            {/* <AuthRoute path="/dashboard" element={<Dashboard />} /> */}
          </Routes>
        </UserProvider>
      </Router>
    </Container>
  );
};

export default App;
