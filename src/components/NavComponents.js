import React from 'react'
import './NavComponents.css'


import { Link } from "react-router-dom";
const NavComponents = () => {
    return (
        <nav className="navbar navbar-center navbar-expand-lg bg-primary  ">
            <div className="container-fluid" >
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                
               
                <div className="collapse navbar-collapse" id="navegador"> 
                <img
                                src="https://i.postimg.cc/TYby3tb7/carrito-de-compras-1.pngg"                                
                                className="d-inline-block align-top"
                                alt="Logo empresa"
                                id='logo'
                            />     
                              
                    <ul className="navbar-nav  me-auto  mb-4 mb-lg-0" id='navli'>
                        <li className="nav-item">
                            <Link to='/' className="nav-link" aria-current="page" href="#">Inicio</Link>
                        </li>
                        <li className="nav-item" id="entrada">
                            <Link to='/nosotros' className="nav-link" aria-current="page" href="#">Nosotros</Link>
                        </li>
                        <li className="nav-item" id="entrada">
                            <Link to='/formulario' className="nav-link" href="#">Formulario</Link>
                        </li>
                        <li className="nav-item" id="entrada">
                            <Link to='/contacto' className="nav-link ">Contacto</Link>
                        </li>
                    </ul>
                    <img
                                src="https://i.postimg.cc/TYby3tb7/carrito-de-compras-1.pngg"                                
                                className="d-inline-block align-top"
                                alt="Logo empresa"
                                id='logo'
                            />  
                </div>
            </div>
        </nav>
    )
}

export default NavComponents