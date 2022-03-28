import React from "react";

import styles from "./Register.module.scss";

import Button from "../../components/Button/Button";

import { NavLink } from "react-router-dom";

const RegisterSuccess = () => {
  return (
    <div className={styles.registersuccess}>
      <h2>Registration Successful!</h2>
      <NavLink to="/login">
        <Button bgColor="cta">Login</Button>
      </NavLink>
    </div>
  );
};

export default RegisterSuccess;
