
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Basket from "./components/Basket";
import Header from "./components/Header";
import Products from "./components/Products";
import products from "./products.json";


const App=()=>{
  return(
    <Container fluid>
      <Header/>
      <Products/>
      <Basket/>
    </Container>
  )
}

export default App;








