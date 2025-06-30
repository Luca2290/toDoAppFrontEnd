import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  function handleLogout() {
    localStorage.removeItem("user");
    navigate("/login");
  }
  return (
    <div>
      <h1>Home</h1>
      <h2>Welcome back!</h2>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};
export default Home;
