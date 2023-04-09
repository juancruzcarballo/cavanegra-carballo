import { Container } from "react-bootstrap";
import ItemDetailContainer from "../components/ItemDetailContainer";
import { useParams } from "react-router-dom";


function ItemRoot() {
  const params = useParams();
  return (
    <Container className="route-container">
      <ItemDetailContainer  itemId={params.id}/>
    </Container>
  );
}

export default ItemRoot;
