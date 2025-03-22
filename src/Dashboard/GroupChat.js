import React from "react";
import Navbar from "./Navbar";

export default function GroupChat() {
  return (
    <>
      <Navbar />
      <div className="container-fluid">
        <div class="row h-100 align-items-center justify-content-center">
          <div class="col-12 ">
            <div className="card" >
              <div className="card-body">
                <h5 className="card-title border border-3 border-dark p-2">
                  Group Chat
                </h5>
                <p className="card-text">
                  Some quick example text to build on the card title and make up
                  the bulk of the card's content.
                </p>
                <a href="#" className="btn btn-primary">
                  Go somewhere
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
