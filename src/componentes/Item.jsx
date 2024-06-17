import '../css/estilo1.css'
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
                    <Button color="danger" size="">
                        AÑADIR AL CARRITO
                    </Button>
                </div>
            </div>
        </div>
    );
}
export default Item;