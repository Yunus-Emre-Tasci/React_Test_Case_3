
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Products from "./components/Products";


const App=()=>{
  return(
    <Container fluid>
       <Row className="text-center bg-success text-white">
        <Col>
          <h1>Harcamak için paran var</h1>
        </Col>
       </Row>
       <Row>
        <Col xs={6} md={4} lg={2} >
          <Products/>
        </Col>
       </Row>
    </Container>
  )
}

export default App;








