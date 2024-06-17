import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function PiesYQueques(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <Item imagen={imagenes[29].img} nombre={imagenes[29].nombre} precio={imagenes[29].precio} descripcion={imagenes[29].descripcion}/>
            <Item imagen={imagenes[30].img} nombre={imagenes[30].nombre} precio={imagenes[30].precio} descripcion={imagenes[30].descripcion}/>
            <Item imagen={imagenes[31].img} nombre={imagenes[31].nombre} precio={imagenes[31].precio} descripcion={imagenes[31].descripcion}/>
            <Item imagen={imagenes[32].img} nombre={imagenes[32].nombre} precio={imagenes[32].precio} descripcion={imagenes[32].descripcion}/>
            <Item imagen={imagenes[33].img} nombre={imagenes[33].nombre} precio={imagenes[33].precio} descripcion={imagenes[33].descripcion}/>
            <Item imagen={imagenes[34].img} nombre={imagenes[34].nombre} precio={imagenes[34].precio} descripcion={imagenes[34].descripcion}/>
            <Item imagen={imagenes[35].img} nombre={imagenes[35].nombre} precio={imagenes[35].precio} descripcion={imagenes[35].descripcion}/>
        </div>
    );
}

export default PiesYQueques;