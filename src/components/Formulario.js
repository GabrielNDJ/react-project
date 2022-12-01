import React, { useState } from 'react'

const Formulario = () => {

    const [datos, setDatos] = useState({
        nombre: '',
        apellido: '',
        email: '',
        telefono: ''
    })

    const [arrayUser, setArrayUser] = useState([])

    const handleInputChange = (event) => {
        console.log(event.target.value)
        setDatos({
            ...datos,
            [event.target.name]: event.target.value
        })

    }

    const enviarDatos = (event) => {
        event.preventDefault()
        setArrayUser([
            ...arrayUser,
            datos
        ])
        console.log(arrayUser)

    }

    return (
        <>
            <div className="container mt-5">
                <h1>Formulario para que lo contactemos:</h1>
                <form className="row" onSubmit={enviarDatos}>

                    <div className="col-8 mb-4">
                        <input
                            placeholder="Ingrese su nombre"
                            className="form-control"
                            type="text"
                            name="nombre"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-8 mb-4">
                        <input
                            placeholder="Ingrese su apellido"
                            className="form-control"
                            type="text"
                            name="apellido"
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-8 mb-4">
                        <input
                            placeholder='Ingrese su email'
                            className='form-control'
                            type='email'
                            name='email'
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="col-8 mb-4">
                        <input
                            placeholder='Ingrese su teléfono'
                            className='form-control'
                            type='number'
                            name='telefono'
                            onChange={handleInputChange}
                        />
                    </div>               



                    <div className="col-8">
                        <button className="btn btn-primary" type="submit">Enviar</button>
                    </div>

                </form>
            </div>

            {/*  renderizar los datos en la pagina */}
            <div className="container ">
                <h2>Datos de envio:</h2>
                <ul>
                    {
                        arrayUser.map((item, index) => (
                            <li key={index}>
                               Nombre: {item.nombre} - Apellido: {item.apellido} - Email: {item.email} - Telefono: {item.telefono}
                            </li>
                        ))
                    }
                </ul>
            </div>

        </>
    )
}

export default Formulario