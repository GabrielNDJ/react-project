import React from 'react'

import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
                    <Link to="/" className="navbar-brand" href="#">Inicio</Link>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to='/nosotros' className="nav-link active" aria-current="page" href="#">Nosotros</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/formulario' className="nav-link" href="#">Formulario</Link>
                        </li>
                        <li className="nav-item">
                            <Link to='/contacto' className="nav-link ">Contacto</Link>
                        </li>
                    </ul>

                </div>
            </div>
        </nav>
        </div>
  )
}

export default Footer