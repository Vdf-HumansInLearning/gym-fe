import React from "react";
import { Card, Button } from "react-bootstrap";
import "./CardSession.css";

const CardSession = () => {
  return (
    <Card className="cardsession__container">
      <Card.Header>09:00-10:00</Card.Header>
      <Card.Body className="cardsession__body">
        <Card.Title>Trainers: </Card.Title>
        <Card.Text>Reservation left: 3</Card.Text>
        <div className="div__difficultyLevel">
          <Card.Text className="card__text__difficulty">
            Difficulty level:
          </Card.Text>
          <Button variant="success">Line with difficulty level</Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default CardSession;
