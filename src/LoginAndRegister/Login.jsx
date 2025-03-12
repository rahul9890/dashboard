import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!email || !password);
  }, [email, password]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === email &&
      storedUser.password === password
    ) {
      navigate("/dashboard");
    } else {
      setError("invalid credentials");
      console.log(error);
      alert("invalid credentials");
    }
  };

  return (
    <>
      <form>
        <h2>Login</h2>
        Email:
        <input
          type="text"
          name="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        Password:{" "}
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button disabled={isDisabled} onClick={handleLoginClick}>
          Login
        </button>
      </form>
    </>
  );
}
