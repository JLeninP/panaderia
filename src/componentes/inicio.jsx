import '../css/estilo1.css'
import imagenes from '../assets/imagenes'
import Item from './Item.jsx';
import Items from './Items.jsx';
import Tarjetas from './Tarjetas.jsx';

function Inicio(props){
    return(
        <div>
            <h1 className="titulo">{props.titulo}</h1>
            <Tarjetas />
            <Items />    
        </div>
    );
}

export default Inicio;