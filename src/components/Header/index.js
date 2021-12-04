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
          <li>
            <Link to="/">Inicio </Link>
          </li>
          <li>
            <Link to="/">Nosotros </Link>
          </li>
          <li>
            <Link to="/">Profesores </Link>
          </li>
          <li>
            <Link to="/">Contacto </Link>
          </li>
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
