import { Card, Row } from "react-bootstrap";
import ItemPelicula from "./ItemPelicula";

const Peliculas = (props) => {
  return (
    <Card >
      <Card.Body>
        <Row>
          {props.arregloPeli.map((pelicula, posicion) => (
            <ItemPelicula
              key={posicion}
              nombrePelicula={pelicula}
              borrarPeli={props.borrarPeli}
              nombre={pelicula.nombre}
              descripcion={pelicula.descripcion}
              genero={pelicula.genero}
            />
          ))}
        </Row>
      </Card.Body>
    </Card>
  );
};

export default Peliculas;
