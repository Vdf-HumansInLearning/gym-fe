import React, { useState } from "react";
import { Form, Col, Row, InputGroup, Button } from "react-bootstrap";
import "./Register.css";

function Register() {
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
    <div className="register__container d-flex align-items-center justify-content-center">
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <h1 className="title__register">Create a new account!</h1>

        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="validationCustom01"
          >
            <Form.Label className="label__register">First name</Form.Label>
            <Form.Control required type="text" placeholder="First name" />
            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="validationCustom02"
          >
            <Form.Label className="label__register">Subscription</Form.Label>
            <Form.Select
              required
              type="select"
              aria-label="Subscription"
              defaultValue="Subscription"
            >
              <option>Choose subscription</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>

            <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="validationCustomUsername"
          >
            <Form.Label className="label__register">Username</Form.Label>
            <InputGroup hasValidation>
              <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Username"
                aria-describedby="inputGroupPrepend"
                required
              />
              <Form.Control.Feedback type="invalid">
                Please choose a username.
              </Form.Control.Feedback>
            </InputGroup>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="validationCustom03"
          >
            <Form.Label className="label__register">Phone number</Form.Label>
            <Form.Control type="text" placeholder="Phone number" required />
            <Form.Control.Feedback type="invalid">
              Please provide a valid city.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group
            className="d-flex flex-column"
            controlId="formBasicPassword"
          >
            <Form.Label className="label__register align-self-start">
              Password
            </Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Row className="mb-4">
          <Form.Group
            className="d-flex flex-column"
            controlId="formBasicRepassword"
          >
            <Form.Label className="label__register align-self-start">
              Confirm Password
            </Form.Label>
            <Form.Control type="password" placeholder="Confirm Password" />
          </Form.Group>
        </Row>

        <Button as={Col} md="4" type="submit">
          Register
        </Button>
      </Form>
    </div>
  );
}

export default Register;
