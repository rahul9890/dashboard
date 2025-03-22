import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";
import {
  getAllUsersFromStorage,
  saveAllUpdatedUser,
} from "../Utils/LocalStorageUtils.js";
export default function EditUser() {
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    const allUsers = getAllUsersFromStorage();
    const currentEditUser = allUsers.find((u) => u.id === +id);
    debugger;
    if (currentEditUser) {
      setUpdatedUser({ ...currentEditUser });
    }
  }, [id]);

  const handleSave = () => {
    let users = getAllUsersFromStorage();
    users = users.map((u) => (u.id === +id ? { ...u, ...updatedUser } : u));
    saveAllUpdatedUser(users);
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
      
          value={updatedUser.name} // <-- Bind value to state
          onChange={(e) => {
            setUpdatedUser((prev) => ({
              ...prev,
              name: e.target.value, // <-- Update only the "name" field
            }));
          }}
        />

        <label>Email:</label>
        <input
          type="email"
          value={updatedUser.email}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, email: e.target.value })
          }
        />
        <button className="btn btn-success" onClick={handleSave}>
          Save
        </button>
      </div>
    </div>
  );
}
