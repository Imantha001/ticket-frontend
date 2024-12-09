import React from "react";
import PropTypes from "prop-types";
import { Form, Button } from "react-bootstrap";
export const UpdateTicket = ({ msg, handleOnChange, handleOnSubmit }) => {
  return (
    <Form onSubmit={handleOnSubmit}>
      <Form.Label>Reply</Form.Label>
      <Form.Text></Form.Text>
      <Form.Control 
        value={msg}
        placeholder ="Additional Info"
        onChange={handleOnChange}
        as="textarea"
        row="5"
        name="detail"
      />
      <div className="text-right mt-3 mb-3">
        <Button  type="submit" className="float-right">
          Reply
        </Button>
      </div>
    </Form>
  );
};
UpdateTicket.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleOnSubmit: PropTypes.func.isRequired,
  msg: PropTypes.string.isRequired,
};