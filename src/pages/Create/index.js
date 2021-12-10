import React, { useState } from "react";
import "./index.css";
import toast from "react-hot-toast";
const Index = () => {
  const [newTeacher, setNewTeacher] = useState({
    name: "",
    descripcion: "",
    rol: "",
    sexo: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(newTeacher);
    if (
      newTeacher.name === "" ||
      newTeacher.descripcion === "" ||
      newTeacher.rol === "" ||
      newTeacher.sexo === ""
    ) {
      toast.error("Todos los campos son obligatorios", {
        position: "top-right",
        duration: 3000,
        style: {
          color: "white",
          backgroundColor: "black",
        },
      });
    } else {
      // call api
    }
  };

  return (
    <div className="create">
      <form onSubmit={handleSubmit}>
        <h1>Crear Profesor</h1>
        <label>Nombre </label>
        <input
          type="text"
          name="name"
          value={newTeacher.name}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value })
          }
        />
        <label>Descripcion </label>
        <input
          type="text"
          name="descripcion"
          value={newTeacher.descripcion}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value })
          }
        />
        <label>Rol </label>
        <input
          type="text"
          name="rol"
          value={newTeacher.rol}
          onChange={(e) =>
            setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value })
          }
        />
        <div>
          <label>Sexo </label>
          <select
            name="sexo"
            value={newTeacher.sexo}
            onChange={(e) =>
              setNewTeacher({ ...newTeacher, [e.target.name]: e.target.value })
            }
          >
            <option value="F">Femenino</option>
            <option value="M">Masculino</option>
          </select>
        </div>
        <button>Crear Profesor</button>
      </form>
    </div>
  );
};

export default Index;
