import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form  } from 'react-bootstrap';

import Card from './Card'
import $ from "jquery";
import { GrFormSubtract,GrFormTrash,GrFormAdd } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';

function ItemCounter() {
    const [itemCount, setItemCount] = React.useState(1);

    const Incrementar = () =>{}
    const Decrementar = () =>{}
    const Vaciar = () =>{}
    const AgregarAlCarrito = () =>{}

    return (
        <div className="container py-3">
            <div className="row d-flex justify-content-center">
                <button onClick={Decrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar rounded-border-left-20px btn-outline-primary"><span id="spanDecrementar"><GrFormSubtract/></span></button> 
                <button onClick={Vaciar} className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger"><span id="spanVaciar"><GrFormTrash/></span></button> 
                <button onClick={Incrementar} className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar rounded-border-right-20px btn-outline-success"><span id="spanIncrementar"><GrFormAdd/></span></button> 
                <button onClick={AgregarAlCarrito} className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito rounded-border-both-20px btn-outline-primary"><span id="spanCarrito"><HiOutlineShoppingCart/></span></button> 
            </div>
        </div>
    )
}



export default ItemCounter
