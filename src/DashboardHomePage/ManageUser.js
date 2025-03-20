import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function ManageUser() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  const navigate = useNavigate();

  const handleEdit = (index) => {
    
   
    navigate(`/edituser/${index}`);

  };

  const handleDelete = (index) => {
    
  };
  return (
    <>
      <Navbar />
      <div className="m-4">
        <h2>Users</h2>
        <table className="table table-info table-bordered">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {users &&
              users.map((item, index) => (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <span>
                      <button
                        className="btn btn-primary m-1"
                        onClick={() => handleEdit(index)}
                      >
                        Edit
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(index)}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
