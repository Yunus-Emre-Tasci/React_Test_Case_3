import React from 'react'
import { Button, Container } from 'react-bootstrap'

const Basket = () => {
  return (
    <Container className="mt-4 p-4 border" style={{ background: "wheat" }}>
      <h1>Alışveriş Detayları</h1>
      <Container className='mt-2 p-2'>
        <p>Arabax6</p>
      </Container>
      <div className="d-flex justify-content-end border-top border-dark mt-2 p-2">
        Toplam:$ dolar
      </div>
      <Container>
        <Button className="btn-danger mt-2 p-2">Sepeti Sıfırla</Button>
      </Container>
    </Container>
  );
}

export default Basket