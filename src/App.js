import "./App.css";
import { BrowserRouter as Router,Route,Routes } from "react-router-dom";
import Welcomepage from "./LoginAndRegister/Welcomepage";
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Welcomepage />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/register" element={<Register/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
