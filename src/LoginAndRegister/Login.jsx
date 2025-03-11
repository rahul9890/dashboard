import { React, useState } from "react";

export default function Login() {
  const storedUser = JSON.parse(localStorage.getItem("user"));

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLoginClick = () => {
    const storedUser = JSON.parse(localStorage.getItem("user"));
    if (
      storedUser &&
      storedUser.email == email &&
      storedUser.password == password
    ) {
      alert("Login Success");
    } else {
      alert("invalid password");
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
        <button onClick={handleLoginClick}>Login</button>
      </form>
    </>
  );
}
