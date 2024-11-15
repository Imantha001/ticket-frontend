import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/CineClick.png";

export const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect bg="success" variant="dark">
      <Navbar.Brand href="/" style={{ paddingLeft: '20px' }}>
        <img 
          src={logo} 
          alt="CineClick Logo" 
          width="50px" 
          style={{ 
            borderRadius: '50%',
            border: '2px solid white'
          }} 
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};