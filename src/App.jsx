import { useState, useEffect } from "react";
import "./App.css";
import ClimaDiaIzquierda from "./components/vista/ClimaDiaIzquierda";
import UseClima from "./services/useClima";

function App() {
  const { data, enviarDato } = UseClima();

  return (
    <>
      <main>
        <div className="izquierdo">
          <ClimaDiaIzquierda enviarDato={enviarDato} data={data} />
        </div>
        <div>
          <h1>derecho</h1>
        </div>
      </main>
    </>
  );
}

export default App;
