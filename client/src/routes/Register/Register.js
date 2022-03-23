import { useState } from "react";
import Cookies from "js-cookie";

import styles from "./Register.module.scss";
import Button from "../../components/Button/Button";

export default function Register() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [password2, setPassword2] = useState(" ");
  const [firstName, setFirstName] = useState(" ");
  const [lastName, setLastName] = useState(" ");

  async function handleRegister(e) {
    e.preventDefault();

    const newUser = { email, password, firstName, lastName };

    if (password === password2) {
      try {
        const res = await fetch("http://localhost:5000/user/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
        const userData = await res.json();
        Cookies.set("jwt", userData.token, { expires: 1 });
        console.log(userData.user);
        console.log(userData.token);
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      <form onSubmit={handleRegister} className={styles.registerform}>
        <h2>Register</h2>
        <label htmlFor="firstName">
          First Name
          <input
            type="text"
            id="firstName"
            name="firstName"
            className={styles.text}
            onChange={(e) => setFirstName(e.target.value)}
          ></input>
        </label>
        <label htmlFor="lastName">
          Last Name
          <input
            type="text"
            id="lastName"
            name="lastName"
            className={styles.text}
            onChange={(e) => setLastName(e.target.value)}
          ></input>
        </label>
        <label htmlFor="email">
          Email Address
          <input
            type="text"
            id="email"
            name="email"
            className={styles.text}
            onChange={(e) => setEmail(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password">
          Password
          <input
            type="password"
            id="password"
            name="password"
            className={styles.text}
            onChange={(e) => setPassword(e.target.value)}
          ></input>
        </label>
        <label htmlFor="password2">
          Confirm Password
          <input
            type="password"
            id="password2"
            name="password2"
            onChange={(e) => setPassword2(e.target.value)}
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
