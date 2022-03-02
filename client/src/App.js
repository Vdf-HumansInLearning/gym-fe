import { Routes, Navigate, Route } from "react-router-dom";
import Login from "./Pages/Login/Login";
import Home from "./Pages/Home/Home";
import Register from "./Pages/Register/Register";
import Dashboard from "./Pages/Dashboard/Dashboard";
import ProtectedLogin from "./Pages/ProtectedLogin";
import ProtectedRoutes from "./Pages/ProtectedRoutes";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate replace to="/login" />} />
        <Route path="/register" element={<Register />} />
        <Route path="/home" element={<Home />} />
        <Route element={<ProtectedLogin />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<ProtectedRoutes />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
