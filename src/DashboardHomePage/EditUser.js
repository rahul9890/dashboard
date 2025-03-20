import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [user, setUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  let { id } = useParams();
 

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    const currentEditUser = allUsers[id];
    if (currentEditUser) {
      setUser({ ...currentEditUser });
    }
    
  }, []);

  const handleSave = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    users[id] = user;

    localStorage.setItem("users", JSON.stringify(users));

    localStorage.removeItem("currentSelectedUser");
    localStorage.removeItem("editUserIndex");

    navigate("/manageusers");
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <h2>Edit Users Information</h2>
        <label>Full Name:</label>
        <input
          type="text"
          value={user.name}
          onChange={(e) => setUser({ ...user, name: e.target.value })}
        />
        <label>Email:</label>
        <input
          type="email"
          value={user.email}
          onChange={(e) => setUser({ ...user, email: e.target.value })}
        />
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
