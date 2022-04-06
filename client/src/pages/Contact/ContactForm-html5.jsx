import React, { useState } from "react";

// import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";
import FormInput from "../../components/Form/FormInput";

// import useContact from "../../hooks/useContact";
// import validateContact from "../../helpers/validateContact";

// --- Component --- //

const ContactForm = ({ submitForm }) => {
  // const { handleChange, values, handleSubmit, errors } = useContact(
  //   submitForm,
  //   validateContact
  // );

  const [values, setValues] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const inputFields = [
    {
      id: 1,
      name: "name",
      type: "text",
      placeholder: "Name",
      label: "Name",
      errorMsg: "Name should be 3-15 letters and numbers",
      required: true,
      pattern: "^[A-Za-z0-9]{3,15}$",
    },
    {
      id: 2,
      name: "email",
      type: "email",
      placeholder: "Email",
      label: "Email",
      errorMsg: "Invalid email",
      required: true,
    },
    {
      id: 3,
      name: "phone",
      type: "text",
      placeholder: "Phone",
      label: "Phone",
      errorMsg: "Invalid Phone",
    },
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(values);
  };

  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <h2>Contact</h2>
        {inputFields.map((input) => (
          <FormInput
            key={input.id}
            {...input}
            onChange={onChange}
            value={values[input.name]}
          />
        ))}
        <div className="submit-container">
          <button type="submit">Send</button>
        </div>
      </Form>
    </FormCard>
  );
};

export default ContactForm;
