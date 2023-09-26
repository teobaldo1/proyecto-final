import React from "react";
import { useState, useEffect } from "react";

function UseClima() {
  const [data, setData] = useState(null);
  const [ciudad, setCiudad] = useState("bogota");

  useEffect(() => {
    const getData = async () => {
      const resp = await fetch(
        `https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=6bb4752511c95c42a2b6274a3e4004be`
      );
      const datos = await resp.json();

      setData(datos);
    };
    getData();
  }, [ciudad]);

  const enviarDato = (e) => {
    const inputNombreIngresado = e.target[0].value;
    setCiudad(inputNombreIngresado);
  };
  const obtenerDato = (el) => {
    el.preventDefault();
    const inputModal = el.target[0].value;
    setCiudad(inputModal);
  };
  const verLondres = () => {
    const city = "london";
    setCiudad(city);
    obtenerDato();
  };
  const verBarcelona = () => {
    const city1 = "barcelona";
    setCiudad(city1);
    obtenerDato();
  };

  const verLongBeach = () => {
    const city2 = "long beach";
    setCiudad(city2);
    obtenerDato();
  };

  return {
    data,
    enviarDato,
    obtenerDato,
    verLondres,
    verBarcelona,
    verLongBeach,
  };
}

export default UseClima;
