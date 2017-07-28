import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import vehicles from '../../data/vehicles.js'


const renderVehicles = (vehicles) => {
  return Object.keys(vehicles).map((vehicle, key) => {
    return <li key={key}><Link to={"/list/" + vehicle}>{vehicle}</Link></li>
  })
}

export default function (props) {


  return (
    <div className="nav container">
      <h1> List of unicorn vehicles </h1>
      <ul>
        {renderVehicles(vehicles)}
      </ul>
    </div>
  )
}
