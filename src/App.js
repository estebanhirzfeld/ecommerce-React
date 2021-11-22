import {React, useEffect, useState} from 'react'
import NavBar from './components/NavBar'
import CardContainer from './components/CardContainer'

import ItemDetailContainer from './components/ItemDetailConteiner'


import { BrowserRouter, Route, Routes, Link } from 'react-router-dom'

import FalseFetch from './components/FalseFetch'

import { data } from './JSON/FalseJson'

function App() {
    const [data, setData] = useState([]);

    useEffect(() => {
        FalseFetch()
            .then(datos => setData(datos))
            .catch(err => console.log(err))
            .finally(() => console.log("llego esta data: " + data))
    },[]);                                                                  

    return (
        <BrowserRouter>
            <NavBar />
        <Routes>
            <Route path="/" element = {<CardContainer products={data} />}/>
            <Route path="/iPhoneModel/:nroDeModelo" element = {<CardContainer products={data} />}/>
            <Route path="/Item" element = {<ItemDetailContainer/>}/>
        </Routes> 
        </BrowserRouter>
    )
}

export default App