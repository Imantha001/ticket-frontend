import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import { BreadcrumbComponent } from '../../components/breadcrumb/breadcrumcomponent';
import { SearchForm } from '../../components/searchForm/SearchComponenet';
import { TicketTable } from '../../components/tickettable/ticketTableComponent';
import  tickets  from "../../assests/data/tickets.json";
import { Link } from "react-router-dom";


export const Ticketlists = () => {
  const [str, setStr] = useState('');
  const [displayTickets,setDisplayTicket] = useState(tickets);

  useEffect(() =>{},[str,displayTickets]);

  const handleOnChange = (e) => {
    const { value } = e.target;
    setStr(value);
    searchTicket(value);
  };





  const searchTicket = (sttr) => {
    const filteredTickets = tickets.filter((row) =>
      row.Name.toLowerCase().includes(sttr.toLowerCase())
    );
    setDisplayTicket(filteredTickets);
  };


  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <BreadcrumbComponent page="Ticket Lists" />
        </Col>
        
        <Col>
        <Link to="/add-ticket">
          <Button variant="info">Add New Ticket</Button>
          </Link>
        </Col>

        <Col className="text-right">
          <SearchForm handleOnChange={handleOnChange} str={str} />
        </Col>
      </Row>
      <hr/>

      <Row>
      <Col>
          {displayTickets.length > 0 ? (
            <TicketTable tickets={displayTickets} />
          ) : (
              <p className="text-center text-muted">No tickets to show</p>
          )}
        </Col>
      </Row>
    </Container>
  );
};


