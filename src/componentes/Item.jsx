import '../css/estilo1.css'
import Boton from './Boton';
import { Button } from 'reactstrap';
function Item(props){
    return(
        <div className="cajaPrincipal">
            <div className="cajaImagen">
                <img src={props.imagen} alt={props.nombre} className="imagen" />
            </div>
            <div className="cajaTexto">
                <h1 className="nombre">{props.nombre}</h1>
                <h2 className="precio">{props.precio}</h2>
                <p className="descripcion">{props.descripcion}</p>
                <div className="boton">
                    <Boton nombre="AÑADIR AL CARRITO" />
                </div>
            </div>
        </div>
    );
}
export default Item;