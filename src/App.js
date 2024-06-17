import './App.css';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Banner from './componentes/Banner.jsx';
import Inicio from './componentes/inicio.jsx';
import Panes from './componentes/Panes.jsx';
import Donas from './componentes/Donas.jsx';
import GalletasYPasteles from './componentes/GalletasYPasteles.jsx';
import PiesYQueques from './componentes/PiesYQueques.jsx';
import Pizzas from './componentes/Pizzas.jsx';
import Nosotros from './componentes/Nosotros.jsx';
import Contactos from './componentes/Contactos.jsx';
import PieDePagina from './componentes/PieDePagina.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import BarraDeMenu from './componentes/BarraDeMenu.jsx';

function App() {
  return (
    <div className='fondo'>
      <BrowserRouter>
        <Banner />
        <BarraDeMenu color="danger" expand="xl" container="xl" dark="true" full="true"/>
        <Routes>
          <Route path='/' element={<Inicio titulo="Productos"/>} />
          <Route path='/panes' element={<Panes titulo="Panes"/>} />
          <Route path='/donas' element={<Donas titulo="Donas"/>} />
          <Route path='/galletasYPasteles' element={<GalletasYPasteles titulo="Galletas y Pasteles"/>} />
          <Route path='/piesYQueques' element={<PiesYQueques titulo="Pies y Queques"/>} />
          <Route path='/pizzas' element={<Pizzas titulo="Pizzas"/>} />

          <Route path='/nosotros' element={<Nosotros titulo="Nosotros"/>} />
          <Route path='/contactos' element={<Contactos titulo="Contactanos"/>} />
        </Routes>
        <PieDePagina />
        {/* <Item /> */}
      </BrowserRouter>
    </div>
  );
}

export default App;
