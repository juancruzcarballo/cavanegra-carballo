import { useState } from "react";
import Button from "react-bootstrap/Button";


const ItemCount = ({ stock, onAdd }) => {
    const [count, setCount] = useState(1);
    return (
      <div className="item-count-container">
        <div className="controls-container">
          <div>
            <Button
              variant="dark"
              className="controls"
              style={{backgroundColor:'black', borderColor:'black'}}
              onClick={() => setCount((prevState) => prevState - 1)}
              disabled={count < 2}
            >
              -
            </Button>
          </div>
  
          <div className="counter">{count}</div>
          <div>
            <Button
              variant="dark"
              className="controls"
              disabled={count === stock}
              style={{backgroundColor:'black', borderColor:'black'}}
              onClick={() => setCount((prevState) => prevState + 1)}
            >
              +
            </Button>
          </div>
        </div>
        <br />
        <div className="add-to-cart">
          <Button variant="dark" style={{backgroundColor:'black', borderColor:'black'}} onClick={() => onAdd(count)}>
            Agregar al carrito
          </Button>
        </div>
      </div>
    );
  };

  
  
  export default ItemCount;