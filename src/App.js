import './App.css';
import NavComponents from './components/NavComponents';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Inicio from './components/Inicio';
import Nosotros from './components/Nosotros';
import Contacto from './components/Contacto';
import Formulario from './components/Formulario';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <BrowserRouter>
      <NavComponents />
        <Routes>
          <Route  path="/" element={<Inicio />} />
          <Route  path="/nosotros" element={<Nosotros />} />
          <Route  path="/formulario" element={<Formulario />} />
          <Route  path="/contacto" element={<Contacto />} />
        </Routes>
        <Footer/>
      </BrowserRouter>



    </>
  );
}

export default App;
