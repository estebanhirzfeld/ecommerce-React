import React from 'react'
import NavBar from './components/NavBar'
import CardContainer from './components/CardContainer'

import {data} from './JSON/FalseJson'

function App() {
  return (
    <div>
      <NavBar/>
      <CardContainer
      products={data}/>
    </div>
  )
}

export default App