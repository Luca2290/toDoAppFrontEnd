import { useState } from "react";

const Register = () => {
  function handleRegister(event) {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email);
    console.log(password);
  }
  return (
    <div>
      <h1>Sign up</h1>
      <form onSubmit={handleRegister}>
        <input
          name="password"
          type="text"
          placeholder="Enter your password here"
        />
        <input name="email" type="text" placeholder="Email" />
        <button type="submit">Register</button>
      </form>
    </div>
  );
};
export default Register;
