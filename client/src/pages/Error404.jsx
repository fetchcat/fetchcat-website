import React from "react";

import { PageContainer } from "../components/Containers";

import { NavLink } from "react-router-dom";
import Card from "../components/Card/Card";

const Error404 = () => {
  return (
    <PageContainer>
      <Card>
        <h2>Error 404</h2>
        <p>Page cannot be found</p>
        <div className="button-container">
          <NavLink to="/">Home</NavLink>
        </div>
      </Card>
    </PageContainer>
  );
};

export default Error404;
