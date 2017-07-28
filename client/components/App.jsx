import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import Home from './Home'
import Vehicles from './Vehicles'
import VehicleTypes from './VehicleTypes'
import VehicleDetails from './VehicleDetails'
{/* import CarForm from './CarForm' */}

const App = () => {
  return (
    <div>
    <h1>Unicorn car rental!</h1>
        <Router>
          <div>
            <Route exact path = "/" component={Home} />
            <Route path = "/" component={Vehicles} />
            <Route path="/list/:vehicle" component={VehicleTypes} />
            <Route path="/vehicle/:vehicle/:name" component={VehicleDetails} />
            {/* <Route path="/order" component={CarForm} /> */}
          </div>

        </Router>
      </div>
  )
}

export default App
