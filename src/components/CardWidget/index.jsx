import { useContext } from "react";
import "./cardwidget.css";
import { Context } from "../../context";
import { Link } from "react-router-dom";

function CardWidget() {
  const { productsAdded } = useContext(Context);
    return (

      <Link to="/cart">
             <button className="card-widget">
        
             <img src={"https://cdn-icons-png.flaticon.com/512/3612/3612651.png"} />
        {productsAdded.length}

            </button>
            </Link>

    );
}

export default CardWidget;