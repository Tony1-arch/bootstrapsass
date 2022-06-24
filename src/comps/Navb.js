import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../Styles.css/Navbar.css'
function Navb() {
  return (
    <div >
      <Navbar className='navbar' >
        <Container>
          <Navbar.Brand className='navlink' href="/">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link className='navlink' href="/">Home</Nav.Link>
            <Nav.Link className='navlink'  href="/features">Features</Nav.Link>
            <Nav.Link className='navlink' href="/pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Navb;