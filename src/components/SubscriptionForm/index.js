import React, { useState } from "react";
import { validateEmail } from "../../helpers/index";
import { subscription } from "../../api/index";
import "./index.css";
const Index = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      subscription(email).then((res) => alert(res));
      setEmail("");
    } else {
      alert("Por favor ingresa un email valido");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Subscribite a nuestras novedades: </label>
      <br />
      <input
        type="email"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        value={email}
      />
      <button>Subscribirme!</button>
    </form>
  );
};

export default Index;
