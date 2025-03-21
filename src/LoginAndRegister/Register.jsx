import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  getAllUsersFromStorage,
  saveAllUpdatedUser,
} from "../Utils/LocalStorageUtils.js";

export default function Register() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      !password || !confirmPassword || password !== confirmPassword
    );
  }, [password, confirmPassword]);
  //TODO  this register should add data in users item and in login we will check from email and password that user
  const handleRegisterClick = (e) => {
    let users = getAllUsersFromStorage();
    let newUser = { id: Date.now(), name, email, password };

    let updatedUsers = [...users, newUser];
    saveAllUpdatedUser(updatedUsers);
    alert("registration successful");
    navigate("/");
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Register</h2>
        <form>
          Fullname:
          <input
            type="text"
            placeholder="Enter your Full Name here"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          Email:
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email here"
          />
          <br />
          Password:
          <input
            type="password"
            name="password"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password here"
          />
          <br />
          Confirm Password
          <input
            type="password"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          <br />
          <button
            type="button"
            disabled={isDisabled}
            onClick={handleRegisterClick}
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
}
