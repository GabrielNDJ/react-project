import React, { useEffect, useState } from 'react'

const Inicio = () => {

    const [products, setProducts] = useState([]);


    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(json => setProducts(json))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            <div className="row">
                {products.map(product => (
                    <div className="col-md-3" key={product.id}>
                        <div className="card" style={{ width: '18rem' }}>
                            <img className="card-img-top" src={product.image} alt={product.title} />
                            <div className="card-body">
                                <h5 className="card-title">{product.title}</h5>
                                <p className="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Inicio