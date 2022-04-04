import { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserContext } from "./context/UserContext";

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
import Error404 from "./pages/Error404";

import BlogDetail from "./pages/Blog/BlogDetail";

//import AuthRoute from "./routes/AuthRoute";
//import Dashboard from "./routes/Dashboard";

// --- App Component --- //

const App = () => {
  const [user, setUser] = useState({});
  return (
    <Router>
      <UserContext.Provider value={{ user, setUser }}>
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
          <Route path="*" element={<Error404 />} />
          {/* <AuthRoute path="/dashboard" element={<Dashboard />} /> */}
        </Routes>
      </UserContext.Provider>
    </Router>
  );
};

export default App;
