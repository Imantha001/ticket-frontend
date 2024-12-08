import React from 'react'
import { Form, Container,Button, Row} from 'react-bootstrap'
import '../AddTicketForm/AddTicketFormComponentStyle.css';



export const AddTicketForm = ({handleOnSubmit,handleOnChange}) => {
  return (
    <Container className="border">
      <h2>Add New Tickets </h2>
      <Form autoComplete="off" onSubmit={handleOnSubmit}>
            <Form.Group as={Row}>
              <Form.Label className="loginleft">Event Name</Form.Label>
              <Form.Control
                name="EventName"
                onChange={handleOnChange}
                placeholder="Enter Event Name"
                className="italic-placeholder"
                required
              />
            </Form.Group>
            <Form.Group>
              <Form.Label className="loginleft">Date</Form.Label>
              <Form.Control
                type="date"
                name="date"
                onChange={handleOnChange}
                placeholder="Day of The Event"
                className="italic-placeholder"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="loginleft">Ticket Price</Form.Label>
              <Form.Control
                type="price"
                name="price"
                onChange={handleOnChange}
                placeholder="Ticket Price"
                className="italic-placeholder"
                required
              />
            </Form.Group>

            <Form.Group>
              <Form.Label className="loginleft">Description</Form.Label>
              <Form.Control
                as="textarea"
                name="textarea"
                rows={5}
                onChange={handleOnChange}
                placeholder='Enter Event Description'
                className="italic-placeholder"
              />
            </Form.Group>
            <hr />
            <div className='centered-button'>
              <Button type="submit"  className="centered-button">Submit</Button>          
            </div>
            </Form>
    </Container>
  )
}
