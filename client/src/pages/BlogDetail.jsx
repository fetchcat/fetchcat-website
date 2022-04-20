import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

import { PageContainer } from "../components/Containers";
import BlogDetails from "../components/Blog/BlogDetails";

import { StatusMsg } from "../components/Messages";

const BlogDetail = () => {
  const { slug } = useParams();

  const [blog, setBlog] = useState({});
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    try {
      const getBlog = async () => {
        setLoading(true);
        const response = await axios({
          method: "GET",
          url: `blog/${slug}`,
        });
        setBlog(response.data);
        setLoading(false);
      };
      getBlog();
    } catch {
      setError(true);
    }
  }, [slug]);

  return (
    <PageContainer>
      <h1>View Full Blog</h1>
      {isLoading && <StatusMsg msg="Loading..." />}
      {error && <div className="error">Error Loading blog</div>}
      {blog && <BlogDetails blog={blog} />}
    </PageContainer>
  );
};

export default BlogDetail;
