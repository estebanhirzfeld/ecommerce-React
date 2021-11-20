import React, { Component } from 'react'
import { Nav, Navbar, NavDropdown, MenuItem, Tabs, ButtonToolbar, Button, Table, ButtonGroup, Grid, Panel, FormGroup, FormControl, Container, Row, Col, Form } from 'react-bootstrap';

import { data } from '../JSON/FalseJson'
import Cards from './Cards'
import CardContainer from './CardContainer'


class SearchBar extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            keyword: "",
            products: this.props.products,
        }
        this.submitHandler = this.submitHandler.bind(this);
    }

    submitHandler(e) {
        e.preventDefault();
        console.log("Searching for: " + this.state.keyword)
        let filterProducts = this.props.products.filter(
            product => product.title.toLowerCase().includes(this.state.keyword.toLowerCase())
        );
        this.setState({products: filterProducts});
    }

    render() {
        return (
            <div className="d-flex align-items-center ">
                <form
                    onSubmit={this.submitHandler}
                >
                    <label htmlFor="keyword">
                        Search
                        <input
                            id="keyword"
                            value={this.state.keyword}
                            placeholder="Search Keyword"
                            onChange={(e) => this.setState({keyword: e.target.value})}
                        />
                    </label>
                    <button>Submit</button>
                </form>
                <Cards
                products={this.state.products}
                />
            </div>
        )
    }
}


export default SearchBar


// function SearchBar(props){
//     const [keyword, setKeyword] = React.useState("");
//     const [products, setProducts] = React.useState(props.products);


//     function submitHandler(e) {
//         e.preventDefault();
//         console.log("Searching for ", keyword,"...");
//         let filterProducts = props.products.filter(
//             product => product.title.toLowerCase().includes(keyword.toLowerCase())
//         );
//         setProducts(filterProducts);
//     }
//     // function submitHandler(e) {
//     //     console.log("Search for: " + keyword);
//     //     let filterProducts = props.products.filter(
//     //         product => product.title.toLowerCase().includes(keyword.toLowerCase())
//     //     );
//     //     this.setState({ products: filterProducts });
//     // }

//         return (
//             <div className="d-flex align-items-center ">
//                 <form
//                     onSubmit={submitHandler}
//                 >
//                     <label htmlFor="keyword">
//                         Search
//                         <input
//                             id="keyword"
//                             value={keyword}
//                             placeholder="Search Keyword"
//                             onChange={(e) => setKeyword(e.target.value)}
//                         />
//                     </label>
//                     <button>Submit</button>
//                 </form>
//                     <Card
//                         image={image}
//                         title={title}
//                         stock={stock}
//                     />
//             </div>


//         )
// }

// export default SearchBar


// // {
// //     this.state.products.map((product, index) =>
// //         <Card
// //             key={index}
// //             image={product.image}
// //             title={product.title}
// //             stock={product.stock}
// //         />
// //     )
// // }