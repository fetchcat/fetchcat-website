import React, { useState, useEffect } from "react";

import { BrowserRouter as Router, Switch, Link } from "react-router-dom";

// --- Components --- //

import Header from "./components/Header/Header";
import Container from "./components/Container/Container";

const App = () => {
  return (
    <>
      <Header title="FetchCat" />
      <Container>
        <div>derp</div>
      </Container>
    </>
  );
};

export default App;
