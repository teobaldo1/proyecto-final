import React from "react";
import "./HightLight.css";

function HightLight({ data }) {
  const visiability = Math.trunc((data && data.list[0].visibility) / 1000);
  return (
    <div id="cajaPrincipal">
      <div className="tituloCajas">
        <h2 id="infoInferior">Tuday's HightLight</h2>
      </div>
      <div className="cajaDatos">
        <div className="contenedorCajas">
          <div className="primeraFila">
            <div className="cajas">
              <h3 className="infoCards">Wind Status</h3>
              <h1 className="numeros">
                {data && data.list[0].wind.speed}
                <span className="unidades">mph</span>
              </h1>
              <div id="navegador">
                <span id="navigation" class="material-symbols-outlined">
                  near_me
                </span>
                <span className="wsw">WSW</span>
              </div>
            </div>
            <div className="cajas">
              <h3 className="infoCards">Humidity</h3>
              <h1 className="numeros">
                {data && data.list[0].main.humidity}
                <span className="unidades">%</span>
              </h1>
              <div className="ctn-progres">
                <label className="numeroBarra">
                  <h1>0</h1>
                  <h1>50</h1>
                  <h1>100</h1>
                </label>
                <progress
                  id="file"
                  max="100"
                  value={data && data.list[0].main.humidity}
                ></progress>
                <label className="numeroBarra">%</label>
              </div>
            </div>
          </div>
          <div className="segundaFila">
            <div className="cajas">
              <h3 className="infoCards">Visiability</h3>
              <h1 className="numeros">
                {visiability}
                <span className="unidades">miles</span>
              </h1>
            </div>

            <div className="cajas">
              <h3 className="infoCards">Air Pressure</h3>
              <h1 className="numeros">
                {data && data.list[0].main.pressure}
                <span className="unidades">mb</span>
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HightLight;
