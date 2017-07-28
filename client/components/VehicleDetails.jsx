import React from 'react'
import {Link} from 'react-router-dom'
import vehicles from "../../data/vehicles.js"

const renderDescription = (vehicle, name) => {

  return (
    <p> {
    vehicles[vehicle].find(function(elem) {
      return (elem.name === name)
    }).description
    }</p>
  )
}

export default function (props) {
console.log(props);
  var vehicle = props.match.params.vehicle
  var name = props.match.params.name

  return (
    <div className="container">
      <h1> this is {name} </h1>
      <div>
        {renderDescription(vehicle, name)}
        <Link to={"/list/" + vehicle}> back to list</Link>
      </div>
    </div>
  )
}
