import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';

import Card from './Card'

// import URLJSON from "../JSON/Productos.JSON";



function GridContainer() {
    return (
        <div className="container">
            <div className="row">
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
                <div className="col-6 col-sm-4 col-md-4 col-lg-3"> <Card/> </div>
            </div>
        </div>
    )
}

// function GetProducts(){
//     $.getJSON(URLJSON, function(respuesta, estado){
//         if(estado == "success"){
//             let productos = respuesta;
//             for(const producto of productos){
//                 {Card(nombre = producto.nombre, imagen = producto.imagen )}
//             }
//         }
//     })
// }

export default GridContainer
