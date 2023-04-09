import ItemListContainer from '../components/ItemListContainer';
import { useParams } from 'react-router-dom';
import { Container } from "react-bootstrap";
import { CustomProvider } from "../Context";


function Root() {
  const params = useParams();
  const isCategoryRoute = Boolean(params.id);

  return (
    <CustomProvider>
      <Container className="route-container">
        <ItemListContainer
          isCategoryRoute={isCategoryRoute}
          categoryId={params.id}
        />
      </Container>
    </CustomProvider>
  );
}

export default Root;