//Boostrap 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//Estilos personalizados
import "../styles/Navbar.css"

//Imagenes
import logoPufi from '../img/logos/logoPufi.jpg';
import nap from '../iconos/almohada.png';
import cart from '../iconos/bolsa-de-la-compra.png';
import rain from '../iconos/sombrilla-de-playa.png';
import puff from '../iconos/puff.png';


function NavBar() {
  return (
    <Navbar bg="light" expand="lg">
      
        <Navbar.Brand href="#home" >
             <img src={logoPufi} width="70"height="70"className="d-inline-block align-top" alt="Logo Pufi"/>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">
              <img src={puff} width="40"height="30"className="d-inline-block align-top" alt="Icono puff"/>
              PUFI PUFF
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={rain} width="40"height="30"className="d-inline-block align-top" alt="Icono sombrilla"/>
              PUFI RAIN
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={cart} width="40"height="30"className="d-inline-block align-top" alt="Icono compra"/>
              PUFI CART
            </Nav.Link>
            <Nav.Link href="#link">
              <img src={nap} width="40"height="30"className="d-inline-block align-top" alt="Icono almohada"/>
              PUFI NAP
            </Nav.Link>            
          </Nav>
          <Nav>
          <NavDropdown title="Mi Cuenta" id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Iniciar Sesión</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Crear Cuenta
              </NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link"> Mi Compra </Nav.Link> 
          </Nav>
        </Navbar.Collapse>
    </Navbar>
    
  );
}

export default NavBar;