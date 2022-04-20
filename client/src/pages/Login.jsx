import { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";

import Button from "../components/Button";
import Form from "../components/Form";
import Card from "../components/Card/Card";

import { PageContainer } from "../components/Containers";

import { UserContext } from "../context/UserContext";

const Login = () => {
  let navigate = useNavigate();

  const [, setUser] = useContext(UserContext);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  // Validate fields

  const validateLogin = () => {
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let errors = {};
    let valid = true;

    if (!values.email) {
      errors.email = "Email required";
      valid = false;
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Email invalid";
      valid = false;
    }

    if (!values.password) {
      errors.password = "Password required";
      valid = false;
    } else if (values.password.length < 6) {
      errors.password = "Password too short";
      valid = false;
    }

    setErrors(errors);
    return valid;
  };

  const handleLogin = async (url) => {
    try {
      const response = await axios({
        method: "post",
        url: url,
        data: {
          email: values.email,
          password: values.password,
        },
      });
      const { firstName, lastName, email, token, _id } = response.data.user;
      setUser({ isAuth: true, firstName, lastName, email, _id });
      localStorage.setItem("token", token);
      setIsSubmitted(true);
      return response;
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(() => {
    if (isSubmitted) {
      navigate("/dashboard");
    }
  });

  // Validate fields and set errors

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateLogin()) {
      handleLogin("user/login");
    }
  };

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <PageContainer>
      <Card>
        <Form onSubmit={handleSubmit}>
          <h2>Login</h2>
          <label htmlFor="email">
            Email Address
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={handleChange}
            ></input>
            {errors.email && <div className="error">{errors.email}</div>}
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={handleChange}
            ></input>
            {errors.password && <div className="error">{errors.password}</div>}
          </label>
          <div className="button-container">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </Card>
    </PageContainer>
  );
};

export default Login;
