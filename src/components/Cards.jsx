import React from 'react';

import Card from './Card'

function Cards(props) {

    return (
        props.products.length > 0
            ?

            props.products.map((product, index) =>
                <Card
                    key={index}
                    title={"iPhone " + product.iPhoneModel + " | " + product.color + " | " + product.storage}
                    image={product.image}
                    stock={product.stock}
                />
            )
            :
            <p>No se Encontraron Productos</p>
    )

}

export default Cards



