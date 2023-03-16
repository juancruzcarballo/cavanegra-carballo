import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';


function Item({ product }) {
    return (
<div>
    
        <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={product.image} />
      <Card.Body>
        <Card.Title><p>{product.name}</p></Card.Title>
        <Card.Text><p>{product.description}</p>
        </Card.Text>
        <Button variant="primary" href="/item/id" style={{background:'black', border:'black'}}>Ver producto</Button>
      </Card.Body>
    </Card>

    </div>
    
  );
}


export default Item;