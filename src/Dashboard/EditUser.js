import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate, useParams } from "react-router-dom";

export default function EditUser() {
  const [updatedUser, setUpdatedUser] = useState({
    name: "",
    email: "",
  });

  const navigate = useNavigate();

  let { id } = useParams();

  useEffect(() => {
    const allUsers = JSON.parse(localStorage.getItem("users"));
    const currentEditUser = allUsers.find((user) => user.id === +id);
    debugger;
    if (currentEditUser) {
      setUpdatedUser({ ...currentEditUser });
    }
  }, [id]);

  const handleSave = () => {
    let users = JSON.parse(localStorage.getItem("users")) || [];
   
   users = users.map((user) =>
     user.id === +id ? { ...user, ...updatedUser } : user
   );
   
    //TODO user id dont use index
    localStorage.setItem("users", JSON.stringify(users));
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
          value={updatedUser.name}
          onChange={(e) =>
            setUpdatedUser({ ...updatedUser, name: e.target.value })
          }
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
