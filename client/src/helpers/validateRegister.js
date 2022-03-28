const validateRegister = (values) => {
  let regex = new RegExp("[a-z0-9]+@[a-z]+.[a-z]{2,3}");
  let errors = {};

  // Check first name

  if (!values.firstName.trim()) {
    errors.firstName = "First name required";
  }

  // Check for last name

  if (!values.lastName.trim()) {
    errors.lastName = "Last name required";
  }

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

  // Check if confirm password and passwords match

  if (!values.password2) {
    errors.password2 = "Password required";
  } else if (values.password2 !== values.password) {
    errors.password2 = "Passwords do not match";
  }

  // Return known errors

  return errors;
};

export default validateRegister;