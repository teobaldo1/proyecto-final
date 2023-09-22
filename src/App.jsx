import { useState, useEffect } from "react";
import "./App.css";
import ClimaDiaIzquierda from "./components/vista/ClimaDiaIzquierda";
import UseClima from "./services/useClima";
import HightLight from "./components/datosAdicionales/HightLight";
import VistaSuperior from "./components/vistaSuperior/VistaSuperior";

function App() {
  const { data, enviarDato } = UseClima();
  

  return (
    <>
      <main className="main">
        <div>
          <ClimaDiaIzquierda enviarDato={enviarDato} data={data} />
        </div>
        <div>
        <VistaSuperior data={data}/> 
         <HightLight data={data} />
        
        </div>
      </main>
    </>
  );
}

export default App;
