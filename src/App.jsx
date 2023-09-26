import { useState, useEffect } from "react";
import "./App.css";
import ClimaDiaIzquierda from "./components/vista/ClimaDiaIzquierda";
import UseClima from "./services/useClima";
import HightLight from "./components/datosAdicionales/HightLight";
import VistaSuperior from "./components/vistaSuperior/VistaSuperior";
import Modal from "./components/modal/Modal";

function App() {
  const {
    data,
    enviarDato,
    obtenerDato,
    verLondres,
    verBarcelona,
    verLongBeach,
  } = UseClima();
  const [modal, setModal] = useState(false);

  const activarModal = () => {
    setModal(!modal);
  };

  return (
    <>
      <main className="main">
        <div>
          <Modal
            active={modal ? "modal active" : "modal"}
            obtenerDato={obtenerDato}
            activarModal={activarModal}
            london={verLondres}
            barcelona={verBarcelona}
            longBeach={verLongBeach}
            /* hola mundo */
          />
          <ClimaDiaIzquierda
            enviarDato={enviarDato}
            data={data}
            activarModal={activarModal}
          />
        </div>
        <div>
          <VistaSuperior data={data} />
          <HightLight data={data} />
        </div>
      </main>
    </>
  );
}

export default App;
