import React, { useState } from "react";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import "./Login.css";

function Login() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <div className="login__container d-flex align-items-center justify-content-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 className="mb-5">Login to your account</h1>
        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="validationCustomUsername"
          >
            <Form.Label className="label__login">Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please introduce your username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>
        <Row className="mb-4">
          <Form.Group
            className="d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Label className="label__login">Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Button as={Col} md="6" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}

export default Login;
