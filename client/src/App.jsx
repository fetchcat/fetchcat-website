import { useState, createContext } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

// --- Components --- //

import Header from "./components/Header";

// --- Route Components --- //

import Home from "./pages/Home";
import Blog from "./pages/Blog/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import Contact from "./pages/Contact/Contact";
import Register from "./pages/Register/Register";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard";
import Error404 from "./pages/Error404";

import BlogDetail from "./pages/Blog/BlogDetail";

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
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
