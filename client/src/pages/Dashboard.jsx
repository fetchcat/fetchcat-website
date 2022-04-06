import React, { useContext } from "react";

import { UserContext } from "../context/UserContext";

import Container from "../components/Container";

function Dashboard() {
  const user = useContext(UserContext);
  console.log(user);
  return (
    <Container>
      <h1>Dashboard</h1>
      <p>Hello, {user[0].firstName}</p>
      <p>email: {user[0].email} </p>
    </Container>
  );
}

export default Dashboard;
