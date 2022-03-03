import React from "react";
import { Card } from "react-bootstrap";
import CardSession from "./CardSession";
import "./CardTrack.css";
import { BsFillPlusCircleFill } from "react-icons/bs";

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
          <BsFillPlusCircleFill
            style={{ fontSize: "30px", color: "#0d6efd" }}
          />
        </Card.Body>
      </Card.Body>
      <CardSession />
      <CardSession />
      <CardSession />
    </Card>
  );
};

export default CardTrack;
