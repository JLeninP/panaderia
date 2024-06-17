import '../css/estilo1.css';
import imagenes from '../assets/imagenes';
import Item from "./Item";

function Panes(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <Item imagen={imagenes[16].img} nombre={imagenes[16].nombre} precio={imagenes[16].precio} descripcion={imagenes[16].descripcion}/>
            <Item imagen={imagenes[17].img} nombre={imagenes[17].nombre} precio={imagenes[17].precio} descripcion={imagenes[17].descripcion}/>
            <Item imagen={imagenes[18].img} nombre={imagenes[18].nombre} precio={imagenes[18].precio} descripcion={imagenes[18].descripcion}/>
            <Item imagen={imagenes[19].img} nombre={imagenes[19].nombre} precio={imagenes[19].precio} descripcion={imagenes[19].descripcion}/>
            <Item imagen={imagenes[20].img} nombre={imagenes[20].nombre} precio={imagenes[20].precio} descripcion={imagenes[20].descripcion}/>
            <Item imagen={imagenes[21].img} nombre={imagenes[21].nombre} precio={imagenes[21].precio} descripcion={imagenes[21].descripcion}/>
            <Item imagen={imagenes[22].img} nombre={imagenes[22].nombre} precio={imagenes[22].precio} descripcion={imagenes[22].descripcion}/>
            <Item imagen={imagenes[23].img} nombre={imagenes[23].nombre} precio={imagenes[23].precio} descripcion={imagenes[23].descripcion}/>
            <Item imagen={imagenes[24].img} nombre={imagenes[24].nombre} precio={imagenes[24].precio} descripcion={imagenes[24].descripcion}/>
            <Item imagen={imagenes[25].img} nombre={imagenes[25].nombre} precio={imagenes[25].precio} descripcion={imagenes[25].descripcion}/>
            <Item imagen={imagenes[26].img} nombre={imagenes[26].nombre} precio={imagenes[26].precio} descripcion={imagenes[26].descripcion}/>
            <Item imagen={imagenes[27].img} nombre={imagenes[27].nombre} precio={imagenes[27].precio} descripcion={imagenes[27].descripcion}/>
            <Item imagen={imagenes[28].img} nombre={imagenes[28].nombre} precio={imagenes[28].precio} descripcion={imagenes[28].descripcion}/>    
        </div>
    );
}

export default Panes;