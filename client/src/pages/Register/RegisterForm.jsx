import React from "react";

import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";

import useRegister from "../../hooks/useRegister";
import validateRegister from "../../helpers/validateRegister";

// --- Component --- //

const RegisterForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useRegister(
    submitForm,
    validateRegister
  );
  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <h2>Register</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            value={values.firstName}
            onChange={handleChange}
          ></input>
          {errors.firstName && <div className="error">{errors.firstName}</div>}
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            value={values.lastName}
            onChange={handleChange}
          ></input>
          {errors.lastName && <div className="error">{errors.lastName}</div>}
        </label>
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
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            id="password2"
            name="password2"
            value={values.password2}
            onChange={handleChange}
          ></input>
          {errors.password2 && <div className="error">{errors.password2}</div>}
        </label>
        <div className="submit-container">
          <Button type="submit" primary>
            Submit
          </Button>
        </div>
      </Form>
    </FormCard>
  );
};

export default RegisterForm;
