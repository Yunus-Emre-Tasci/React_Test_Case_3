import React from 'react'
import { Button, Container } from 'react-bootstrap'
import moneyFormat from '../Helper'
import BasketItem from './BasketItem'

const Basket = ({total,basket,setBasket}) => {

  const resetBasket=()=>{
    setBasket([])
  }

  return (
    <Container className="mt-4 p-4 rounded-2" style={{ background: "rgba(225,225,225,0.5)" }}>
      <h1>Alışveriş Detayları</h1>
      <Container className="mt-2 p-2">
        <ul>
          {basket.map((item, i) => (
            <BasketItem key={i} item={item} />
          ))}
        </ul>
      </Container>
      <div className="d-flex justify-content-end border-top border-dark mt-2 p-2 fs-4 fw-bold">
        Toplam: ${moneyFormat(total)}
      </div>
      <Container>
        <Button onClick={resetBasket} className="btn-danger mt-2 p-2">
          Sepeti Sıfırla
        </Button>
      </Container>
    </Container>
  );
}

export default Basket