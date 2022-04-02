import React, { useState, useEffect } from "react";
import axios from "../../hooks/useAxios";

import { useParams } from "react-router-dom";

import Container from "../../components/Container";
import BlogDetails from "../../components/Blog/BlogDetails";

const BlogDetail = () => {
  const { slug } = useParams();
  const [blogDetail, setBlogDetail] = useState(null);
  const [loadingBlog, setLoadingBlog] = useState(false);
  const [errorState, setErrorState] = useState(false);

  useEffect(() => {
    setLoadingBlog(true);
    const getBlog = async (route) => {
      try {
        const response = await axios.get(route);
        setBlogDetail(response.data);
        setLoadingBlog(false);
        setErrorState(false);
      } catch (error) {
        setLoadingBlog(false);
        setErrorState(true);
        console.error(error.message);
      }
    };
    getBlog(`blog/${slug}`);
  }, []);

  return (
    <Container>
      <h1>View Full Blog</h1>
      {loadingBlog && <div className="loading">Loading blog...</div>}
      {errorState && <div className="error">Error Loading blog</div>}
      {blogDetail && <BlogDetails blog={blogDetail} />}
    </Container>
  );
};

export default BlogDetail;
