import React from 'react'
import {Link} from 'react-router-dom'
import vehicles from "../../data/vehicles.js"

const renderDescription = (vehicle, name) => {
  let singleVehicle = vehicles[vehicle].find(function(elem) {
    return (elem.name === name)
  })
  return (
    <div>
      <p>{singleVehicle.description}</p>
      <img src={singleVehicle.image} />
    </div>

  )
}

export default function (props) {

  var vehicle = props.match.params.vehicle
  var name = props.match.params.name

  return (
    <div className="container">
      <h1> this is {name} {vehicle}</h1>
      <div>
        {renderDescription(vehicle, name)}
        <Link to={"/list/" + vehicle}> back to list</Link>
        <br />
       <Link to={"/order"}>book a car</Link>
      </div>
    </div>
  )
}
