import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router';
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import Cards from './Cards'


function CardContainer(props) {
    const {nroModeloiPhone} = useParams();   //Hook de Router Dom con el id de la linea 30 de App.js
    const [productos,setProductos] = useState(props.products);

    
    useEffect(() => {

        if(nroModeloiPhone != undefined){
            const filterByName = props.products.filter(function (product) {
                return product.iPhoneModel == nroModeloiPhone
            })
            setProductos(filterByName);
        } else{
            setProductos(props.products);

        }

    },);
    console.log(productos)


    

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


