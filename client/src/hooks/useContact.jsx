import { useState, useEffect } from "react";
import axios from "../hooks/useAxios";

const useContact = (submitForm) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Contact Form validation

  const validateContact = (values) => {
    let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

    let errors = {};

    if (!values.name.trim()) {
      errors.name = "Name required";
    }

    // Check for email and valid

    if (!values.email) {
      errors.email = "Email required";
    } else if (!regexEmail.test(values.email)) {
      errors.email = "Email invalid";
    }

    // Check message

    if (!values.message.trim()) {
      errors.message = "Message required";
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
    setErrors(validateContact(values));
    setIsSubmitting(true);
  };

  const sendContact = async (route) => {
    try {
      const res = await axios({
        method: "post",
        url: route,
        data: {
          name: values.name,
          email: values.email,
          phone: values.phone,
          message: values.message,
        },
      });
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      sendContact("/send/sendgrid");
      submitForm();
    }
  });

  return { handleChange, values, handleSubmit, errors };
};

export default useContact;
