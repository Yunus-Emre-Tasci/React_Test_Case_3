import React from 'react'
import products from "../products.json";

const BasketItem = ({item}) => {

    const product = products.find(i=>i.id===item.id)
  return <li className='fw-bold fs-5'>{product.title} <span className='fw-normal'>x {item.amount}</span></li>;
}

export default BasketItem