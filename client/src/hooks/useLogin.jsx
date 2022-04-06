import { useState, useEffect, useContext } from "react";
import axios from "../hooks/useAxios";

import { useNavigate } from "react-router-dom";

import { UserContext } from "../context/UserContext";

const useLogin = (submitForm) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const [user, setUser] = useContext(UserContext);

  let navigate = useNavigate();

  const validateLogin = (values) => {
    let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
    let errors = {};

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
    setErrors(validateLogin(values));
    setIsSubmitting(true);
  };

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
      // const { firstName, lastName, email, token } = await res.data.user;
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      loginUser("/user/login");
    }
  }, [isSubmitting]);

  return { handleChange, values, handleSubmit, errors };
};

export default useLogin;
