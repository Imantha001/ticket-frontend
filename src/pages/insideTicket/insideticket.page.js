import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumcomponent";
import tickets from "../../assests/data/tickets.json";
import { MessageHistory } from "../../components/messageHistory/messagehistory.component";
import { UpdateTicket } from "../../components/updateTicket/updateticket.component";


const ticket = tickets[0];

export const Ticket = () => {
  const [message, setMessage] = useState("");


  useEffect(() => {}, [message]);
  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };


  const handleOnSubmit = () => {
    alert("Submited!");
  };

  
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComponent page="Ticket" />
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="Name">Name  : {ticket.Name}</div>
          <div className="date">Date  : {ticket.Date}</div>
          <div className="price">Price  : {ticket.Price}</div>
          <div className="tickets">No. of Tickets :  {ticket.Tickets} </div>
          <div className="seats">Seat No   :  {ticket.Seats}</div>
        </Col>
        <Col className="text-right">
        <Button variant="outline-info" >Close Ticket</Button>        
        </Col>
      </Row>
      <Row className="mt-4">
        <Col>
          <MessageHistory msg={ticket.history} />
        </Col>
      </Row>
      <hr />
      <Row className="mt-4">
        <Col>
          <UpdateTicket
            msg={message}
            handleOnChange={handleOnChange}
            handleOnSubmit={handleOnSubmit}
          />
        </Col>
      </Row>
    </Container>
  );
};