import React from "react";
import Avatar from "../../assets/random.png";
import "./index.css";
const Index = ({ profesor }) => {
  return (
    <article key={profesor.id} className="profesor">
      <h2>{profesor.nombre}</h2>
      <img src={Avatar} alt={profesor.nombre} />
      <p>Rol: {profesor.rol}</p>
      <p>Descripcion: {profesor.descripcion}</p>
      {profesor.sexo === "M" ? <p>Sexo: Masculino</p> : <p>Sexo: Femenino</p>}
    </article>
  );
};

export default Index;
