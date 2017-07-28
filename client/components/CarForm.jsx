import React from 'react'

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
  }
  submitRental(e) {
    e.preventDefault()
    console.log({e});
    console.log("the cat is", this.state.newRental);
  }
  render() {
    return (
      <form onSubmit={this.submitRental}>
        <select name="Vehicle" onChange={(e) => this.updateNewRentalDetails(e)}>
          <option selected disabled>Type of vehicle</option>
          <option value="Electric">Car</option>
          <option value="Petrol">Motorbike</option>
          <option value="Hybrid">Bike</option>
        </select>
        <input name="Car" placeholder="Car" type="text" onChange={(e) => this.updateNewRentalDetails(e)}/>
        <input name="Description" placeholder="Description" type="text" onChange={(e) => this.updateNewRentalDetails(e)}/>
        <input name="Colour" placeholder="Colour" type="text" onChange={(e) => this.updateNewRentalDetails(e)}/>
        <select name="Type" onChange={(e) => this.updateNewRentalDetails(e)}>
          <option selected disabled>Type of Car</option>
          <option value="Electric">Electric</option>
          <option value="Petrol">Petrol</option>
          <option value="Hybrid">Petrol</option>
        </select>
        <input type="submit" />
        <p>{this.state.newRental.name}</p>
      </form>
    )
  }
}
