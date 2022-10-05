import { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import Peliculas from "./Peliculas";

const Formulario = () => {
  const [nombre, setNombre] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [genero, setGenero] = useState("");

  const peliculaLS = JSON.parse(localStorage.getItem("arregloPeliculas")) || [];

  const [arregloPeli, setArregloPeli] = useState(peliculaLS);

  useEffect(() => {
    localStorage.setItem("arregloPeliculas", JSON.stringify(arregloPeli));
  }, [arregloPeli]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      nombre.trim() === "" &&
      descripcion.trim() === "" &&
      genero.trim() === ""
    ) { 
      alert("Falta completar datos")
    } else {

      let objetPeli = { nombre, descripcion, genero };
      setArregloPeli([...arregloPeli, objetPeli]);

      setNombre("");
      setDescripcion("");
      setGenero("");
    }
  };

  const borrarPeli = (nombre) => {
    let modPeli = arregloPeli.filter((item) => (item !== nombre));
    setArregloPeli(modPeli);
  };

  return (
    <>
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            type="text"
            placeholder="Nombre de pelicula"
            minLength={2}
            maxLength={20}
            required
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
          ></Form.Control>
          <Form.Label>Descripción</Form.Label>
          <Form.Control
            as="textarea"
            placeholder="Agregar Descripción"
            minLength={20}
            maxLength={150}
            required
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></Form.Control>
          <Form.Label>Género</Form.Label>
          <Form.Select
            value={genero}
            onChange={(e) => setGenero(e.target.value)}
            aria-label="Default select"
            required
          >
            <option>Seleccione una opción</option>
            <option value="Acción">Acción</option>
            <option value="Terror">Terror</option>
            <option value="Comedia">Comedia</option>
          </Form.Select>
        </Form.Group>
        <Button className="my-3" type="submit">
          Cargar
        </Button>
      </Form>
      <Peliculas arregloPeli={arregloPeli} borrarPeli={borrarPeli}></Peliculas>
    </>
  );
};

export default Formulario;
