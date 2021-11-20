import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form  } from 'react-bootstrap';

import Card from './Card'

import { GrFormSubtract,GrFormTrash,GrFormAdd } from 'react-icons/gr';
import { HiOutlineShoppingCart } from 'react-icons/hi';


function ItemCounter() {
    return (
        <div className="container py-3">
            <div className="row d-flex justify-content-center">
                <button className="col-4 col-sm-4 col-md-4 col-lg-4 botonDecrementar rounded-border-left-20px btn-outline-primary"><span id="spanIncrementar"><GrFormSubtract/></span></button> 
                <button className="col-2 col-sm-2 col-md-2 col-lg-2 botonVaciar btn-outline-danger"><span id="spanVaciar"><GrFormTrash/></span></button> 
                <button className="col-4 col-sm-4 col-md-4 col-lg-4 botonIncrementar rounded-border-right-20px btn-outline-success"><span id="spanDecrementar"><GrFormAdd/></span></button> 
                <button className="col-10 col-sm-10 col-md-10 col-lg-10 mt-2 botonCarrito rounded-border-both-20px btn-outline-primary"><span id="spanCarrito"><HiOutlineShoppingCart/></span></button> 
            </div>
        </div>
    )
}



export default ItemCounter
