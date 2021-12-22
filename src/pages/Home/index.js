import React from "react";
import "./index.css";
import Oxigenarte from "../../components/Oxigenarte";
import Profesores from "../../components/Profesores";
const Index = ({ profesores, setProfesores }) => {
  return (
    <div className="home">
      <Oxigenarte />
      <Profesores profesores={profesores} setProfesores={setProfesores} />
    </div>
  );
};

export default Index;
