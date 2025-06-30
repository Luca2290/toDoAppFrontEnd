import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  function handleAccount() {
    navigate("/");
  }
  const navigate = useNavigate();
  function verifyUserSession() {
    if (localStorage.getItem("user")) {
      navigate("/home");
    }
  }
  function handleLogin(event) {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log(email);
    console.log(password);
    const user = {
      email: email,
      password: password,
    };
    localStorage.setItem("user", JSON.stringify(user));
    navigate("/home");
  }
  useEffect(() => {
    verifyUserSession();
  }, []);
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <input
          name="password"
          type="text"
          placeholder="Enter your email here"
        />
        <input
          name="email"
          type="text"
          placeholder="Enter your password here"
        />
        <button type="submit">Login</button>
      </form>
      <button onClick={handleAccount}>Don't have an account?</button>
    </div>
  );
};

export default Login;
