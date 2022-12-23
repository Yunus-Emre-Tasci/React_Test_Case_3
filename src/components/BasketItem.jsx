import React from 'react'
import products from "../products.json";

const BasketItem = ({item}) => {

    const product = products.find(i=>i.id===item.id)
  return <li>{product.title} <span>x {item.amount}</span></li>;
}

export default BasketItem