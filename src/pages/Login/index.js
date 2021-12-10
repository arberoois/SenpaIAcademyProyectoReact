import React, { useState } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../../helpers";
const Index = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(user);
    if (user.email === "" || user.password === "") {
      toast.error("Debe llenar todos los campos", {
        position: "top-right",
        duration: 2500,
        style: {
          backgroundColor: "#000",
          color: "#fff",
        },
      });
    } else {
      if (!validateEmail(user.email)) {
        toast.error("El email no es valido", {
          position: "top-right",
          duration: 3000,
          style: {
            background: "#000",
            color: "#fff",
          },
        });
      } else {
        // api call
      }
      // api call
    }
  };
  return (
    <div className="login">
      <h1>Inicio de Sesión</h1>
      <form className="loginForm" onSubmit={handleSubmit}>
        <div className="inputs">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
        </div>
        <div className="inputs">
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={(e) =>
              setUser({ ...user, [e.target.name]: e.target.value })
            }
          />
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
