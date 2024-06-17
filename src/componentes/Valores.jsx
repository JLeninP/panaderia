import '../css/estilo1.css'

function Valores(props){
    return(
        <div className="cajaValor">
            <div className="cajaValorTexto">
                <h3 className="nombreValor">{props.titulo}</h3>
                {/* <h4 className="precioTarjeta">{props.precio}</h4> */}
                <p className="descripcionValor">{props.descripcion}</p>
            </div>
        </div>
    );
}

export default Valores;