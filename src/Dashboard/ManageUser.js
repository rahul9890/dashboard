import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";

export default function ManageUser() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();
  const [indexToDelete, setIndexToDelete] = useState(null);

  const handleEdit = (id) => {
    navigate(`/edituser/${id}`);
  };
  const handleDelete = (id) => {
    setIndexToDelete(id);
    setShowModal(true);
  };

  const confirmDelete = () => {
    const finalUsers = [];

    //INFO this for loop for understading purpose or we can use here filter method
    // const finalUsers= [...users].filter((_,index)=>index!==indexToDelete);
    //The _ (underscore) is a convention in JavaScript that means "ignore this parameter" because we don’t //  need it. In this case, _ represents the actual user object, which we don't need for the condition.

    for (let index in users) {
      if (parseInt(users[index].id) !== +indexToDelete) {
        finalUsers.push(users[index]);
      }
    }

    setUsers(finalUsers);
    localStorage.setItem("users", JSON.stringify(finalUsers));
    debugger;
    setShowModal(false);
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
                        onClick={() => handleEdit(item.id)}
                      >
                        Edit
                      </button>
                    </span>
                    <span>
                      <button
                        className="btn btn-primary"
                        onClick={() => handleDelete(item.id)}
                      >
                        Delete
                      </button>
                    </span>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

        {showModal && (
          <div className="modal fade show d-block" tabindex="-1">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" style={{ marginLeft: "30%" }}>
                    Confirm User Deletion
                  </h5>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                    onClick={() => setShowModal(false)}
                  ></button>
                </div>
                <div className="modal-body">
                  <p>Are you sure ?</p>
                </div>
                <div className="modal-footer">
                  <button
                    type="button"
                    className="btn btn-primary"
                    onClick={() => confirmDelete()}
                  >
                    Ok
                  </button>
                  <button
                    type="button"
                    className="btn btn-secondary"
                    data-bs-dismiss="modal"
                    onClick={() => setShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
