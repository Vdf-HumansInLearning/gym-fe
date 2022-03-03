import React, { useState } from "react";
import { Link } from "react-router-dom"
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
    <>
      <div className="login__container d-flex align-items-center justify-content-center">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <div className="main__title">
            <h1>Login to your account:</h1>
          </div>
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
          <div>
            <p style={{ textAlign: "end", fontSize: "15px", marginTop: "-20px", marginBottom: "20px" }}>
              You don't have an account?
              <Link to="/register" className="link-primary">
                Register
              </Link>
            </p>
          </div>
          <Button style={{ width: "100%" }} as={Col} md="4" type="submit">
            Login
          </Button>
        </Form>
      </div>
    </>
  );
}

export default Login;
