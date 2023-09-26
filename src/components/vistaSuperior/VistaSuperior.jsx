import React from "react";
import "./VistaSuperior.css";

function VistaSuperior(data) {
   
 const fecha2= new Date (data.data && data.data.list[14].dt_txt.substr(0, 10)).toGMTString( ).substr(0,12) 
 const fecha3= new Date (data.data && data.data.list[22].dt_txt.substr(0, 10)).toGMTString( ).substr(0,12)
 const fecha4= new Date (data.data && data.data.list[30].dt_txt.substr(0, 10)).toGMTString( ).substr(0,12)
 const fecha5= new Date (data.data && data.data.list[38].dt_txt.substr(0, 10)).toGMTString( ).substr(0,12)
  const tempMax =
    Math.trunc((data.data && data.data.list[6].main.temp_max) - 273.15) + "ºC";
  const tempMin =
    Math.trunc((data.data && data.data.list[6].main.temp_min) - 273.15) + "ºC";
  const tempMax1 =
    Math.trunc((data.data && data.data.list[14].main.temp_max) - 273.15) + "ºC";
  const tempMin1 =
    Math.trunc((data.data && data.data.list[14].main.temp_min) - 273.15) + "ºC";
  const tempMax2 =
    Math.trunc((data.data && data.data.list[22].main.temp_max) - 273.15) + "ºC";
  const tempMin2 =
    Math.trunc((data.data && data.data.list[22].main.temp_min) - 273.15) + "ºC";
  const tempMax3 =
    Math.trunc((data.data && data.data.list[30].main.temp_max) - 273.15) + "ºC";
  const tempMin3 =
    Math.trunc((data.data && data.data.list[30].main.temp_min) - 273.15) + "ºC";
  const tempMax4 =
    Math.trunc((data.data && data.data.list[38].main.temp_max) - 273.15) + "ºC";
  const tempMin4 =
    Math.trunc((data.data && data.data.list[38].main.temp_min) - 273.15) + "ºC";

  return (
    <div className="cajaSiguientesDias">
      <div className="cardDias">
        <h2>Tomorrow</h2>
        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[6].weather[0].icon
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
        <h2>{fecha2}</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[14].weather[0].icon
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
        <h2>{fecha3}</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[22].weather[0].icon
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
        <h2>{fecha4}</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[30].weather[0].icon
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
        <h2>{fecha5}</h2>

        <div className="card">
          <img
            src={`https://openweathermap.org/img/wn/${
              data.data && data.data.list[38].weather[0].icon
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
