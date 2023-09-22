import React from "react";
import "./ClimaDiaIzquierda.css";



function ClimaDiaIzquierda({ enviarDato, data }) {
  const celsius = Math.trunc((data && data.list[0].main.temp) - 273.15) + "ºC";
  const fecha1= new Date(data && data.list[0].dt_txt)
  

console.log(fecha1);

  return (
    <div className="infoLeft">
      <form onSubmit={enviarDato} id="input">
        <input type="text" placeholder="Search for places" id="estiloInput" />{" "}
        <span className="material-symbols-outlined">my_location</span>
      </form>
      <div className="datosClimaDia">
        <div className="fondoIzquierdo">
          <img
            src={`https://openweathermap.org/img/wn/${
              data && data.list[0].weather[0].icon
            }@2x.png`}
            width="250"
            alt="imagen"
          />
        </div>
        <h1 id="tempPrincipal">{celsius}</h1>
        <h1 id="estadoClima">{data && data.list[0].weather[0].main}</h1>
        <h3 id="today">Today</h3>
        <h4 id="ciudad">
          <span class="material-symbols-outlined">location_on</span>
          {data && data.city.name}
        </h4>
      </div>
    </div>
  );
}

export default ClimaDiaIzquierda;
