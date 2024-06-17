import '../css/estilo1.css'
import imagenes from '../assets/imagenes'
import Tarjeta from "./Tarjeta";

function Tarjetas(){
    return(
        <div className="cajaPadreTarjetas">
            <Tarjeta imagen={imagenes[27].img} nombre={imagenes[27].nombre} precio={imagenes[27].precio} />
            <Tarjeta imagen={imagenes[20].img} nombre={imagenes[20].nombre} precio={imagenes[20].precio} />
            <Tarjeta imagen={imagenes[28].img} nombre={imagenes[28].nombre} precio={imagenes[28].precio} />
            <Tarjeta imagen={imagenes[37].img} nombre={imagenes[37].nombre} precio={imagenes[37].precio} />
            <Tarjeta imagen={imagenes[7].img} nombre={imagenes[7].nombre} precio={imagenes[7].precio} />
            <Tarjeta imagen={imagenes[25].img} nombre={imagenes[25].nombre} precio={imagenes[25].precio} />
            <Tarjeta imagen={imagenes[15].img} nombre={imagenes[15].nombre} precio={imagenes[15].precio} />
            <Tarjeta imagen={imagenes[1].img} nombre={imagenes[1].nombre} precio={imagenes[1].precio} />            
        </div>
    );
}

export default Tarjetas;