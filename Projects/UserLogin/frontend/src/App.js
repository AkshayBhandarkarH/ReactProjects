import "./App.css";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";
import Register from "./register";
import User from "./user";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Register />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/User" element={<User />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
