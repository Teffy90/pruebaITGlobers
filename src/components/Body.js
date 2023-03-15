//Boostrap 
import Button from 'react-bootstrap/Button';

//Estilos personalizados
import '../styles/Body.css';

//Imagenes
import pufiRAIN from '../img/pufi_rain.jpg';
import pufiPUFF from '../img/pufi_puff.jpg';
import pufiCART from '../img/pufi_cart.jpg';
import pufiNAP from '../img/pufi_napp.jpg';





function AutoLayoutBody() {
  return (
    <section>
        <div id="pantalla-dividida">
            <div className='cardImg7'>
              <Button variant="outline-info" className='ButtonPruduct' size="lg">SHOP</Button>{' '}
            </div>
            <div className='cardText'>
                <img src={pufiRAIN} alt="pufiRAIN" />
                <p><spam className="title">Pufi RAIN</spam></p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#" className='link'> -- VER MÁS -- </a>
            </div> 
        </div>

        <div id="pantalla-dividida">
            <div className='cardText'>
                <img src={pufiPUFF} alt="pufiPUFF" />
                <p><spam className="title">Pufi PUFF</spam></p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#" className='link'> -- VER MÁS -- </a>
            </div> 
            <div className='cardImg3'>
              <Button variant="outline-info" className='ButtonPruduct' size="lg">SHOP</Button>{' '}
            </div>
        </div>

        <div id="pantalla-dividida">
            <div className='cardImg4'>
              <Button variant="outline-info" className='ButtonPruduct' size="lg">SHOP</Button>{' '}
            </div>
            <div className='cardText'>
                <img src={pufiCART} alt="pufiCART" />
                <p><spam className="title">Pufi CART</spam></p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#" className='link'> -- VER MÁS -- </a>
            </div> 
        </div>

        <div id="pantalla-dividida">
            <div className='cardText'>
                <img src={pufiNAP} alt="pufiNAP" />
                <p><spam className="title">Pufi NAP</spam></p>
                <p>Descripción del producto. Este es un texto simulado</p>
                <a href="#" className='link'> -- VER MÁS -- </a>
            </div> 
            <div className='cardImg5'>
              <Button variant="outline-info" className='ButtonPruduct' size="lg">SHOP</Button>{' '}
            </div>
        </div>

        
        
    </section>
    
  );
}

export default AutoLayoutBody;