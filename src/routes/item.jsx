import ItemDetailContainer from '../components/itemDetailContainer';
import ItemListContainer from '../components/ItemListContainer';
import NavBar from '../components/NavBar';

function ItemRoot() {
  return (
    <div>
      <NavBar />
      <ItemDetailContainer/>
    </div>
  );
}
 
 export default ItemRoot;