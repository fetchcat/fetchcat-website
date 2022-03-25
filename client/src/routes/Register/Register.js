import { useState } from "react";
import Cookies from "js-cookie";

import styles from "./Register.module.scss";
import Button from "../../components/Button/Button";

import useForm from "../../hooks/useForm";

export default function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const { handleChange, values, handleSubmit } = useForm();

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
    <div>
      <form onSubmit={handleSubmit} className={styles.registerform}>
        <h2>Register</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.text}
            value={values.firstName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.text}
            value={values.lastName}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            className={styles.text}
            value={values.email}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            className={styles.text}
            value={values.password}
            onChange={handleChange}
          ></input>
        </label>
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            id="password2"
            name="password2"
            value={values.password2}
            onChange={handleChange}
            className={styles.text}
          ></input>
        </label>

        <Button type="submit" bgColor="primary">
          Submit
        </Button>
      </form>
    </div>
  );
}
