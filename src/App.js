import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Welcomepage from "./LoginAndRegister/Welcomepage";
import Login from "./LoginAndRegister/Login";
import Register from "./LoginAndRegister/Register";
import Dashboard from "./DashboardHomePage/Dashboard";
import { Provider } from "react-redux";
import store from "./ReduxStore/store";
import GroupChat from "./DashboardHomePage/GroupChat";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router>
          <Routes>
            <Route path="/" element={<Welcomepage />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/dashboard" element={<Dashboard />}></Route>
            <Route path="/groupchat" element={<GroupChat />}></Route>
          </Routes>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
