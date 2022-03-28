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
    errors.password = "password required";
  } else if (values.password.length < 6) {
    errors.password = "password too short";
  }

  return errors;
};

export default validateLogin;
