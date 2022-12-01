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
                        <div class="card" style={{ width: '18rem' }}>
                            <img class="card-img-top" src={product.image} alt={product.title} />
                            <div class="card-body">
                                <h5 class="card-title">{product.title}</h5>
                                <p class="card-text">{product.description}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}


export default Inicio