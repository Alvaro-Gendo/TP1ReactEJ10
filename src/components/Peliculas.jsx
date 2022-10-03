import ItemPelicula from "./ItemPelicula";

const Peliculas = (props) => {
  return (
    <div>
      {props.arregloPeli.map((pelicula, posicion) => (
        <ItemPelicula
          key={posicion}
          nombrePelicula={pelicula}
          borrarPeli={props.borrarPeli}
        />
      ))}
    </div>
  );
};

export default Peliculas;
