import React from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
function App() {
  return (
    <>
      <Header />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          {localStorage.getItem("token") ? (
            <>
              <Route path="/create" element={<Create />}></Route>
            </>
          ) : (
            <>
              <Route path="/login" element={<Login />}></Route>
              <Route path="/register" element={<Register />}></Route>
            </>
          )}
          <Route path="*" element={<div>404</div>}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
