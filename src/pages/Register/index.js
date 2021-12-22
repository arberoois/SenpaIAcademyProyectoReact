import React, { useState } from "react";
import "./index.css";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { validateEmail } from "../../helpers";
import { register } from "../../api/auth";

const Index = () => {
  const naviagate = useNavigate();
  const [newUser, setNewUser] = useState({
    name: "",
    email: "",
    password: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newUser.name === "" ||
      newUser.email === "" ||
      newUser.password === ""
    ) {
      toast.error("Debe llenar todos los campos", {
        position: "top-right",
        duration: 3000,
        style: {
          background: "#000",
          color: "#fff",
        },
      });
    } else {
      if (!validateEmail(newUser.email)) {
        toast.error("El email no es valido", {
          position: "top-right",
          duration: 3000,
          style: {
            background: "#000",
            color: "#fff",
          },
        });
      } else {
        register(newUser).then((res) => {
          if (res.code !== 201) {
            toast.error(res.message, {
              position: "top-right",
              duration: 3000,
              style: {
                background: "#000",
                color: "#fff",
              },
            });
            setNewUser({
              name: "",
              email: "",
              password: "",
            });
          } else {
            toast.success("Usuario creado exitosamente", {
              position: "top-right",
              duration: 3000,
              style: {
                background: "#000",
                color: "#fff",
              },
            });
            naviagate("/login");
          }
        });
      }
    }
  };

  return (
    <div className="register">
      <h1>Registro</h1>

      <form className="registerForm" onSubmit={handleSubmit}>
        <div className="inputs">
          <label>Nombre: </label>
          <input
            type="name"
            name="name"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.name}
          />
        </div>
        <div className="inputs">
          <label>Email: </label>
          <input
            type="email"
            name="email"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.email}
          />
        </div>
        <div className="inputs">
          <label>Contraseña: </label>
          <input
            type="password"
            name="password"
            onChange={(e) =>
              setNewUser({ ...newUser, [e.target.name]: e.target.value })
            }
            value={newUser.password}
          />
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
