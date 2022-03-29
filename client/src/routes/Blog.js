import { useState, useEffect } from "react";
import axios from "axios";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [blogsAvailable, setBlogsAvailable] = useState(false);

  const BlogMap = () => {
    return blogs.map((blog) => {
      <article key={blog.id}>
        <h3>{blog.title}</h3>
        <div>{blog.author}</div>
        <div>{blog.updatedAt}</div>
        <div>{blog.createdAt}</div>
        <div>{blog.description}</div>
      </article>;
    });
  };

  useEffect(() => {
    setBlogsAvailable(false);
    const getBlogs = async () => {
      const blogs = await axios({
        method: "get",
        url: "http://localhost:3000/blogs",
      });

      setBlogs(blogs.data);
      setBlogsAvailable(true);
    };
    getBlogs();
  }, []);

  return (
    <div>
      <h1>Blog</h1>
      {blogsAvailable &&
        blogs.map((blog) => {
          return (
            <div key={blog.id}>
              <h3>{blog.title}</h3>
              <div>{blog.author}</div>
              <div>{blog.updatedAt}</div>
              <div>{blog.createdAt}</div>
              <div>{blog.description}</div>
            </div>
          );
        })}
    </div>
  );
};

export default Blog;
