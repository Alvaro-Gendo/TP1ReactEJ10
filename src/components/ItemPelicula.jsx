import { Button, Card, Col, Row } from "react-bootstrap";

const ItemPelicula = (props) => {
  return (
    <Row>
      <Col sm={12} md={4} lg={3}>
        <Card className="m-1">
          <Card.Title className="text-center">
            {props.nombrePelicula}
          </Card.Title>
          <Card.Body>
            <p>Descripción:{props.descripcion}</p>
            <Card.Text>Género:</Card.Text>
            <Button
              variant="danger"
              onClick={() => props.borrarPeli(props.nombrePelicula)}
            >
              Borrar
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ItemPelicula;
