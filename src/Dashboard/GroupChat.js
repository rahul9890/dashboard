import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function GroupChat() {
  const navigate = useNavigate();
  const isAuthenticated=useSelector((state)=>state.auth.isAuthenticated)
  let loggedInUser = JSON.parse(localStorage.getItem("loggedInUser"));
  const [usersChatList, setUsersChatList] = useState([]);
  const [currentChatMessage, setCurrentChatMessage] = useState({
    id: loggedInUser ? loggedInUser.id : "",
    name: loggedInUser ? loggedInUser.name : "",
    message: "",
  });

  useEffect(() => {
    const storedChatList = localStorage.getItem("usersChatList")
      ? JSON.parse(localStorage.getItem("usersChatList"))
      : [];
    setUsersChatList(storedChatList);
  }, []);

  const handleSend = () => {
    let updatedChatList = [...usersChatList, currentChatMessage];
    localStorage.setItem("usersChatList", JSON.stringify(updatedChatList));

    setUsersChatList(updatedChatList);
    setCurrentChatMessage((prev) => ({
      ...prev,
      message: "",
    }));
  };

  if (!isAuthenticated) {
    navigate("/");
    return null; //this null will revent component rendring ahead so it should be used just before return method of component
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid border border-3 border-dark p-2">
        <div className="row h-100 align-items-center justify-content-center">
          <div className="col-12 ">
            <div className="card">
              <div className="card-body ">
                <h5 className="card-title border border-3 border-dark p-2">
                  Group Chat
                </h5>
                <p>
                  <div>
                    <ul>
                      {usersChatList.map((msg, index) => (
                        <li key={index} className="d-flex">
                          <b>
                            {"["}{" "}
                            {new Date(parseInt(msg.id))
                              .toLocaleString("en-CA", { hour12: false })
                              .replace(",", "")}{" "}
                            {"] "} {msg.name}
                          </b>
                          {": "}
                          {msg.message}
                        </li>
                      ))}
                    </ul>
                  </div>
                </p>
              </div>
              <div className="container border border-3 border-dark p-2">
                <div className="">
                  <div className="row align-items-center">
                    <div className="col-3 text-end">
                      <span className="card-text border border-3 p-2 ms-1">
                        {loggedInUser.name}
                      </span>
                    </div>

                    <div className="col-6 border border-2 border-dark">
                      <input
                        type="text"
                        value={currentChatMessage.message}
                        className="form-control"
                        placeholder="Enter your name"
                
                        onChange={(e) => {
                          setCurrentChatMessage((prev) => ({
                            ...prev,
                            message: e.target.value,
                          }));
                        }}
                      />
                    </div>

                    <div className="col-3">
                      <button
                        className="btn btn-primary w-100"
                        onClick={handleSend}
                      >
                        Send
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
