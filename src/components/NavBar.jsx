import React from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import ItemCounter from './ItemCounter'
import SearchBar from './SearchBar'

import {data} from '../JSON/FalseJson'

function NavBar() {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="">eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="">INICIO</Nav.Link>
                        <NavDropdown title="IOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">iPhone 12</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">iPhone 11</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">iPhone X</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">iPhone 8</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">iPhone 7</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ANDROID" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="#action/3.4">Samsung</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Xiaomi</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Google</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Huawei</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.4">Sony</NavDropdown.Item>
                        </NavDropdown>
                        <SearchBar
                        products={data}
                        />
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Contacto</Nav.Link>
                        <Nav.Link eventKey={2} href="">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

