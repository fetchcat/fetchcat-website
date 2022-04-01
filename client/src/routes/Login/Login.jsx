import React, { useState } from "react";

import Container from "../../components/Container";

import LoginForm from "./LoginForm";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <Container>
      <LoginForm submitForm={submitForm} />
    </Container>
  );
};

export default Login;
