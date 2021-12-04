import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="register">
      <h1>Registro</h1>

      <form className="registerForm">
        <div className="inputs">
          <label>Nombre: </label>
          <input type="name" />
        </div>
        <div className="inputs">
          <label>Email: </label>
          <input type="email" />
        </div>
        <div className="inputs">
          <label>Contraseña: </label>
          <input type="password" />
        </div>
        <div className="buttons">
          <button>Registrarme</button>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
