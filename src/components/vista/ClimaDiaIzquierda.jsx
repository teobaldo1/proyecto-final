import React from "react";

function ClimaDiaIzquierda({ enviarDato, data }) {
  //const celsius = ((data.main?.temp - 32) * 5) / 9 + "ºC";

  return (
    <div className="infoLeft">
      <form onSubmit={enviarDato} >
        <input type="text" />
      </form>
      <div>
        <div className="fondoIzquierdo">
          <img src="/public/image/Shower.png" alt="" />
        </div>
        <h1>{data && data.main.temp}</h1>
        <h2>{data && data.name}</h2>
      </div>
    </div>
  );
}

export default ClimaDiaIzquierda;
