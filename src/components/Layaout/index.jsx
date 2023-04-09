import { Outlet as Page} from "react-router-dom";
import NavBar from "../NavBar";


function Layaout() {
    return (
        <main className="layout-container">
         <NavBar />
         <Page />

        </main>
    );
}

export default Layaout;