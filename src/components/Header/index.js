import React from "react";
import { Link } from "react-router-dom";
import "./index.css";
import SubscriptionForm from "../../components/SubscriptionForm";
import Logo from "../../assets/LogoOxigenarte.png";
const Index = () => {
  return (
    <header>
      <Link to="/">
        <img src={Logo} alt="Logo Oxigenarte" />
      </Link>
      <nav>
        <ul>
          <li>Inicio</li>
          <li>Nosotros</li>
          <li>Profesores</li>
          <li>Contacto</li>
          <li>
            <Link to="/login"> Login </Link>
          </li>
        </ul>
      </nav>
      <div>
        <SubscriptionForm />
      </div>
    </header>
  );
};

export default Index;
