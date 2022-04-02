import { useState, useEffect } from "react";
import axios from "../hooks/useAxios";

import BlogSnippet from "../components/Blog/BlogSnippet";
import Container from "../components/Container";

import ErrorMsg from "../components/Msg/ErrorMsg";
import LoadingMsg from "../components/Msg/LoadingMsg";

// --- Blog Component --- //

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [loadingBlogs, setLoadingBlogs] = useState(false);
  const [errorState, setErrorState] = useState(false);

  const LatestBlogs = () => {
    return blogs.map((blog) => {
      const created = new Date(blog.updatedAt);
      const updated = new Date(blog.updatedAt);
      return (
        <BlogSnippet
          blog={blog}
          created={created}
          updated={updated}
          key={blog._id}
        />
      );
    });
  };

  useEffect(() => {
    setLoadingBlogs(true);
    const getBlogs = async (route) => {
      try {
        const response = await axios.get(route);
        setBlogs(response.data);
        setLoadingBlogs(false);
        setErrorState(false);
      } catch (error) {
        setLoadingBlogs(false);
        setErrorState(true);
        console.error(error.message);
      }
    };
    getBlogs("blog/latest/");
  }, []);

  return (
    <Container>
      <h1>Blog</h1>
      {loadingBlogs && <LoadingMsg msg="Loading Blogs..." />}
      {blogs && <LatestBlogs />}
      {errorState && <ErrorMsg msg="Error establishing database connection" />}
    </Container>
  );
};

export default Blog;
