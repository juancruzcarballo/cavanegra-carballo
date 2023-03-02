
import CardWidget from "../CardWidget";
import "./navbar.css";


function NavBar() {
    return (
             <div className="navbar">
                <ul>
<li>               
   <img src="https://cdn-icons-png.flaticon.com/512/1514/1514997.png" /></li>
                 <li>
                    <button>Inicio</button>
                 </li>
                 <li>
                    <button>Tienda</button>
                 </li>

                 <li>
                    <button>Degustaciones</button>
                 </li>
                 <li>
                    <button>Contacto</button>
                 </li>


                </ul>
             <CardWidget />
             </div>

    );
}

export default NavBar;