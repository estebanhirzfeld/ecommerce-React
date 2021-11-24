import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router';

import '../App.css';

import Cards from './Cards'

//  Se dibujan los datos en CardConteiner por eso (se solicitan Cards)

function CardContainer(props) {
    const {nroModeloiPhone} = useParams("");   // Hook de Router Dom con el id de la linea 30 de App.js
    const [productos,setProductos] = useState(props.products);

    
    useEffect(() => {

        if(nroModeloiPhone !== undefined){
            const filterByName = props.products.filter(function (product) { //  Al utilizar el Hook de Router Dom, se necesita un if para verificar se ese "nroModeloiPhone" es undefined
                return product.iPhoneModel === nroModeloiPhone               // porque sino, no se dibujaria nada en el Home ni en ninguna ruta que sea diferente a undefined
                console.log(nroModeloiPhone)
            })
            setProductos(filterByName);
        } else{
            setProductos(props.products);                                    // si es undefined, la data viene sin filtro desde props

        }

    },[nroModeloiPhone, props.products]);


    

    return (
        <div className="container">
            <div className="row">
                <Cards
                    products={productos}
                />

            </div>
        </div>
    )
}

export default CardContainer


