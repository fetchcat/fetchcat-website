import { useState, useEffect } from "react";
import axios from "axios";

const useLogin = (callback, validation) => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrors(validation(values));
    setIsSubmitting(true);
  };

  const loginUser = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/user/login",
        data: {
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
      callback();
      loginUser();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, values, handleSubmit, errors };
};

export default useLogin;
