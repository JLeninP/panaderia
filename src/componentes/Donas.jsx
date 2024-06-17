import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function Donas(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <Item imagen={imagenes[0].img} nombre={imagenes[0].nombre} precio={imagenes[0].precio} descripcion={imagenes[0].descripcion}/>
            <Item imagen={imagenes[1].img} nombre={imagenes[1].nombre} precio={imagenes[1].precio} descripcion={imagenes[1].descripcion}/>
            <Item imagen={imagenes[2].img} nombre={imagenes[2].nombre} precio={imagenes[2].precio} descripcion={imagenes[2].descripcion}/>
            <Item imagen={imagenes[3].img} nombre={imagenes[3].nombre} precio={imagenes[3].precio} descripcion={imagenes[3].descripcion}/>
            <Item imagen={imagenes[4].img} nombre={imagenes[4].nombre} precio={imagenes[4].precio} descripcion={imagenes[4].descripcion}/>
        </div>
    );
}

export default Donas;