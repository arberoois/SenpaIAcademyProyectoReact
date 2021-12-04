import React, { useState, useEffect } from "react";
import "./index.css";
const Index = () => {
  const [profesores, setProfesores] = useState([{ id: 1, nombre: "Juan" }]);

  return (
    <section>
      <h1>Profesores</h1>
      {profesores.map((profesor) => {
        return (
          <article key={profesor.id}>
            <h2>{profesor.nombre}</h2>
            <p>{profesor.id}</p>
          </article>
        );
      })}
    </section>
  );
};

export default Index;
