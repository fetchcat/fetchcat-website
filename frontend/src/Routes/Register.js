import { useState } from "react";

export default function Register() {
  const [email, setEmail] = useState(" ");
  const [password, setPassword] = useState(" ");
  const [password2, setPassword2] = useState(" ");

  async function handleRegister(e) {
    e.preventDefault();

    const newUser = { email, password };

    if (password === password2) {
      try {
        await fetch("http://localhost:5000/users/register", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        });
      } catch (error) {
        console.log(error);
      }
    }
  }

  return (
    <div>
      Register
      <form onSubmit={handleRegister}>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        ></input>
        <input
          type="password"
          id="password"
          name="password"
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        ></input>
        <input
          type="password"
          id="password2"
          name="password2"
          placeholder="confirm password"
          onChange={(e) => setPassword2(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
