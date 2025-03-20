import React, { useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { Button, Modal } from "react-bootstrap"; 

export default function ManageUser() {
  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  const navigate = useNavigate();
  const [showModal, setShowModal] = useState(false);

 const [indexToDelete, setIndexToDelete] = useState(null);

  const handleEdit = (index) => {
    navigate(`/edituser/${index}`);
  };

  const handleDelete = (index) => {
    console.log("index:" + index);
    setShowModal(true);
    setIndexToDelete(index);
  };

const confirmDelete = () => {
  if (indexToDelete !== null) {
    setUsers((prevUsers) => {
      const updatedUsers = prevUsers.filter((_, i) => i !== indexToDelete);
      localStorage.setItem("users", JSON.stringify(updatedUsers));
      return updatedUsers;
    });
    setShowModal(false);
    setIndexToDelete(null); 
  }
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
        
        {/* delete confirmation model */}
        <Modal show={showModal} onHide={() => setShowModal(false)}>
          <Modal.Header closeButton>
            <Modal.Title>Confirm Deletion</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>
              Are you sure you want to delete:<strong>{ (users.length) && (indexToDelete!==null)>0?users[indexToDelete].name:""}</strong>
            </p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowModal(false)}>
              Cancel
            </Button>
            <Button variant="danger" onClick={confirmDelete}>
              Delete
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>
  );
}
