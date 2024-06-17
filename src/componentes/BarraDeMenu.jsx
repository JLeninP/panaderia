import '../css/estilo1.css';
import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem,
    NavbarText,
  } from 'reactstrap';
  
  function BarraDeMenu(args) {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);
  
    return (
      <div className='barraMenu'>
        <Navbar {...args}>
          <Link className='logo' to="/">PANADERIA</Link>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
                <NavItem>
                <NavLink><Link className='menuLink' to="/">INICIO</Link></NavLink>
                </NavItem>
              <UncontrolledDropdown nav inNavbar>
                <DropdownToggle nav caret>
                  <Link className='menuLink'>PRODUCTOS</Link>
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem><Link className='menuDesplegable' to="/panes">PANES</Link></DropdownItem>
                  <DropdownItem><Link className='menuDesplegable' to="/donas">DONAS</Link></DropdownItem>
                  <DropdownItem><Link className='menuDesplegable' to="/galletasYPasteles">GALLETAS Y PASTELES</Link></DropdownItem>
                  <DropdownItem><Link className='menuDesplegable' to="/piesYQueques">PIES Y QUEQUES</Link></DropdownItem>
                  <DropdownItem><Link className='menuDesplegable' to="/pizzas">PIZZAS</Link></DropdownItem>
                  <DropdownItem divider />
                  {/* <DropdownItem>Reset</DropdownItem> */}
                </DropdownMenu>
              </UncontrolledDropdown>
              <NavItem>
                <NavLink><Link className='menuLink' to="/nosotros">NOSOTROS</Link></NavLink>
              </NavItem>
              <NavItem>
                <NavLink><Link className='menuLink' to="/contactos">CONTACTOS</Link></NavLink>
              </NavItem>
            </Nav>
            {/* <NavbarText>Simple Text</NavbarText> */}
          </Collapse>
        </Navbar>
      </div>
    );
  }
  
  export default BarraDeMenu;