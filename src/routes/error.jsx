
import { useRouteError } from "react-router-dom";
import { Button } from "react-bootstrap";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

function Error() {
  const error = useRouteError();

  return (
    <main>
      <NavBar />
      <div className="d-flex flex-column align-items-center justify-content-center vh-100">
        <h1 className="text-center display-1">Lamentamos lo sucedido</h1>
        <h2 className="text-center display-4">
          Ha ocurrido un error inesperado
        </h2>
        <p className="text-center">
          <i>{error.statusText || error.message}</i>
        </p>
        <Link to="/">
          <Button variant="success" className="mt-3">
            Volver a inicio
          </Button>
        </Link>
      </div>
    </main>
  );
}

export default Error;