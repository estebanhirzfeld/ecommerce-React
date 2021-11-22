import {React, useState} from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import Cards from './Cards'


function CardContainer(props) {

    return (
        <div className="container">
            <div className="row">
                <Cards
                    products={props.products}
                />

            </div>
        </div>
    )
}

export default CardContainer


