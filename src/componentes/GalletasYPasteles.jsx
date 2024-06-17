import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function GalletasYPasteles(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <Item imagen={imagenes[5].img} nombre={imagenes[5].nombre} precio={imagenes[5].precio} descripcion={imagenes[5].descripcion}/>
            <Item imagen={imagenes[6].img} nombre={imagenes[6].nombre} precio={imagenes[6].precio} descripcion={imagenes[6].descripcion}/>
            <Item imagen={imagenes[7].img} nombre={imagenes[7].nombre} precio={imagenes[7].precio} descripcion={imagenes[7].descripcion}/>
            <Item imagen={imagenes[8].img} nombre={imagenes[8].nombre} precio={imagenes[8].precio} descripcion={imagenes[8].descripcion}/>
            <Item imagen={imagenes[9].img} nombre={imagenes[9].nombre} precio={imagenes[9].precio} descripcion={imagenes[9].descripcion}/>
            <Item imagen={imagenes[10].img} nombre={imagenes[10].nombre} precio={imagenes[10].precio} descripcion={imagenes[10].descripcion}/>
            <Item imagen={imagenes[11].img} nombre={imagenes[11].nombre} precio={imagenes[11].precio} descripcion={imagenes[11].descripcion}/>
            <Item imagen={imagenes[12].img} nombre={imagenes[12].nombre} precio={imagenes[12].precio} descripcion={imagenes[12].descripcion}/>
            <Item imagen={imagenes[13].img} nombre={imagenes[13].nombre} precio={imagenes[13].precio} descripcion={imagenes[13].descripcion}/>
            <Item imagen={imagenes[14].img} nombre={imagenes[14].nombre} precio={imagenes[14].precio} descripcion={imagenes[14].descripcion}/>
            <Item imagen={imagenes[15].img} nombre={imagenes[15].nombre} precio={imagenes[15].precio} descripcion={imagenes[15].descripcion}/>
        </div>
    );
}

export default GalletasYPasteles;