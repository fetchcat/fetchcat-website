import React from "react";

import styles from "./Login.module.scss";
import Button from "../../components/Button/Button";

import useLogin from "../../hooks/useLogin";
import validateLogin from "../../helpers/validateLogin";

const LoginForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useLogin(
    submitForm,
    validateLogin
  );
  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.loginform}>
        <h2>Login</h2>

        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            className={styles.text}
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <div className={styles.error}>{errors.email}</div>}
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            className={styles.text}
            value={values.password}
            onChange={handleChange}
          ></input>
          {errors.password && (
            <div className={styles.error}>{errors.password}</div>
          )}
        </label>

        <Button type="submit" bgColor="primary">
          Login
        </Button>
      </form>
    </div>
  );
};

export default LoginForm;
