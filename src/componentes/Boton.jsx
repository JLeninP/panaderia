import '../css/estilo1.css'
import { Button } from "reactstrap";

function Boton(props){
    return(
        <div>
            <Button color="danger" size="">
                {props.nombre}
            </Button>
        </div>
    );
}
export default Boton;