import React from 'react'
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import './contacto.css'



const Contacto = () => {
    return (
        <CardGroup>
        <Card>
          <Card.Img className='tarjeta' variant="top" src="https://i.postimg.cc/fLKKnBKy/egipto.jpg" />
          <Card.Body>
            <Card.Title>Sucursal Egipto</Card.Title>
            <Card.Text>
              Nuestra sucursal en Egipto se encuentra en la ciudad de El Cairo, en la calle farahon 777.
              Encuentranos cerca de Cleopatra.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Telefono: 532252562222</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className='tarjeta' variant="top" src="https://i.postimg.cc/hP7D05CB/bahamas.jpg" />
          <Card.Body>
            <Card.Title>Sucursal bahamas</Card.Title>
            <Card.Text>
              Nuestra sucursal bahamas se encuentra en la ciudad de Nassau, en la calle 10 de Agosto 123.
              Encuentranos cerca de la playa.{' '}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Telefono: 111531666</small>
          </Card.Footer>
        </Card>
        <Card>
          <Card.Img className='tarjeta' variant="top" src="https://i.postimg.cc/jSY63p6K/purgatorio.jpg/100px160" />
          <Card.Body>
            <Card.Title>Sucursal Purgatorio</Card.Title>
            <Card.Text>
              Nuestra sucursal en Purgatorio se encuentra en la ciudad de Purgatorio, en la calle 666.
              Encuentranos cerca de la puerta del infierno.
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">Telefono: 6660000666</small>
          </Card.Footer>
        </Card>
      </CardGroup>
    )
}

export default Contacto