import React from "react";

import styles from "./Register.module.scss";
import Button from "../../components/Button/Button";

import useRegister from "../../hooks/useRegister";
import validateRegister from "../../helpers/validateRegister";

const RegisterForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useRegister(
    submitForm,
    validateRegister
  );

  return (
    <div>
      <form onSubmit={handleSubmit} className={styles.registerform}>
        <h2>Register</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.text}
            value={values.firstName}
            onChange={handleChange}
          ></input>
          {errors.firstName && (
            <div className={styles.error}>{errors.firstName}</div>
          )}
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.text}
            value={values.lastName}
            onChange={handleChange}
          ></input>
          {errors.lastName && (
            <div className={styles.error}>{errors.lastName}</div>
          )}
        </label>
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
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            id="password2"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            className={styles.text}
          ></input>
          {errors.password2 && (
            <div className={styles.error}>{errors.password2}</div>
          )}
        </label>

        <Button type="submit" bgColor="primary">
          Submit
        </Button>
      </form>
    </div>
  );
};

export default RegisterForm;
