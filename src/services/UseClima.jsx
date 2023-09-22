import React from 'react'
import { useState, useEffect } from "react";

function UseClima() {
    const [data, setData] = useState(null);
    const [ciudad, setCiudad] = useState("bogota");
    
    
    useEffect(() => { 
      const getData = async()=>{
        const resp = await fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${ciudad}&appid=6bb4752511c95c42a2b6274a3e4004be`);
        const datos = await resp.json();
        
        setData(datos)
       console.log(datos);
    
        }
      getData()
      }
      ,[ciudad])
  
      const enviarDato= (e)=>{
        e.preventDefault()
        const inputNombreIngresado= e.target[0].value
        setCiudad(inputNombreIngresado);

    
    
    
  
      }
      

  return {data, enviarDato} 
}

export default UseClima