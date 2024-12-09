import React from 'react';
import { Container, Row, Col, Button } from "react-bootstrap";
import { TicketTable } from "../../components/tickettable/ticketTableComponent";
import tickets from "../../assests/data/tickets.json";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumcomponent";

export const DashboardPage = () => {
  return (
    <Container>
      <Row>
        <Col>
          <BreadcrumbComponent page="Dashboard" />
        </Col>
      </Row>

      <Row>
        <Col className="text-center mt-5 mb-2">
          <Button
            variant="info"
            style={{
              fontSize: "2rem",
              padding: "8px 10px",
              color: "white"
            }}
          >
            Add New Ticket
          </Button>
        </Col>
      </Row>

      <Row>
      <Col className="text-center mt-4">
        <div>Total Tickets: 50</div>
        <div>Remaining Tickets: {50 - tickets.length}</div>
        <div>Booked Tickets: {tickets.length}</div>
      </Col>
      </Row>

      <Row>
        <Col className="mt-5">Recently Added Tickets</Col>
      </Row>
      <hr />

      <Row>
        <Col className="recent-ticket">
          <TicketTable tickets={tickets} />
        </Col>
      </Row>
    </Container>
  );
};
