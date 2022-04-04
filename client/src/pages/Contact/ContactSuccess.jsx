import React from "react";

import FormCard from "../../components/Form/FormCard";

import { NavLink } from "react-router-dom";

// --- Component --- //

const ContactSuccess = () => {
  return (
    <FormCard>
      <h2>Message Sent!</h2>
      <p>Thank you for your inquiry.</p>
      <div className="submit-container">
        <NavLink to="/contact">Back</NavLink>
      </div>
    </FormCard>
  );
};

export default ContactSuccess;
