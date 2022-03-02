import React from "react";
import { Card, Button } from "react-bootstrap";
import CardSession from "./CardSession";
import "./CardTrack.css";

const CardTrack = () => {
  return (
    <Card className="cardTrack__container">
      <Card.Body className="track__body">
        <Card.Body className="track__header">
          <div>
            <Card.Title>1 March</Card.Title>
            <Card.Subtitle className="track__subtitle mb-2 text-muted">
              Tuesday
            </Card.Subtitle>
          </div>
          <Button className="track__button" variant="primary">
            +
          </Button>
        </Card.Body>
      </Card.Body>
      <CardSession />
      <CardSession />
      <CardSession />
    </Card>
  );
};

export default CardTrack;
