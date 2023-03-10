
import { useEffect, useState } from "react";
import {Container} from "react-bootstrap";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Products from "./components/Products";
import products from "./products.json";


const App=()=>{
  const [money, setMoney] = useState(1000000000)
  const [basket, setBasket] = useState([])
  const [total, setTotal] = useState(0)

  

  useEffect(() => {
    setTotal(basket.reduce((acc,item)=>{
      return acc+(item.amount*(products.find(product=>product.id===item.id)).price)
    },0))
    console.log(basket);
    console.log(total);
  }, [basket])
  


  return(
    <Container fluid>
      <Header money={money} total={total} />
      < Products setBasket = {
        setBasket
      }
      basket = {
        basket
      }
      total = {
        total
      } money={money}
      />
      {
        total > 0 && < Basket basket = {
          basket
        }
        total = {
          total
        }
        setBasket = {
          setBasket
        }
        />}
    </Container>
  )
}

export default App;








