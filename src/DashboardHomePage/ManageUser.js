import React, { useState } from 'react'
import Navbar from './Navbar'

export default function ManageUser() {

  const [users, setUsers] = useState(JSON.parse(localStorage.getItem("users")));

  { console.log("from manageusers component:"+users) };

    return (
      <>
        <Navbar />
        <div>
          <h2>Users</h2>
          <table className="table table-info">
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
                        <button className="btn btn-primary m-1">Edit</button>
                      </span>
                      <span>
                        <button className="btn btn-primary">Delete</button>
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
