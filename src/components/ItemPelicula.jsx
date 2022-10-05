import { Button, Card, Col} from "react-bootstrap";

const ItemPelicula = (props) => {
  return (
      <Col sm={12} md={4} lg={3}>
        <Card className="m-1">
          <Card.Title className="text-center">
            {props.nombre}
          </Card.Title>
          <Card.Body>
            <p>Descripción:{props.descripcion}</p>
            <Card.Text>Género:{props.genero}</Card.Text>
            <Button
              variant="danger"
              onClick={() => props.borrarPeli(props.nombrePelicula)}
            >
              Borrar
            </Button>
          </Card.Body>
        </Card>
      </Col>
  );
};

export default ItemPelicula;
