import React from 'react'
import vehicles from '../../data/vehicles'

export default class AddRetal extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      newRental: {}
    }
    this.submitRental = this.submitRental.bind(this)
    this.updateNewRetalDetails = this.updateNewRentalDetails.bind(this)
  }
  updateNewRentalDetails(e) {
    let newRental = this.state.newRental
    newRental[e.target.name] = e.target.value
    //do something
    this.setState({newRental: newRental})
    console.log(this.state);
  }
  submitRental(e) {
    e.preventDefault());
  }
  renderTypeSelect() {
    const renderTypeOptions = (vehicleType) => {
      return vehicles[vehicleType].map((typeOfVehicle, i) => {
        return <option key={i}>{typeOfVehicle.name}</option>
      })
    }
    if (this.state.newRental.vehicle) {
      return  <select name="Type" onChange={(e) => this.updateNewRentalDetails(e)}>
          <option selected disabled>Type</option>
          {renderTypeOptions(this.state.newRental.vehicle)}
        </select>
    }
  }
  render() {
    return (
      <form onSubmit={this.submitRental}>
        <select name="vehicle" onChange={(e) => this.updateNewRentalDetails(e)}>
          <option selected disabled>Type of vehicle</option>
          <option value="cars">Car</option>
          <option value="motorbikes">Motorbike</option>
          <option value="bikes">Bike</option>
        </select>
        {this.renderTypeSelect()}
        <input name="Name" placeholder="Name" type="text" onChange={(e) => this.updateNewRentalDetails(e)}/>
        <input name="Description" placeholder="Description" type="text" onChange={(e) => this.updateNewRentalDetails(e)}/>
        <input type="submit" />
        <p>{this.state.newRental.name}</p>
      </form>
    )
  }
}
