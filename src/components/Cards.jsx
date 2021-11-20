import React from 'react';

import Card from './Card'

class Cards extends React.Component {
    render() {
        return (
            this.props.products.length > 0 
                ?

                this.props.products.map((product,index) =>
                <Card
                key={index}
                title={product.title}
                image={product.image}
                stock={product.stock}
                />
                )

                :
                <p>No se Encontraron Productos</p>        
        )
    }
}

export default Cards