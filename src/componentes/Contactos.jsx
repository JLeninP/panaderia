import '../css/estilo1.css'
import map from '../assets/img/Integrantes/map.png'
import { Form, FormGroup, Label, Input, FormText, Button } from 'reactstrap';
function Contactos(props){
    return(
        <div className="cajaPadre">
            <h1 className="titulo">{props.titulo}</h1>
            <div className="cajaMap">
                <div className="cajaImagenMap">
                    <img src={map} alt="" className='imagenMap'/>
                </div>
                <div className="cajaTexto">

                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">
                            Email
                            </Label>
                            <Input
                            id="exampleEmail"
                            name="email"
                            placeholder="name@example.com"
                            type="email"
                            />
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">
                            Nombre
                            </Label>
                            <Input
                            id="examplePassword"
                            name="password"
                            placeholder="Ana Palacios"
                            type="password"
                            />
                        </FormGroup>
                        
                        <FormGroup>
                            <Label for="exampleText">
                            Mensaje
                            </Label>
                            <Input
                            id="exampleText"
                            name="text"
                            type="textarea"
                            />
                        </FormGroup>
                        {/* <FormGroup>
                            <Label for="exampleFile">
                            File
                            </Label>
                            <Input
                            id="exampleFile"
                            name="file"
                            type="file"
                            />
                            <FormText>
                            This is some placeholder block-level help text for the above input. It‘s a bit lighter and easily wraps to a new line.
                            </FormText>
                        </FormGroup> */}
                        
                        <FormGroup check>
                            <Input type="checkbox" />
                            {' '}
                            <Label check>
                            Enviarme sugerencias a mi correo.
                            </Label>
                        </FormGroup>
                        <Button>
                            Enviar
                        </Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}
export default Contactos;