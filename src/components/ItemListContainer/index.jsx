import { useEffect, useState } from "react";
import {collection,  getFirestore, getDocs, query, where} from 'firebase/firestore';
import ItemList from "../ItemList";


function ItemListContainer({ categoryId, isCategoryRoute }) {
  const [products, setProducts] = useState([]);

  const getDocsFromFirebase = async (collection) => {
    await getDocs(collection)
      .then((snapshot) => {
        const docs = snapshot.docs;
        setProducts(docs.map((doc) => ({ id: doc.id, ...doc.data() })));
      })
      .catch((error) => console.log({ error }));
  };

  useEffect(() => {
    const db = getFirestore();
    const itemsCollection = collection(db, "items");

    if(isCategoryRoute) {
       const queryResult = query(
        itemsCollection, where("category", "==", categoryId));
      
       getDocs(queryResult)
       .then((snapshot) => {
         const docs = snapshot.docs;
         setProducts(docs.map((doc) => {
           return {id: doc.id, ...doc.data()};
         })
         );
   
       })
       .catch((error) => console.log({ error }));
                  } else{
                  

    getDocsFromFirebase(itemsCollection);

      }


  },[categoryId]);




    return (
        <div>

            <ItemList products={products}/>
        </div>
        
    );
}

export default ItemListContainer;