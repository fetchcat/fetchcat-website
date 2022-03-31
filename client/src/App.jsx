import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

// --- Components --- //

import Header from "./components/Header";

// --- Route Components --- //

import Home from "./routes/Home";
import Blog from "./routes/Blog";
import Portfolio from "./routes/Portfolio";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Error404 from "./routes/Error404";

//import AuthRoute from "./routes/AuthRoute";
//import Dashboard from "./routes/Dashboard";

// --- App Component --- //

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Header title="FetchCat" />
        <Routes>
          <Route path="/" element={<Home />} />
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
  );
};

export default App;
