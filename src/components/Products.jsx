import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from './Cards';
import products from "../products.json";


const Products = () => {
  return (
    <Container className="mt-4 p-4 border">
      <Row className="g-4 justify-content-center">
        {products.map((product,i)=>{
          return (
            <Col xs={12} sm={6} lg={3} key={i}>
              <Cards product={product} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products