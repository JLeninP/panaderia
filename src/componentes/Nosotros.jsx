import '../css/estilo1.css'
import img1 from '../assets/img/Integrantes/img1.jpg'
import img2 from '../assets/img/Integrantes/img2.jpg'
import img3 from '../assets/img/Integrantes/img3.jpg'
import img4 from '../assets/img/Integrantes/img_4.jpg'
import img5 from '../assets/img/Integrantes/img5.jpg'
import Integrante from './Integrante';

function Nosotros(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <div className="cajaPrincipal">
                <div className="cajaTexto">
                    <p className="descripcion">
                    Nuestra deliciosa historia nace el año 1975 en lo que solía ser el pueblo pequeño de Santa Cruz, Bolivia. Con mucho cariño y buen gusto, Maria y Christian Jessen, fusionaron los gustos cruceños con los de su hogar, Austria.
                    Valorando la tradición y el sabor del arte de la pastelería, Fridolin se convirtió en la cadena pastelera más grande de nuestro país. Ahora Fridolin sigue enamorando a la ciudad con un sinfín de variedades de tortas, postres, y saladitos bolivianos
                    </p>
                </div>
            </div>
            <div className="cajaPrincipal">
                <Integrante imagen={img1} nombre="Maria" descripcion="Maestra Panadera"></Integrante>
                <Integrante imagen={img2} nombre="Juan" descripcion="Gerente Regional"></Integrante>
                <Integrante imagen={img3} nombre="Rosa" descripcion="Ayudante de panadería y pastelería"></Integrante>
                <Integrante imagen={img4} nombre="Ana" descripcion="Maestra Pastelera"></Integrante>
                <Integrante imagen={img5} nombre="Alicia" descripcion="Encargada de Ventas"></Integrante>
            </div>
        </div>
    );
}

export default Nosotros;