import React from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Cards = ({ product }) => {
  return (
    <>
      <Card className="m-4">
        <Card.Img variant="top" src={product.image} />
        <Card.Body>
          <Card.Title> {product.title} </Card.Title>
          <Card.Text>{product.price}</Card.Text>
          <Container className="d-flex gap-2 justify-content-between align-items-center">
            <Button className="w-50" variant="primary">
              Sat
            </Button>
            <span>0</span>
            <Button className="w-50" variant="primary">
              Satın Al
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards