import '../css/estilo1.css';
import Boton from './Boton';
import { Button } from 'reactstrap';
function Tarjeta(props){
    return(
        <div className="cajaTarjeta">
            <div className="cajaTarjetaImagen">
                <img src={props.imagen} alt={props.nombre} className="imagenTarjeta" />
            </div>
            <div className="cajaTarjetaTexto">
                <h3 className="nombreTarjeta">{props.nombre}</h3>
                <h4 className="precioTarjeta">{props.precio}</h4>
                {/* <p className="descripcion">{props.descripcion}</p> */}
                <div className="botonTarjeta">
                    <Boton nombre="COMPRAR" />
                </div>
            </div>
        </div>
    );
}

export default Tarjeta;