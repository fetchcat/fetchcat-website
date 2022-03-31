import React from "react";
import styled from "styled-components";

import Button from "../Button";

// --- Component --- //

const BlogSnippet = ({ blog, created, updated }) => {
  return (
    <StyledBlogSnippet>
      <h3>{blog.title}</h3>
      <div className="info">
        <div>
          Author: {blog.firstName} {blog.lastName}
        </div>
        <div>Created On: {created.toLocaleDateString()}</div>
        <div>Last Updated: {updated.toLocaleDateString()}</div>
      </div>
      <div className="description">{blog.description}</div>
      <Button>Read More..</Button>
    </StyledBlogSnippet>
  );
};

export default BlogSnippet;

// --- Styles --- //

const StyledBlogSnippet = styled.article`
  border-left: solid 10px ${(props) => props.theme.primary};

  margin: 10px;
  padding: 10px 10px 10px 20px;
  background-color: white;

  .info {
    color: ${(props) => props.theme.darkGrey};
    font-size: 0.8em;
    margin-bottom: 10px;
  }
  .description {
    margin-bottom: 10px;
  }

  h3 {
    margin-bottom: 10px;
  }
`;
