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
      <Card className="m-4 p-3 shadow-lg" style={{ background: "rgba(225,225,225,.5)"}}>
        <Card.Img variant="top" class='mh-100' style={{height:"200px"}} src={product.image}/>
        <Card.Body>
          <Card.Title className='fs-4'> {product.title} </Card.Title>
          <Card.Text className='fs-5'>${moneyFormat(product.price)}</Card.Text>
          <Container className="d-flex gap-2 justify-content-between align-items-center">
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
              variant="success"
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