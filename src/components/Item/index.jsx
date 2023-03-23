import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function Item({ product }) {
    return (
<div>
    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><p>{product.name}</p></Card.Title>
        <Card.Text><p>$ {product.price}</p>
        </Card.Text>
        <Link to={`/item/${product.id}`}>
        <Button variant="primary" style={{background:'black', border:'black'}}>Ver item</Button>
        </Link>
      </Card.Body>
    </Card>

    </div>
    
  );
}


export default Item;