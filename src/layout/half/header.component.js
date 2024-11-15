import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/CineClick.png"; // Corrected the import path and variable

export const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect bg="success" variant="dark">
      <Navbar.Brand href="/" style={{ paddingLeft: '20px' }}>  {/* Add space from the left */}
        <img 
          src={logo} 
          alt="CineClick Logo" 
          width="50px" 
          style={{ 
            borderRadius: '50%',  // Make the logo round
            border: '2px solid white'  // Optional: Add a border to the logo (adjust as needed)
          }} 
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="navbar-nav" />
      <Navbar.Collapse id="navbar-nav">
        <Nav className="ms-auto">  {/* Align items to the right */}
          <Nav.Link href="/dashboard">Dashboard</Nav.Link>
          <Nav.Link href="/tickets">Tickets</Nav.Link>
          <Nav.Link href="/logout">Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
