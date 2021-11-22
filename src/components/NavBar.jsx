import React from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'
import { BsCart3 } from 'react-icons/bs';


import SearchBar from './SearchBar'


function NavBar() {
    return (
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand  href="/">eCommerce</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/">INICIO</Nav.Link>
                        <NavDropdown title="IOS" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/iPhoneModel/13-Pro"> iPhone 13 Pro</NavDropdown.Item>
                            <NavDropdown.Item href="/iPhoneModel/13">     iPhone 13</NavDropdown.Item>
                            <NavDropdown.Item href="/iPhoneModel/12-Pro"> iPhone 12 Pro</NavDropdown.Item>
                            <NavDropdown.Item href="/iPhoneModel/12">     iPhone 12</NavDropdown.Item>
                        </NavDropdown>

                        <NavDropdown title="ANDROID" id="collasible-nav-dropdown">
                            <NavDropdown.Item href="/androidModel">Samsung</NavDropdown.Item>
                            <NavDropdown.Item href="/androidModel">Xiaomi</NavDropdown.Item>
                            <NavDropdown.Item href="/androidModel">Google</NavDropdown.Item>
                            <NavDropdown.Item href="/androidModel">Huawei</NavDropdown.Item>
                            <NavDropdown.Item href="/androidModel">Sony</NavDropdown.Item>
                        </NavDropdown>
                        <SearchBar/>
                    </Nav>
                    <Nav>
                        <Nav.Link href="">Log In</Nav.Link>
                        <Nav.Link href=""><BsCart3/></Nav.Link>
                        <Nav.Link eventKey={2} href="">
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar

