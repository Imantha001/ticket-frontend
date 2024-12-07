import React from 'react'
import { Container, Row, Col } from "react-bootstrap";
import { BreadcrumbComponent } from "../../components/breadcrumb/breadcrumcomponent";


import { AddTicketForm } from '../../components/AddTicketForm/AddTicketFormComponent';



export const AddTicket = () => {

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  }

    const handleOnSubmit = (e) => {
    e.preventDefault();
    console.log("Ticket Submitted");
    }


  return (
    <Container>
        <Row>
            <Col>
            <BreadcrumbComponent page ="New Ticket" />
            </Col>
        </Row>

        <Row>
            <Col>
            <AddTicketForm handleOnChange={handleOnChange}
                            handleOnSubmit={handleOnSubmit} />
            </Col>
        </Row>
    </Container>
  )
}
