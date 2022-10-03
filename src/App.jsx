import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';
import Formulario from './components/Formulario';

function App() {
  return (
    <Container className="App">
      <h1 className='text-center my-3 '>React Movie</h1>
      <hr />
      <Formulario></Formulario>
    </Container>
  );
}

export default App;
