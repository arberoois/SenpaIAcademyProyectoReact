import React from "react";
import "./index.css";
import Oxigenarte from "../../components/Oxigenarte";
import Profesores from "../../components/Profesores";
const Index = () => {
  return (
    <div className="home">
      <Oxigenarte />
      <Profesores />
    </div>
  );
};

export default Index;
