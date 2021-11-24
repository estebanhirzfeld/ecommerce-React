import React from 'react';

import Card from './Card'

//  Las Cards no son mas que un conjunto de Card individuales

function Cards(props) {

    return (
        props.products.length > 0                          // Operador Ternario para saber si llegan los datos y que estos aparezcan o de lo contrario se dibuje un <p>
            ?

            props.products.map((product, index) =>
                <Card
                    key={index}
                    title={"iPhone " + product.iPhoneModel + " | " + product.color + " | " + product.storage}
                    image={product.image}
                    stock={product.stock}
                    id={product.id}
                    iPhoneModel={product.iPhoneModel}
                />
            )
            :
            <p>No se Encontraron Productos</p>          //  Le da feedback al usuario para saber que esta pasando al momento de visualizar la web
    )

}

export default Cards



