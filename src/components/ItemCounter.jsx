import React from 'react'

import '../App.css';

//  Eliminado GrFormTrash
import { GrFormSubtract, GrFormAdd } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function ItemCounter() {
    const [itemCount, setItemCount] = React.useState(0);        // Estado inicial del Contador
    let stock =10;
    const Incrementar = () => {                                 // si el boton se pulsa, Incrementa el State del Contador
        if(stock > itemCount){
            setItemCount(itemCount + 1)
        }
    }
    const Decrementar = () => {                                 // si el boton se pulsa, Decrementa el State del Contador
        if(itemCount > 0 ){
            setItemCount(itemCount - 1)
        }
    }
    const Vaciar = () => {setItemCount(0)}                      // si el boton se pulsa, vuelve a 0 el State del Contador

    const AgregarAlCarrito = () => {                            //  Con un Switch muestro un Mje al usuario para hacerle saber cuantos items agrego al carrito           
        switch(itemCount) {                          
            case 0:
                alert("Seleccione la Cantidad de Productos que Quiere Agregar al Carrito")
                break;
            case 1:
                alert("Se Agrego " + itemCount + " Producto al Carrito")
                break;
            default:
                alert("Se Agregaron " + itemCount + " Productos al Carrito")
                break;
        }
    }

    return (
        <div className="container py-3">
            <div className="row d-flex justify-content-center">
                <button onClick={Decrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar btn-outline-primary">
                    <span><GrFormSubtract /></span>
                </button>

                <button onClick={Vaciar} className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger">
                    <span>{itemCount}</span>
                </button>

                <button onClick={Incrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar btn-outline-success">
                    <span id="spanIncrementar"><GrFormAdd /></span>
                </button>

                <button onClick={AgregarAlCarrito} className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito btn-outline-primary">
                    <span><HiOutlineShoppingCart /></span>
                </button>
            </div>
        </div>
    )
}



export default ItemCounter
