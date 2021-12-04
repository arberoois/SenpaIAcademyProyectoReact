import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="login">
      <h1>Inicio de Sesión</h1>
      <form className="loginForm">
        <div className="inputs">
          <label>Email: </label>
          <input type="email" />
        </div>
        <div className="inputs">
          <label>Contraseña: </label>
          <input type="password" />
        </div>
        <div className="buttons">
          <button>Login</button>
          <Link to="/register">Registro</Link>
        </div>
      </form>
    </div>
  );
};

export default Index;
