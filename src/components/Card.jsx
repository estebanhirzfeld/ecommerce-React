import React from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';

import ItemCounter from './ItemCounter'

let stock = 10;

function Card(imagen, nombre) {
    return (
        <div>
            <div className="mt-5 overflow-hidden">
                <img className="w-100 cardImage" src="https://m.media-amazon.com/images/I/61eDXs9QFNL._FMwebp__.jpg" alt="" />
            </div>
                <span>"iPhone 13 Pro | Grafito | 512GB"</span>
                <span>Stock: {stock}</span>
                <ItemCounter/>
        </div>
    )
}



export {stock}
export default Card
