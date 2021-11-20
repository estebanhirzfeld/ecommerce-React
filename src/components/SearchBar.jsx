import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import { data } from '../JSON/FalseJson'
import Cards from './Cards'
import CardContainer from './CardContainer'


function SearchBar (props){
    const [keyword, setKeyword] = React.useState("");
    const [products, setProducts] = React.useState(props.products);


    function submitHandler(e) {
        e.preventDefault();
        console.log("Searching for: " + keyword)
        let filterProducts = props.products.filter(
            product => product.title.toLowerCase().includes(keyword.toLowerCase())
        );
        setProducts (filterProducts);
    }

        return (
            <div className="d-flex align-items-center ">
                <form
                    onSubmit={submitHandler}
                >
                    <label htmlFor="keyword">
                        Search
                        <input
                            id="keyword"
                            value={keyword}
                            placeholder="Search Keyword"
                            onChange={(e) => setKeyword(e.target.value)}
                        />
                    </label>
                    <button>Submit</button>
                </form>
                <Cards
                products={products}
                />
            </div>
        )
}

export default SearchBar

