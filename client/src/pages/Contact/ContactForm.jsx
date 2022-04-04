import React from "react";

import Button from "../../components/Button";
import Form from "../../components/Form/Form";
import FormCard from "../../components/Form/FormCard";

import useContact from "../../hooks/useContact";
import validateContact from "../../helpers/validateContact";

// --- Component --- //

const ContactForm = ({ submitForm }) => {
  const { handleChange, values, handleSubmit, errors } = useContact(
    submitForm,
    validateContact
  );
  return (
    <FormCard>
      <Form onSubmit={handleSubmit}>
        <h2>Contact</h2>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
          ></input>
          {errors.name && <div className="error">{errors.name}</div>}
        </label>

        <label htmlFor="email">
          Email
          <input
            type="text"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
          ></input>
          {errors.email && <div className="error">{errors.email}</div>}
        </label>

        <label htmlFor="phone">
          Phone
          <input
            type="text"
            id="phone"
            name="phone"
            value={values.phone}
            onChange={handleChange}
          ></input>
          {errors.phone && <div className="error">{errors.phone}</div>}
        </label>

        <label htmlFor="phone">
          Message
          <textarea
            id="message"
            name="message"
            onChange={handleChange}
            value={values.message}
          ></textarea>
          {errors.message && <div className="error">{errors.message}</div>}
        </label>

        <div className="submit-container">
          <button type="submit">Send</button>
        </div>
      </Form>
    </FormCard>
  );
};

export default ContactForm;
