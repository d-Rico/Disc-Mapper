import React, { Component } from 'react'

class PairUpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }
  }

  // handleChange(event) {
  //   let value = event.target.value
  //   let name = event.target.name
  //   this.setState({ [name]: value })
  // }
  //
  // handleSubmit(event) {
  //   event.preventDefault()
  //   let formPayload = {
  //     rating: parseInt(this.state.rating),
  //     body: this.state.body,
  //     park_id: this.props.park.id,
  //     user_id: this.props.user.id
  //   }
  //   this.props.handleSubmit(formPayload)
  // }

  render() {
    return(
      <div>
        Hello from Pair Up Form Container
      </div>
    )
  }
}



export default PairUpFormContainer
