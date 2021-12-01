import { React, useContext } from 'react'

import { CartContext } from './CartContext'


function Chart() {
    const test = useContext(CartContext);
    console.log(test.cartList)

    function QuitarItem(id){
        const quitarPorId = test.cartList.find(modelId => modelId.item === id) 

        console.log(test.cartList.indexOf(quitarPorId))
        test.cartList.splice(test.cartList.indexOf(quitarPorId),1)   // El Metodo splice me deja borrar el un objeto sabiendo su index en el array y tambien recibe el segundo parametro en este caso "1" para borrar solo ese onjeto
    }

    return (


        test.cartList.length > 0                     // Operador Ternario para saber si llegan los datos y que estos aparezcan o de lo contrario se dibuje un <p>
            ?
        
            test.cartList.map((item, index) =>
                <div>
                    <div className="container">
                        <div className="row d-flex justify-content-center align-items-center">
                            <div className="col-lg-3"><img className="col-lg-12" src={item.image} alt="" /></div>
                            <div className="col-lg-3"><p>Item: {item.name}</p></div>
                            <div className="col-lg-3"><p>Color: {item.color}</p></div>
                            <div className="col-lg-2"><p>Cant: {item.cantItem}</p></div>
                            <div className="col-lg-1"><button onClick={() => QuitarItem((item.item))}><span>Borrar Item</span></button></div>
                        </div>
                    </div>
                </div>
            )
            :
            <>
            <h1 className="text-center pt-3">Carrito</h1>
            <p className="text-center pt-3">Aun no se agregaron productos al carrito</p>          
            </>
    )

}

export default Chart
