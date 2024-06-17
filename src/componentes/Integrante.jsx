import '../css/estilo1.css';
function Integrante(props){
    return(
        <div className="cajaIntegrante">
            <div className="cajaTarjetaImagen">
                <img src={props.imagen} alt={props.nombre} className="imagenIntegrante" />
            </div>
            <div className="cajaTarjetaTexto">
                <h1 className="nombreIntegrante">{props.nombre}</h1>
                <p className="descripcionIntegrante">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Integrante;