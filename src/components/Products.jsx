import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Cards from './Cards';
import products from "../products.json";


const Products = () => {
  return (
    <Container className="mt-4 p-4">
      <Row className="g-3 justify-content-center">
        {products.map((product,i)=>{
          return (
            <Col xs={6} sm={4} md={3} lg={2} key={i}>
              <Cards product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products