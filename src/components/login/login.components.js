import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const LoginPage = ({ handleOnChange, email, password, handleLogin, switchToResetPassword }) => {
  return (
    <Container>
      <Row>
        <Col>
          <h1 className='text-secondary'>Client Login Page</h1>
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
            <Form.Group>
              <Form.Label className="loginleft">Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                value={password}
                onChange={handleOnChange}
                placeholder="Enter Password"
                className="italic-placeholder"
                required
              />
            </Form.Group>
            <hr />
            <Button type="submit">Login</Button>
          </Form>
        </Col>
      </Row>

      <Row>
        <Col>
          <hr />
          <a href="#reset" onClick={switchToResetPassword}>Forgot Password?</a>
        </Col>
      </Row>
    </Container>
  );
};

export default LoginPage;
