import React, { useContext, useEffect, useState } from "react";

import axios from "axios";

import { PageContainer } from "../../components/Containers";
import BlogSnippet from "../../components/Blog/BlogSnippet";
import Pagination from "../../components/Pagination";

import handleError from "../../helpers/handleError";

import { UserContext } from "../../context/UserContext";

const Dashboard = () => {
  const [user] = useContext(UserContext);

  const [currentPage, setCurrentPage] = useState(1);
  const [blogsPerPage] = useState(2);

  const [blogs, setBlogs] = useState([]);
  const [isLoading, setLoading] = useState(false);

  const getBlogs = async () => {
    setLoading(true);
    try {
      const response = await axios({
        method: "GET",
        url: `blog/user/${user._id}`,
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      setBlogs(response.data);
      setLoading(false);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  useEffect(() => {
    getBlogs();
  }, [user._id]);

  // Check for Token

  const checkAuth = async () => {
    try {
      const response = await axios({
        method: "GET",
        url: "user/isauth",
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      console.log(response);
    } catch (error) {
      handleError(error);
    }
  };

  // Delete Blog (check for JWT token)

  const deleteBlog = async (id) => {
    try {
      const response = await axios({
        method: "DELETE",
        url: `blog/${id}`,
        headers: {
          "x-access-token": localStorage.getItem("token"),
        },
      });
      const newBlogs = blogs.filter((blog) => blog._id !== id);
      setBlogs(newBlogs);
      return response;
    } catch (error) {
      handleError(error);
    }
  };

  const indexOfLastBlog = currentPage * blogsPerPage;
  const indexOfFirstBlog = indexOfLastBlog - blogsPerPage;
  const currentBlogs = blogs.slice(indexOfFirstBlog, indexOfLastBlog);

  const Blogs = ({ blogs, isLoading }) => {
    if (isLoading) {
      return <h2>loading...</h2>;
    }

    return blogs.map((blog) => {
      const created = new Date(blog.updatedAt);
      const updated = new Date(blog.updatedAt);
      return (
        <BlogSnippet
          blog={blog}
          created={created}
          updated={updated}
          key={blog._id}
          id={blog._id}
          deleteBlog={deleteBlog}
        />
      );
    });
  };

  return (
    <PageContainer>
      <h1>Dashboard</h1>
      {user.isAuth && <button onClick={checkAuth}>Check Auth</button>}
      <Blogs blogs={currentBlogs} isLoading={isLoading} />
      <Pagination
        blogsPerPage={blogsPerPage}
        totalBlogs={blogs.length}
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </PageContainer>
  );
};

export default Dashboard;
