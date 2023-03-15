import React, {useContext} from 'react';

//Estilos personalizados
import '../styles/SocialNetwork.css';

//Imagenes
import insta from '../img/insta.png';

const SocialNetwork = () => {
    return(
        <div>
            <div className='title'>
                <h4 className='title_h4'>INSTAGRAM</h4>
                <a href="https://www.instagram.com/pufi_es_pufi/" target="_blank" rel="noopener noreferrer" className='link'>
                    <h1>#ESPUFI</h1>
                    <img src={insta} alt="insta" />
                </a>
            </div>
           
        </div>
    )
}

export default SocialNetwork;

//no tengo conocimiento de como realizar la conexioón con la API