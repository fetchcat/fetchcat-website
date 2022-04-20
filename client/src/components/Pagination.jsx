import { Link } from "react-router-dom";
import styled from "styled-components";

// --- Pagination --- //

const Pagination = ({
  totalBlogs,
  setCurrentPage,
  currentPage,
  blogsPerPage,
}) => {
  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalBlogs / blogsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <StyledPagination>
      <div>Pages:</div>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to="#"
              onClick={() => paginate(number)}
              className={number === currentPage ? "active" : null}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </StyledPagination>
  );
};

export default Pagination;

// --- Styles --- //

const StyledPagination = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 20px 10px;
  padding: 10px 20px;
  background-color: ${(props) => props.theme.secondary};
  color: white;
  border-radius: 10px;
  ul {
    display: flex;
    flex-direction: row;
    list-style: none;
  }
  a {
    color: white;
    :hover {
      color: ${(props) => props.theme.background};
    }
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    min-width: 20px;
    margin-left: 5px;
    &.active {
      color: ${(props) => props.theme.cta};
      :hover {
        color: ${(props) => props.theme.ctaHighlight};
      }
    }
  }
`;
