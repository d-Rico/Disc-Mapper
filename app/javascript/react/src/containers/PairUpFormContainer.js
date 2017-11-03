import React, { Component } from 'react'
import DateTime from 'react-datetime'

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

    var renderers = {
      renderDay: function( props, currentDate, selectedDate ){
        return <td {...props}>{ '0' + currentDate.date() }</td>;
      },
      renderMonth: function( props, month, year, selectedDate){
        return <td {...props}>{ month }</td>;
      },
      renderYear: function( props, year, selectedDate ){
        return <td {...props}>{ year % 100 }</td>;
      }
    }

    return(
      <div>
        Hello from Pair Up Form Container
        <form>
          <label>Pick a date and time to pair up
             <DateTime
              value={this.state.date_time}
              name="dateTime"
              placeholder="Select date and time"
              handleChange={this.handleChange}
              renderDay={ renderers.renderDay }
              renderMonth={ renderers.renderMonth }
              renderYear={ renderers.renderYear }
            />
          </label>

          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }
}



export default PairUpFormContainer
