import React from "react";
import "./VistaSuperior.css";

function VistaSuperior(data) {
   
 
  const tempMax =
    Math.trunc((data.data && data.data.list[2].main.temp_max) - 273.15) + "ºC";
  const tempMin =
    Math.trunc((data.data && data.data.list[2].main.temp_min) - 273.15) + "ºC";
  const tempMax1 =
    Math.trunc((data.data && data.data.list[10].main.temp_max) - 273.15) + "ºC";
  const tempMin1 =
    Math.trunc((data.data && data.data.list[10].main.temp_min) - 273.15) + "ºC";
  const tempMax2 =
    Math.trunc((data.data && data.data.list[18].main.temp_max) - 273.15) + "ºC";
  const tempMin2 =
    Math.trunc((data.data && data.data.list[18].main.temp_min) - 273.15) + "ºC";
  const tempMax3 =
    Math.trunc((data.data && data.data.list[26].main.temp_max) - 273.15) + "ºC";
  const tempMin3 =
    Math.trunc((data.data && data.data.list[26].main.temp_min) - 273.15) + "ºC";
  const tempMax4 =
    Math.trunc((data.data && data.data.list[34].main.temp_max) - 273.15) + "ºC";
  const tempMin4 =
    Math.trunc((data.data && data.data.list[34].main.temp_min) - 273.15) + "ºC";

  return (
    <div className="cajaSiguientesDias">
      <div className="cardDias">
        <h3>Tomorrow</h3>
        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[2].weather[0].icon
            }@2x.png`}
            alt="imagen"
          />
          <div className="maxMin">
            <h4>{tempMax}</h4>
            <h4>{tempMin}</h4>
          </div>
        </div>
      </div>
      <div className="cardDias">
        <h2>dia2</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[10].weather[0].icon
            }@2x.png`}
            alt="imagen"
          />
          <div className="maxMin">
            <h4>{tempMax1}</h4>
            <h4>{tempMin1}</h4>
          </div>
        </div>
      </div>
      <div className="cardDias">
        <h2>dia 3</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[18].weather[0].icon
            }@2x.png`}
            alt="imagen"
          />
          <div className="maxMin">
            <h4>{tempMax2}</h4>
            <h4>{tempMin2}</h4>
          </div>
        </div>
      </div>
      <div className="cardDias">
        <h2>dia4</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[26].weather[0].icon
            }@2x.png`}
            alt="imagen"
          />
          <div className="maxMin">
            <h4>{tempMax3}</h4>
            <h4>{tempMin3}</h4>
          </div>
        </div>
      </div>
      <div className="cardDias">
        <h2>dia5</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[34].weather[0].icon
            }@2x.png`}
            alt="imagen"
          />
          <div className="maxMin">
            <h4>{tempMax4}</h4>
            <h4>{tempMin4}</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaSuperior;
