import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';
import $ from 'jquery';

import Card from './Card'
import {stock} from './Card'

let carritoValue = 0;


function ItemCounter() {
    return (
        <div className="container pt-3">
            <div className="row d-flex justify-content-center">
                <button onClick={Decrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar rounded-border-left-20px btn-outline-primary"><span id="spanIncrementar"><ion-icon name="remove-outline"></ion-icon></span></button> 
                <button onClick={Vaciar} className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger"><span id="spanVaciar"> <ion-icon name="trash-outline"></ion-icon></span></button> 
                <button onClick={Incrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar rounded-border-right-20px btn-outline-success"><span id="spanDecrementar"> <ion-icon name="add-outline"></ion-icon></span></button> 
                <button onClick={Carrito} className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito rounded-border-both-20px btn-outline-primary"><span id="spanCarrito"><ion-icon name="cart-outline"></ion-icon></span></button> 
            </div>
        </div>
    )
}

function Incrementar(){
    if (carritoValue <= stock){
        $("#spanVaciar").text(carritoValue++)
    }
}
function Vaciar(){
    carritoValue = 0
    $("#spanVaciar").text(0)
}
function Decrementar(){
    if (carritoValue > 0){
        $("#spanVaciar").text(carritoValue--)
    }
}
function Carrito(){
    console.log(carritoValue)
    $("#cartCounter").empty()
    $("#cartCounter").append(
        `${carritoValue}`);
}

export {carritoValue}
export default ItemCounter
