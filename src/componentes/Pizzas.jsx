import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function Pizzas(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <Item imagen={imagenes[36].img} nombre={imagenes[36].nombre} precio={imagenes[36].precio} descripcion={imagenes[36].descripcion}/>
            <Item imagen={imagenes[37].img} nombre={imagenes[37].nombre} precio={imagenes[37].precio} descripcion={imagenes[37].descripcion}/>
            <Item imagen={imagenes[38].img} nombre={imagenes[38].nombre} precio={imagenes[38].precio} descripcion={imagenes[38].descripcion}/>
            <Item imagen={imagenes[39].img} nombre={imagenes[39].nombre} precio={imagenes[39].precio} descripcion={imagenes[39].descripcion}/>
            <Item imagen={imagenes[40].img} nombre={imagenes[40].nombre} precio={imagenes[40].precio} descripcion={imagenes[40].descripcion}/>
            <Item imagen={imagenes[41].img} nombre={imagenes[41].nombre} precio={imagenes[41].precio} descripcion={imagenes[41].descripcion}/>
        </div>
    );
}

export default Pizzas;