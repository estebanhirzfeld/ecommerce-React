import React from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl } from 'react-bootstrap';
import { Container, Row, Col, Form } from 'react-bootstrap';


import ItemCounter from './ItemCounter'


class Card extends React.Component {
    render() {
        return (
            <div className="col-6 col-sm-4 col-md-4 col-lg-3">
                <div className="overflow-hidden">
                    <img className="w-100 cardImage" src={this.props.image} alt="" />
                </div>
                    <span>{this.props.title}</span>
                    <span>Stock: {this.props.stock}</span>
                    <ItemCounter/>
            </div>
        )
    }
    
}



export default Card
