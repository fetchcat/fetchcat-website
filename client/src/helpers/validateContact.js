const validateContact = (values) => {
  let regexEmail = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");

  let errors = {};
  console.log(values);

  // Check first name

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

export default validateContact;
