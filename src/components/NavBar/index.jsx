import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {NavLink} from 'react-router-dom';
import Button from 'react-bootstrap/Button';

import Form from 'react-bootstrap/Form';



function NavBar({changeValue}) {
  return (
    <>
          <Navbar bg="light" variant="light">
        <Container>
          <Navbar.Brand href="#home">CAVA NEGRA</Navbar.Brand>
          <Nav className="me-auto">
          <li>
                <img src="https://cdn-icons-png.flaticon.com/512/1514/1514997.png" /></li>
                <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Search"
              style={{border:'black', borderColor:'black'}}
            />
            <Button variant="outline-success">Buscar</Button>
          </Form>
          </Nav>
        </Container>
      </Navbar>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/category/tintos" >Tintos</Nav.Link>
            <Nav.Link href="/category/blancos">Blancos</Nav.Link>
            <Nav.Link href="/category/espumantes">Espumantes</Nav.Link>
            <Nav.Link href="/category/exclusivos">Exclusivos</Nav.Link>
            <Nav.Link href="#pricing">Contacto</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />


    </>
  );
}

export default NavBar;

