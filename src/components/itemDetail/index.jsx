import React, { useState } from "react";
import Products  from "../../mocks/products";


function ItemDetail({product=Products }) {

  const [quantity, setQuantity] = useState(1);

  return (

    <div className="content">
      <div className="image">
        <img src={product.image} />
      </div>
      <div className="description">
        <h3 className="title">{product.name} </h3>
        <p>{product.description}</p>
        <p className="price"> $ {product.price}</p>

        </div>
      
      </div>
  
  );
}

export default ItemDetail;
