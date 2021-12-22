import React, { useEffect } from "react";
import Profesor from "../Profesor";
import "./index.css";
const Index = ({ profesores, setProfesores }) => {
  useEffect(() => {
    fetch("http://localhost:3001/profesores/obtener")
      .then((res) => res.json())
      .then((final) => {
        if (final.code === 200) {
          setProfesores(final.profesores);
        }
      });
  }, [setProfesores]);

  return (
    <>
      <h1 className="h1p">Profesores</h1>
      <section className="profesores">
        {profesores.map((profesor) => {
          return <Profesor key={profesor.id} profesor={profesor} />;
        })}
      </section>
    </>
  );
};

export default Index;
