import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import Cards from './Cards'

import {data} from '../JSON/FalseJson'
import ItemCounter from './ItemCounter';


function ItemDetailContainer(props) {
    const [keyword, setKeyword] = React.useState("");

    return (
        <div className="container">
            <div className="row -d flex align-items-center text-center">
                <img className="Producto col-12 col-sm-12 col-md-6 col-lg-6" src={data[1].image} alt="" />
                <div className="Producto col-12 col-sm-12 col-md-6 col-lg-6">
                    <h2 className="my-5" >{"iPhone " + data[1].iPhoneModel + " | " + data[1].color + " | " + data[1].storage}</h2>
                    <p  className="my-5" >
                    El Apple iPhone 13 Pro llega manteniendo el diseño de su predecesor. Con una pantalla OLED de 6.1 pulgadas con tasa de refresco variable de hasta 120Hz, el iPhone 13 Pro cuenta con el procesador A15 Bionic con opciones de 128GB, 256GB, 512GB, y 1TB.
                    </p>
                    <ItemCounter></ItemCounter>
                </div>
            </div>
        </div>
    )
}

export default ItemDetailContainer


