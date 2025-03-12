import { React, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { setEmail } from "../ReduxStore/authSlice";

export default function Login() {
  const navigate = useNavigate();
  const [inputEmail, setInputEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isDisabled, setIsDisabled] = useState(true);
  const dispatch = useDispatch();


  useEffect(() => {
    setIsDisabled(!inputEmail || !password);
  }, [inputEmail, password]);

  const handleLoginClick = (e) => {
    e.preventDefault();
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email === inputEmail &&
      storedUser.password === password
    ) {
      console.log("email in login" + inputEmail);
      dispatch(setEmail(inputEmail));
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
          name="inputEmail"
          id="inputEmail"
          value={inputEmail}
          onChange={(e) => setInputEmail(e.target.value)}
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
