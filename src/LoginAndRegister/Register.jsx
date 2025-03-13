import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    setIsDisabled(
      !password || !confirmPassword || password !== confirmPassword
    );
  }, [password, confirmPassword]);

  const handleRegisterClick = () => {
    if (email && password) {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email,
          password,
        })
      );
      alert("registration successful");
      navigate("/");
    } else {
      alert("Please enter email and passoword");
    }
  };

  return (
    <div className="login-container">
      <div className="login">
        <h2>Register</h2>
        <form>
          Fullname:
          <input type="text" placeholder="Enter your Full Name here" />
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
            type="confirmPassword"
            name="confirmPassword"
            id="confirmPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            placeholder="Confirm password"
          />
          <br />
          <input
            type="submit"
            value="Register"
            disabled={isDisabled}
            onClick={handleRegisterClick}
          />
        </form>
      </div>
    </div>
  );
}
