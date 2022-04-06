import { useState, useEffect } from "react";
import axios from "../hooks/useAxios";

const useRegister = (submitForm) => {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password2: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateRegister = (values) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let errors = {};

    // Check first name

    if (!values.firstName.trim()) {
      errors.firstName = "First name required";
    }

    // Check for last name

    if (!values.lastName.trim()) {
      errors.lastName = "Last name required";
    }

    // Check for email and valid

    if (!values.email) {
      errors.email = "Email required";
    } else if (!regex.test(values.email)) {
      errors.email = "Email invalid";
    }

    // Check password and length more than 6 chars

    if (!values.password) {
      errors.password = "Password required";
    } else if (values.password.length < 6) {
      errors.password = "Password too short";
    }

    // Check if confirm password and passwords match

    if (!values.password2) {
      errors.password2 = "Password required";
    } else if (values.password2 !== values.password) {
      errors.password2 = "Passwords do not match";
    }

    // Return known errors

    return errors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validateRegister(values));
    setIsSubmitting(true);
  };

  const registerUser = async (route) => {
    try {
      const res = await axios({
        method: "post",
        url: route,
        data: {
          firstName: values.firstName,
          lastName: values.lastName,
          email: values.email,
          password: values.password,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      registerUser("/user/register");
      submitForm();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useRegister;
