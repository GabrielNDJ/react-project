import React from 'react'
import './Footer.css'

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-dark navbar-center">
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarFooter">
                        <a href='https://www.gabrielnietodejesus.com.ar/' target="blank">
                            <img
                                src="https://i.postimg.cc/QtwTwnBp/sitio-web.png"
                                className="d-inline-block align-top social"
                                alt="Logo sitio web"
                                width="30px"
                                height="30px"

                            />
                        </a>
                        <ul className="navbar-nav navbar-center me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link" aria-current="page" href="#">Inicio</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/nosotros' className="nav-link" aria-current="page" href="#">Nosotros</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/formulario' className="nav-link" href="#">Formulario</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/contacto' className="nav-link ">Contacto</Link>
                            </li>
                        </ul>
                        <a href='https://github.com/GabrielNDJ' target="blank">
                        <img
                            src="https://i.postimg.cc/wxDhswKr/github.png"
                            className="d-inline-block align-top"
                            alt="Logo github"
                            width="30px"
                            height="30px"

                        />
                        </a>
                    </div>                    
                </div>
            </nav>
            <h6 id='desarrollo'> Desarrollado por: G.N.J.</h6>
        </div>
    )
}

export default Footer