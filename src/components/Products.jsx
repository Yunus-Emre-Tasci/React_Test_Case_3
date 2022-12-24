import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import Cards from './Cards';
import products from "../products.json";


const Products = ({setBasket,basket,money,total}) => {
  return (
    <Container className="mt-4 p-4">
      <Row className="g-4 d-flex justify-content-center align-items-center">
        {products.map((product,i)=>{
          return (
            <Col xs={12} sm={6} lg={4} xl={3} key={i}>
              <Cards
                product={product}
                setBasket={setBasket}
                basket={basket}
                total={total}
                money={money}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default Products