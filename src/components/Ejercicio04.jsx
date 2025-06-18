import { useState } from "react";
import TituloEjercicio from "./utils/TituloEjercicio";

const Ejercicio04 = () => {
  const [message, setMessage] = useState("Bienvenido");

  const saludar = () => setMessage("Hola, como va tu día?");

  const desperdir = () => setMessage("Nos vemos, que te vaya bien");

  return (
    <>
      <div className="row mt-4 mb-4">
        <TituloEjercicio titulo={"Ejercicio 4 - Funciones - Saludo"} /> 
        <div className="col-12 text-center">
          <p className="text-center fs-1 fw-bold">{message}</p>
          <button className="w-25 btn btn-primary" onClick={saludar}>
            Saludar
          </button>
          <button className="w-25 btn btn-dark ms-2" onClick={desperdir}>
            Despedir
          </button>
        </div>
      </div>
    </>
  );
};

export default Ejercicio04;
