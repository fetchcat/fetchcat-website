import React from "react";
<<<<<<< HEAD
import { Link } from "react-router-dom";

import styled from "styled-components";

const BlogDetails = ({ blog }) => {
  const created = new Date(blog.createdAt);
  const updated = new Date(blog.updatedAt);
  return (
    <StyledBlogDetails>
      <h3>{blog.title}</h3>
      <div className="info">
        <div>
          Author: {blog.firstName} {blog.lastName}
        </div>
        <div>Created On: {created.toLocaleDateString()}</div>
        <div>Last Updated: {updated.toLocaleDateString()}</div>
      </div>
      <div className="description">{blog.description}</div>
      <div className="entry">{blog.entry}</div>
      <StyledLink to={"/blog"}>Back</StyledLink>
    </StyledBlogDetails>
  );
};

export default BlogDetails;

const StyledBlogDetails = styled.article`
  border-left: solid 10px ${(props) => props.theme.primary};

  margin: 10px;
  padding: 10px 10px 20px 20px;
  background-color: white;

  .info {
    color: ${(props) => props.theme.darkGrey};
    font-size: 0.8em;
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 10px;
  }

  .entry {
    margin-bottom: 20px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;

const StyledLink = styled(Link)`
  background-color: ${(props) => props.theme.cta};
  color: white;
  text-decoration: none;
  padding: 7px 20px;
  border-radius: 10px;
  :hover {
    background-color: ${(props) => props.theme.ctaHighlight};
  }
`;
=======

const BlogDetails = () => {
  return <div>BlogDetails</div>;
};

export default BlogDetails;
>>>>>>> 9840766758854dd694af3c2876335c2814d6d25f
