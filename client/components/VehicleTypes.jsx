import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'
import {Link} from 'react-router-dom'
import vehicles from '../../data/vehicles.js'


const renderVehiclesNames = (vehicle) => {
  const names = vehicles[vehicle]
  return names.map((nameAndDescription, i)=> {
    return <li key={i}><Link to={"/vehicle/" + vehicle + "/" + nameAndDescription.name}>{nameAndDescription.name}</Link></li>
  })
}

export default function (props) {
  var vehicle = props.match.params.vehicle

  return (
    <div className="container">
      <h1> Choose the right {vehicle} for you! </h1>
      <ul>
        {renderVehiclesNames(vehicle)}
      </ul>
    </div>
  )
}
