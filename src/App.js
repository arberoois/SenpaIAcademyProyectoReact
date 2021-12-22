import React, { useState } from "react";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Create from "./pages/Create";
import E404 from "./pages/404";
function App() {
  const [profesores, setProfesores] = useState([]);

  return (
    <>
      <Header />
      <div className="wrap">
        <Routes>
          <Route
            path="/"
            element={
              <Home profesores={profesores} setProfesores={setProfesores} />
            }
          ></Route>
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
          <Route path="*" element={<E404 />}></Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
