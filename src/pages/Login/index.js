import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../../helpers";
import { login } from "../../api/auth";
const Index = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
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
        login(user).then((res) => {
          if (res.code !== 200) {
            toast.error(res.message, {
              position: "top-right",
              duration: 3000,
              style: {
                background: "#000",
                color: "#fff",
              },
            });
            setUser({ email: "", password: "" });
          } else {
            localStorage.setItem("token", res.token);
            toast.success("Bienvenido", {
              position: "top-right",
              duration: 3000,
              style: {
                background: "#000",
                color: "#fff",
              },
            });
            navigate("/");
          }
        });
      }
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
