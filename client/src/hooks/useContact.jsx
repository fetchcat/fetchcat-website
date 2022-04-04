import { useState, useEffect } from "react";
import axios from "axios";

const useContact = (callback, validateContact) => {
  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
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
    setErrors(validateContact(values));
    setIsSubmitting(true);
  };

  const sendContact = async () => {
    try {
      const res = await axios({
        method: "post",
        url: "http://localhost:5000/send/sendgrid",
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
      callback();
      sendContact();
    }
  }, [errors, isSubmitting, callback]);

  return { handleChange, values, handleSubmit, errors };
};

export default useContact;
