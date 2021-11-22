import React from 'react'
import '../App.css';
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import Cards from './Cards'


function CardContainer(props) {
    const [keyword, setKeyword] = React.useState("");
    const [products, setProducts] = React.useState(props.products);

    return (
        <div className="container">
            <div className="row">
                <Cards
                    products={products}
                />

            </div>
        </div>
    )
}

export default CardContainer


