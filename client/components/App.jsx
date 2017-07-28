import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import CarForm from './CarForm'

const App = () => {
  return (
    <div>
    <h1>Unicorn car rental!</h1>
    <div>
      <Router>
         <Route exact path = "/" component={Home} />
         </Router>
     <CarForm />

         </div>
       </div>
  )
}

export default App
