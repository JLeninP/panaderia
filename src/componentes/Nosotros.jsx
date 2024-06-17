import '../css/estilo1.css'
import img1 from '../assets/img/Integrantes/img1.jpg'
import img2 from '../assets/img/Integrantes/img2.jpg'
import img3 from '../assets/img/Integrantes/img3.jpg'
import img4 from '../assets/img/Integrantes/img_4.jpg'
import img5 from '../assets/img/Integrantes/img5.jpg'
import Integrante from './Integrante';
import Valores from './Valores'
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
            <h2 className='titulo'>Nuestros Integrantes</h2>
            <div className="cajaPrincipal">
                <Integrante imagen={img1} nombre="Maria" descripcion="Maestra Panadera"></Integrante>
                <Integrante imagen={img2} nombre="Juan" descripcion="Gerente Regional"></Integrante>
                <Integrante imagen={img3} nombre="Rosa" descripcion="Ayudante de panadería y pastelería"></Integrante>
                <Integrante imagen={img4} nombre="Ana" descripcion="Maestra Pastelera"></Integrante>
                <Integrante imagen={img5} nombre="Alicia" descripcion="Encargada de Ventas"></Integrante>
            </div>
            <h2 className='titulo'>Nuestros Valores</h2>
            <div className="cajaPrincipalValores">
                <Valores titulo="COMPROMISO" descripcion="Estamos comprometidos con nuestros clientes en ofrecerles siempre lo mejor, tanto en servicios como en nuestros productos."></Valores>
                <Valores titulo="RESPONSABILIDAD" descripcion="Cumplimos siempre las más altas normas de higiene/sanidad, desde nuestro personal, hasta nuestras instalaciones."></Valores>
                <Valores titulo="RESPETO" descripcion="El respeto es una de nuestras virtudes, inculcamos este valor en nuestro personal, y lo transmitimos a nuestros clientes."></Valores>
                <Valores titulo="PUNTUALIDAD" descripcion="Fridolin se caracteriza por su rápido servicio, y el cumplir siempre con los pedidos de nuestra querida clientela."></Valores>
                <Valores titulo="INTEGRIDAD" descripcion="El ser una empresa íntegra en todo sentido, es algo muy importante para todo el equipo que conforma Fridolin."></Valores>
                <Valores titulo="SERVICIO" descripcion="Creemos que nuestros servicios son un referente de la buena atención, nuestro personal siempre te brindará una excelente experiencia."></Valores>
            </div>
        </div>
    );
}

export default Nosotros;