import React, { useState, useEffect } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumcomponent";
import tickets from "../../assests/data/tickets.json";
import { MessageHistory } from "../../components/messageHistory/messagehistory.component";
import { UpdateTicket } from "../../components/updateTicket/updateticket.component";
import { useParams,useNavigate } from "react-router-dom";



// const ticket = tickets[0];

export const Ticket = () => {
  const { tId } = useParams();
  const [message, setMessage] = useState("");
  
  const [ticket, setTicket] = useState("");
  const navigate = useNavigate();



  useEffect(() => {
    const foundTicket = tickets.find((ticket) => String(ticket.id) === tId);
    setTicket(foundTicket);
  }, [tId]);
  if (!ticket) {
    return <div>Ticket not found</div>;
  }


  const handleOnChange = (e) => {
    setMessage(e.target.value);
  };


  const handleOnSubmit = () => {
    alert("Submited!");
  };


  const handleCloseTicket = () => {
    navigate(-1);
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
        <Button variant="outline-info" onClick={handleCloseTicket}>Close Ticket</Button>
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