import 'bootstrap/dist/css/bootstrap.min.css'
import { Card } from 'react-bootstrap';
import Description from "./Description";
import Name from "./Name";
import Price from "./Price";
import Image from "./Image";
import product from './product';


function App() {

    const name = "youssef"

  return (
    <div className="App">
      <Card style={{ width: '18rem', backgroundColor: "#D0B8A8" , display:"flex" , justifyContent: "center" , alignItems: "center" }}>
          <Card.Img variant="top" src={product.image} alt={product.name} />

          <Card.Body>

              <Card.Title>
                <Name></Name>
              </Card.Title>

              <Card.Text>
                <Price></Price>
              </Card.Text>

              <Card.Text>
                <Description></Description>
              </Card.Text>

          </Card.Body>

      </Card>

      <p>hello { name === undefined ? "there" : name}</p>
      {name && (<img 
          src="/good.jpg" 
          alt="Welcome" 
          style={{ width: '200px', height: 'auto' }}
        />)}

    </div>
  );
}

export default App;
