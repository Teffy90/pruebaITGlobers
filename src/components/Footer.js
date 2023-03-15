import React from 'react'
//Estilos personalizados
import "../styles/Footer.css"

//Imagenes
import logoPufi from '../img/logos/logoPufi.jpg';
import QR from '../img/logos/codigo_qr.png';
import Compra from '../img/logos/compra_segura.png';
import facebook from '../img/redes/facebook.png';
import instagram from '../img/redes/instagram.png';
import twitter from '../img/redes/twitter.png';

export const Footer = () => {
  return (
    <div className='footer'>
        <div>
        <img src={logoPufi} width="80"height="80" className="d-inline-block align-top logoPufi" alt="Logo Pufi"/>
        </div>
        <div>
            <ul className='list_products'>
                <ol>
                    <p>PUFI RAIN</p>
                    <p>PUFI PUFF</p>
                    <p>PUFI CART</p>
                    <p>PUFI NAP</p>
                </ol>
            </ul>
        </div>
        <div>
            <ul className='options'>
                <ol>
                    <p>CONTACTO</p>
                    <p>AYUDA</p>
                    <p>CÓMO COMPRAR</p>
                    <p>TÉRMINOS & CONDICIONES</p>
                </ol>
            </ul>
        </div>
        <div>
            <ul className='sale'>
                <ol>
                    <p>COMPRA 100% SEGURA</p>
                    <img src={QR}  width="80"height="80" alt="imgQr" />
                    <img src={Compra}  width="80"height="80" alt="imgCompra" />
                    <p>COMPRA CON <br /> LA GARANTIA <br />DE PUFI</p>
                </ol>
            </ul> 
        </div>
        <div>
            <div className='socialNetwork'>
                <p>SIGUENOS EN</p>
                <a href="https://www.facebook.com" target="_blank"  >
                    <img src={facebook}  alt="facebook"  />
                </a>
                <a href="https://www.instagram.com" target="_blank" >
                    <img src={instagram}  alt="instagram" />
                </a>
                <a href="https://twitter.com" target="_blank" >
                    <img src={twitter}  alt="twitter" />
                </a>
            </div>
        </div>
        <div></div>
    </div>
  )
}
