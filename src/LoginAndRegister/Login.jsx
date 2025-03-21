import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import {
  getAllUsersFromStorage,
  saveAllUpdatedUser,
} from "../Utils/LocalStorageUtils.js";
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
    const users = getAllUsersFromStorage();
    let isLoginSuccessful = false;
    if (users) {
      for (let item of users) {
        if (inputEmail === item.email && password === item.password) {
          isLoginSuccessful = true;
          //TODO create loggedin user localstorage and store logged in user info
          navigate("/dashboard", { state: { inputEmail: inputEmail } });
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
            value={inputEmail}
            onChange={(e) => setInputEmail(e.target.value)}
            placeholder="Enter your email here"
          />
          <br />
          Password:{" "}
          <input
            type="password"
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
