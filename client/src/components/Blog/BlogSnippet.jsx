import React, { useContext } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { UserContext } from "../../context/UserContext";

// --- Component --- //

const BlogSnippet = ({ blog, created, updated, deleteBlog }) => {
  const [user] = useContext(UserContext);

  return (
    <StyledBlogSnippet>
      <h3>{blog.title}</h3>
      <div className="info">
        <div>
          Author: {blog.firstName} {blog.lastName} {blog.email}
        </div>
        <div>Created On: {created.toLocaleDateString()}</div>
        <div>Last Updated: {updated.toLocaleDateString()}</div>
      </div>
      <div className="description">{blog.description}</div>
      <StyledButtonContainer>
        <StyledLink to={`/blog/${blog.slug}`}>Read More...</StyledLink>
        {blog.user === user._id && (
          <StyledDeleteLink
            to="/dashboard"
            onClick={() => {
              deleteBlog(blog._id);
            }}
          >
            Delete
          </StyledDeleteLink>
        )}
      </StyledButtonContainer>
    </StyledBlogSnippet>
  );
};

export default BlogSnippet;

// --- Styles --- //

const StyledBlogSnippet = styled.article`
  border-left: solid 10px ${(props) => props.theme.primary};
  border-radius: 10px;
  margin: 10px;
  padding: 10px 10px 20px 20px;
  background-color: white;

  .info {
    color: ${(props) => props.theme.darkGrey};
    font-size: 0.8em;
  }

  .description {
    margin-top: 20px;
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

const StyledDeleteLink = styled(Link)`
  background-color: ${(props) => props.theme.primary};
  color: white;
  text-decoration: none;
  padding: 7px 20px;
  border-radius: 10px;
  margin-left: 20px;
  :hover {
    background-color: ${(props) => props.theme.primaryHighlight};
  }
`;

const StyledButtonContainer = styled.div`
  margin-top: 40px;
`;
