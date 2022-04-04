import React, { useState } from "react";

import Container from "../../components/Container";

import ContactForm from "./ContactForm";
import ContactSuccess from "./ContactSuccess";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  return (
    <Container>
      {isSubmitted ? (
        <ContactSuccess />
      ) : (
        <ContactForm submitForm={submitForm} />
      )}
    </Container>
  );
};

export default Contact;
