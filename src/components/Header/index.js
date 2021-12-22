import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./index.css";
import SubscriptionForm from "../../components/SubscriptionForm";
import Logo from "../../assets/LogoOxigenarte.png";
const Index = () => {
  const navigate = useNavigate();

  const close = () => {
    localStorage.removeItem("token");
    navigate("/login", { replace: true });
  };

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
          {localStorage.getItem("token") ? (
            <>
              <li>
                <Link to="/create">Crear Profesor</Link>
              </li>
              <li>
                <button onClick={close}>Cerrar sesión</button>
              </li>
            </>
          ) : (
            <li>
              <Link to="/login"> Login </Link>
            </li>
          )}
        </ul>
      </nav>
      <div>
        <SubscriptionForm />
      </div>
    </header>
  );
};

export default Index;
