import CardWidget from "../CardWidget";
import "./navbar.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {Link} from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';



function NavBar() {
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
        <Link to={`/`}> <Navbar.Brand>Home</Navbar.Brand></Link>
          <Nav className="me-auto" style={{color:'black'}}>
          <Nav.Link>  <Link to={`/category/tintos`} style={{color:'rgb(239, 239, 233)'}}>Tintos</Link></Nav.Link>  
          <Nav.Link>  <Link to={`/category/blancos`} style={{color:'rgb(239, 239, 233)'}}>Blancos</Link></Nav.Link>  
          <Nav.Link>  <Link to={`/category/espumantes`} style={{color:'rgb(239, 239, 233)'}}>Espumantes</Link></Nav.Link>  
          <Nav.Link> <Link to={`/category/exclusivos`} style={{color:'rgb(239, 239, 233)'}}>Exclusivos</Link></Nav.Link>  

          </Nav>
        </Container>
      </Navbar>
      <br />


    </>
  );
}

export default NavBar;

