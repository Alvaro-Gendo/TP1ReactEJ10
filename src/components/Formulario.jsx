import { useEffect, useState } from "react";
import { Button, Form, Card } from "react-bootstrap";
import Peliculas from "./Peliculas"


const Formulario = () => {
    const [nombre, setNombre] = useState("");
    const [descripcion, setDescripcion] = useState("");


    const peliculaLS = JSON.parse(localStorage.getItem("arregloPeliculas")) || [];
    const [pelicula, setPelicula] = useState("");
    const [arregloPeli, setArregloPeli] = useState(peliculaLS);

    useEffect(()=>{
        localStorage.setItem("arregloPeliculas", JSON.stringify(arregloPeli))
    },[arregloPeli]);

    const handleSubmit = (e) =>{
        e.preventDefault()
        setArregloPeli([...arregloPeli, pelicula])
        setPelicula("")
    }

    const borrarPeli = (nombre) =>{
        let modPeli = arregloPeli.filter((item) => (item !== nombre));
        setArregloPeli(modPeli)
    }

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
          <Form.Select>
            <option>Seleccione una opción</option>
            <option value="1">Acción</option>
            <option value="2">Terror</option>
            <option value="3">Comedia</option>
          </Form.Select>
        </Form.Group>
        <Button className="my-3" type="submit">Cargar</Button>
      </Form>
      <Card className="mt-3">
            <Peliculas arregloPeli={arregloPeli} borrarPeli={borrarPeli}></Peliculas>
      </Card>
    </>
  );
};

export default Formulario;
