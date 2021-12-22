import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
const Index = () => {
  return (
    <div className="e404">
      <h1>Error 404</h1>
      <p>Sitio no disponible</p>
      <Link to="/">Volver al Inicio</Link>
    </div>
  );
};

export default Index;
