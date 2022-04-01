import { useState } from "react";

import Cookies from "js-cookie";

import Container from "../../components/Container";

import RegisterForm from "./RegisterForm";
import RegisterSuccess from "./RegisterSuccess";

export default function Register() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function submitForm() {
    setIsSubmitted(true);
  }
  // const [errors, setErrors] = useState({});
  // const [isValid, setIsValid] = useState(false);

  // function handleRegister(e) {
  //   e.preventDefault();

  //   if (firstName.length < 6) {
  //     setErrors({ firstName: "too short" });
  //   }
  //   if (lastName.length < 6) {
  //     setErrors({ lastName: "too short" });
  //   }

  //   const newUser = { email, password, firstName, lastName };

  //   // if (newUser) {
  //   //   await validate();

  //   //   // const res = await fetch("http://localhost:5000/user/register", {
  //   //   //   method: "POST",
  //   //   //   headers: {
  //   //   //     "content-type": "application/json",
  //   //   //   },
  //   //   //   body: JSON.stringify(newUser),
  //   //   // });
  //   //   // const userData = await res.json();
  //   //   // Cookies.set("jwt", userData.token, { expires: 1 });
  //   //   // console.log(userData.user);
  //   //   // console.log(userData.token);
  //   // }
  // }

  return (
    <Container>
      {!isSubmitted ? (
        <RegisterForm submitForm={submitForm} />
      ) : (
        <RegisterSuccess />
      )}
    </Container>
  );
}
