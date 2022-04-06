import React, { useState, useContext, useEffect } from "react";

import axios from "../../hooks/useAxios";

import Container from "../../components/Container";

import LoginForm from "./LoginForm";

import { UserContext } from "../../context/UserContext";

import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";

const Login = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const [user, setUser] = useContext(UserContext);

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  function submitForm(e) {
    e.preventDefault();
    const loginUser = async (route) => {
      try {
        const res = await axios({
          method: "post",
          url: route,
          data: {
            email: values.email,
            password: values.password,
          },
        });
        const { firstName, lastName, email, token } = await res.data.user;
        setUser({ firstName, lastName, email, token });
      } catch (error) {
        console.log(error);
      }
    };
    loginUser("/user/login");
    console.log(user);
  }
  return (
    <Container>
      <FormCard>
        <Form onSubmit={submitForm}>
          <h2>Login</h2>

          <label htmlFor="email">
            Email Address
            <input
              type="text"
              id="email"
              name="email"
              value={values.email}
              onChange={(e) => setValues({ ...values, email: e.target.value })}
            ></input>
            {/* {errors.email && <div className="error">{errors.email}</div>} */}
          </label>
          <label htmlFor="password">
            Password
            <input
              type="password"
              id="password"
              name="password"
              value={values.password}
              onChange={(e) =>
                setValues({ ...values, password: e.target.value })
              }
            ></input>
            {/* {errors.password && <div className="error">{errors.password}</div>} */}
          </label>

          <div className="submit-container">
            <Button type="submit">Login</Button>
          </div>
        </Form>
      </FormCard>
    </Container>
  );
};

export default Login;
