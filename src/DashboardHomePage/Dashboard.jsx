import React from "react";
import { useSelector } from "react-redux";


export default function Dashboard() {
 
  const email = useSelector((state) => state.auth.email);

  return (
    <div style={{ textAlign: "center" }}>
      <h2>Login Successful</h2>
      <p>
        <strong>Welcome!</strong> {email} {/* No need for backticks */}
      </p>
    </div>
  );
}
