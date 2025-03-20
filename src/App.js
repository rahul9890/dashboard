import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcomepage from "./LoginAndRegister/Welcomepage";
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";
import Dashboard from "./Dashboard/Dashboard";
import GroupChat from "./Dashboard/GroupChat";
import ManageUser from "./Dashboard/ManageUser";
import ManageDocument from "./Dashboard/ManageDocument";
import EditUser from "./Dashboard/EditUser";


function App() {
  return (
    <div className="App">
    
        <Router>
          <Routes>
            <Route path="/" element={<Welcomepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/groupchat" element={<GroupChat />}></Route>
            <Route path="/manageusers" element={<ManageUser />}></Route>
            <Route path="/ManageDocuments" element={<ManageDocument />}></Route>
            <Route path="/edituser/:id" element={<EditUser />}></Route>
           
          </Routes>
        </Router>
     
    </div>
  );
}

export default App;
