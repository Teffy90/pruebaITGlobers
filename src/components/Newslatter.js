//Boostrap 
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

//Estilos personalizados
import '../styles/Newslatter.css';

export function validation(input) {

    const error = {};
    if (!input.email) {
        error.email = 'Por favor, escribe tu email';
    } else if (!/\S+@\S+\.\S+/.test(input.email)) {
        error.email = 'formato de email inválido, por favor, revisar';
    }
    return error;
};


function ValidationInputEmail() {
  return (
    <Container>
        <div className='title_newslatter'>
            <h4 className='title_h4'>NEWSLATTER</h4>                
            <h1>SUSCRÍBETE</h1>
            <h5>Y enterate de todas las novedades</h5>
        </div>
        <Form>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                Nunca compartiremos su correo electrónico con nadie más.
                </Form.Text>
            </Form.Group>
            <Button variant="outline-primary" type="submit" className='buttonForm'>
                Enviar
            </Button>
        </Form>
    </Container>
  );
}

export default ValidationInputEmail;