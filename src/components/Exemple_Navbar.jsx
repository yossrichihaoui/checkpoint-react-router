import React from 'react'
import Container from 'react-bootstrap/Container';
import propTypes from 'prop-types' 
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import My_button from './My_button';
import Add_movie from './Formulaire';

function Exemple_Navbar({logo,name}) {
    console.log(logo)
  return (
    <div><Navbar expand="lg" className="bg-body-tertiary">
    <Container>
      <img src={logo} alt="logo" style={{width:"100px", heigth:"100px", marginRight:"10px" }}/>
      <Navbar.Brand href="#home">{name}</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Another action
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Separated link
            </NavDropdown.Item>
          </NavDropdown>
          <My_button>
            <p>Delete</p>
          </My_button>
          <Add_movie/>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar></div>
  )
}
Exemple_Navbar.defaultProps={
  logo:"https://img.freepik.com/free-photo/view-3d-cinema-elements_23-2150720822.jpg",
  name:"amira"
}
Exemple_Navbar.propTypes={
  logo:propTypes.number
}
export default Exemple_Navbar