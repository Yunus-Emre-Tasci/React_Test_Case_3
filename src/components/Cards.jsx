import React from 'react';
import { ButtonGroup, Container } from 'react-bootstrap';
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import moneyFormat from '../Helper';

const Cards = ({ setBasket, basket, money, total, product }) => {

const checkBasket=basket.find(item=>item.id===product.id)

const addBasket=()=>{
  if(checkBasket){
    checkBasket.amount+=1
    setBasket([...basket.filter(item=>item.id!==product.id),checkBasket])
    }
    else{
      setBasket([...basket,{
        id:product.id,
        amount:1
      }])
    }
  }

const removeBasket=()=>{
  const basketWithoutCurrent=basket.filter(item=>item.id!==product.id)
  checkBasket.amount -= 1;
  if (checkBasket.amount === 0) {
    setBasket([...basketWithoutCurrent]);
  } else {
    setBasket([...basketWithoutCurrent,checkBasket])
  }
}  


  return (
    <>
      <Card className="m-4 p-4 shadow-lg" style={{ background: "rgba(225,225,225,.5)" }}>
        <Card.Img variant="top" src={product.image} style={{maxWidth:"200px", maxHeight:"200px",objectFit:"cover"}}/>
        <Card.Body>
          <Card.Title> {product.title} </Card.Title>
          <Card.Text>{moneyFormat(product.price)}</Card.Text>
          <Container className="d-flex gap-2 justify-content-around align-items-center">
            <Button
              onClick={removeBasket}
              disabled={!checkBasket}
              variant="primary"
            >
              Sat
            </Button>
            <span className="border-top border-bottom p-1">
              {(checkBasket && checkBasket.amount) || 0}
            </span>
            <Button
              onClick={addBasket}
              disabled={total + product.price > money}
              variant="primary"
            >
              Satın Al
            </Button>
          </Container>
        </Card.Body>
      </Card>
    </>
  );
};

export default Cards