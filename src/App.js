
import { Col, Container, Row } from "react-bootstrap";
import "./App.css";
import Products from "./components/Products";
import products from "./products.json";


const App=()=>{
  return(
    <Container fluid>
       <Row className="text-center bg-success text-white">
        
          <h1>Harcamak için paran var</h1>
        
       </Row>
       <Products/>
       {/* <Row>
        {
          products.map((product, index) => {
            <
            Products product = {
              product
            }
            key = {
              index
            }
            />
          })
        }
       </Row> */}
    </Container>
  )
}

export default App;








