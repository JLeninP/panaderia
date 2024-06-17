import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function Items(){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">Pies y Pasteles</h1>
            <Item imagen={imagenes[30].img} nombre={imagenes[30].nombre} precio={imagenes[30].precio} descripcion={imagenes[30].descripcion}/>
            <Item imagen={imagenes[13].img} nombre={imagenes[13].nombre} precio={imagenes[13].precio} descripcion={imagenes[13].descripcion}/>
            <Item imagen={imagenes[31].img} nombre={imagenes[31].nombre} precio={imagenes[31].precio} descripcion={imagenes[31].descripcion}/>
            <Item imagen={imagenes[32].img} nombre={imagenes[32].nombre} precio={imagenes[32].precio} descripcion={imagenes[32].descripcion}/>
            <Item imagen={imagenes[14].img} nombre={imagenes[14].nombre} precio={imagenes[14].precio} descripcion={imagenes[14].descripcion}/>
        </div>
    );
}

export default Items;