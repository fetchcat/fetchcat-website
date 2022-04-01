import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

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
      <StyledLink to={`${blog.slug}`}>Read More...</StyledLink>
    </StyledBlogSnippet>
  );
};

export default BlogSnippet;

// --- Styles --- //

const StyledBlogSnippet = styled.article`
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
