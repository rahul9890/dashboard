import React from "react";
import { useSelector } from "react-redux";
import Navbar from "./Navbar";

export default function Dashboard() {
  const email = useSelector((state) => state.auth.email);

  return (
    <>
      <Navbar />
      <div style={{ textAlign: "center", marginTop: "7%" }}>
        <h2>Login Successful</h2>
        <p>
          <strong>Welcome!</strong> {email} {/* No need for backticks */}
        </p>
      </div>
    </>
  );
}
