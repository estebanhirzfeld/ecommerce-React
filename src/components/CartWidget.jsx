import React from 'react';
import jQuery from 'jquery';
import $ from "jquery";

let nroDeArticulos = 0;

function Carrito() {
    return (
        <div class="carritoIcono">
            <ion-icon  onClick={CarritoOnClick} name="cart-outline"></ion-icon>                        {/* Carrito Icono */}
            <div id="cartCounter"></div>
        </div>


    )
}

function CarritoOnClick() {
    nroDeArticulos++;
    $("#cartCounter").empty()
    $("#cartCounter").append(
        `${nroDeArticulos}`);
}


export default Carrito
