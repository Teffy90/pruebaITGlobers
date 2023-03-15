import React from 'react'

//Estilos personalizados
import "../styles/Copyright.css"

//Imagenes
import BrandLive from '../img/logos/BrandLive.png';

export const Copyright = () => {
  return (
    <div className='copyright'>
        <p>PUFI Copyright 2017 - todos los Derechos Reservados</p>
        <img src={BrandLive} width="60"height="40" alt="BrandLive"/>        
    </div>
  )
}
