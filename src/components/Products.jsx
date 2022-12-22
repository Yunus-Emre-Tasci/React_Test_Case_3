import React from 'react';
import products from "../products.json";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Cards = () => {
  return (
    <>
      {products.map((item, i) => {
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={item.image} />
          <Card.Body>
            <Card.Title> {item.title} </Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>;
      })}
    </>
  );
}

export default Cards