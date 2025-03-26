import { React, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import { getAllUsersFromStorage } from "../Utils/LocalStorageUtils.js";
import { useDispatch } from "react-redux";
import { login } from "../redux/authSlice.js";

export default function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(!inputEmail || !password);
  }, [inputEmail, password]);

  const dispatch = useDispatch();
  const handleLoginClick = (e) => {
    e.preventDefault();
    const users = getAllUsersFromStorage();
    let loggedInUser;
    if (users) {
      for (let item of users) {
        if (inputEmail === item.email && password === item.password) {
          loggedInUser = item;
          localStorage.setItem("loggedInUser", JSON.stringify(loggedInUser));
          dispatch(login());
          navigate("/dashboard", { state: { inputEmail: inputEmail } });
        }
      }
    }
    if (!loggedInUser) {
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
