import React from 'react';
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assests/img/TicketVibe.png";
import { useNavigate } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";




export const Header = () => {
  const navigate = useNavigate();

  const logMeOut = () => {
    navigate("/");
  };

  return (
    <Navbar expand="lg" collapseOnSelect bg="success" variant="dark">
      <Navbar.Brand href="/" style={{ paddingLeft: '20px' }}>
        <img 
          src={logo} 
          alt="TicketVibe Logo" 
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

          <LinkContainer to="/dashboard">
            <Nav.Link>Dashboard</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/ticket-lists">
            <Nav.Link>Tickets</Nav.Link>
          </LinkContainer>

          <Nav.Link onClick={logMeOut}>Logout</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};