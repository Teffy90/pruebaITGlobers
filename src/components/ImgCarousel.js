//Boostrap 
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';

//Estilos personalizados
import '../styles/Carousel.css';

//Imagenes
import img1 from '../img/img1.jpg';
import img2 from '../img/img2.jpg';
import img6 from '../img/img6.jpg';



function ImgCarousel() {
  return (
    <Carousel slide={false}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Img1"
        />
        <h1 className='slider__title'>Estár cómodo, nunca fue tan fácil.</h1>
        
        <Carousel.Caption>
          <Button variant="outline-warning" size="lg">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Img2"
        />
        <h1 className='slider__title'>Estár cómodo, nunca fue tan fácil.</h1>
        <Carousel.Caption>
          <Button variant="outline-primary" size="lg">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img6}

          alt="Img3"
        />
        <h1 className='slider__title'>Estár cómodo, nunca fue tan fácil.</h1>
        <Carousel.Caption>
          <Button variant="outline-success"  size="lg">SHOP</Button>{' '}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default ImgCarousel;