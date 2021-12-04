import React, { useState } from "react";
import { validateEmail } from "../../helpers/index";
import { subscription } from "../../api/index";
import "./index.css";
import toast, { Toaster } from "react-hot-toast";
const Index = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail(email)) {
      subscription(email).then((res) => {
        if (res.id) {
          toast.success(`${email} ha sido subscripto correctamente`, {
            position: "top-right",
            duration: 3000,
          });
        } else {
        }
      });
      setEmail("");
    } else {
      toast.error("Por favor ingresa un email valido", {
        position: "top-right",
        duration: 2500,
      });
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="subscriptionForm">
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
      <Toaster />
    </>
  );
};

export default Index;
