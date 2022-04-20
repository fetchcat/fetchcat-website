import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { UserProvider } from "./context/UserContext";

// --- Components --- //

import Header from "./components/Header";
import UserBanner from "./components/UserBanner";

// --- Public Routes --- //

import Home from "./pages/Home";

import Blog from "./pages/Blog";
import BlogDetail from "./pages/BlogDetail";

import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Register from "./pages/Register";
import Login from "./pages/Login";

import Error404 from "./pages/Error404";

// --- Protected Routes --- //

import ProtectedRoute from "./components/ProtectedRoute";
import Dashboard from "./pages/user/Dashboard";
import CreateBlog from "./pages/user/CreateBlog";

// --- App Component --- //

const App = () => {
  return (
    <Router>
      <UserProvider>
        <Header title="FetchCat.ca" />
        <UserBanner />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetail />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
          <Route
            path="dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="createblog"
            element={
              <ProtectedRoute>
                <CreateBlog />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </UserProvider>
    </Router>
  );
};

export default App;
