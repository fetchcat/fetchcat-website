import React, { useState } from "react";

import LoginForm from "./LoginForm";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return <LoginForm submitForm={submitForm} />;
};

export default Login;
