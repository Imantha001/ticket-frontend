import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import PropTypes from 'prop-types';

const ResetPassword = ({ handleOnChange, email, handleLogin, switchToLogin }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-secondary'>Reset Password</h1>
          <hr />
          <Form onSubmit={handleLogin}>
            <Form.Group>
              <Form.Label className="loginleft">Email Address</Form.Label>
              <Form.Control
                type="email"
                name="email"
                value={email}
                onChange={handleOnChange}
                placeholder="Enter Email"
                className="italic-placeholder"
                required
              />
            </Form.Group>

            <hr />
            <Button type="submit">Reset Password</Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr />
          <a href="#login" onClick={switchToLogin}>Back to Login</a> {/* Switch back to Login */}
        </Col>
      </Row>
    </Container>
  );
};

ResetPassword.propTypes = {
  handleOnChange: PropTypes.func.isRequired,
  handleLogin: PropTypes.func.isRequired,
  email: PropTypes.string.isRequired,
  switchToLogin: PropTypes.func.isRequired,
};

export default ResetPassword;
