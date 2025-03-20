import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!inputEmail || !password);
  }, [inputEmail, password]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    const users = JSON.parse(localStorage.getItem("users"));
    let isLoginSuccessful = false;
    if (users) {
      for (let item of users) {
        if (inputEmail === item.email && password === item.password) {
          isLoginSuccessful = true;
          navigate("/dashboard");
        }
      }
    }
    if (!isLoginSuccessful) {
      alert("invalid credentials");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <form>
          <h2>Login</h2>
          Email:
          <input
            type="text"
            name="inputEmail"
            id="inputEmail"
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Enter your email here"
          />
          <br />
          Password:{" "}
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password here"
          />
          <br />
          <button disabled={isDisabled} onClick={handleLoginClick}>
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
