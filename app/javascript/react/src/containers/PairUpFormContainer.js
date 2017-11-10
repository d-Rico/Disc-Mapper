import React, { Component } from 'react'
import DateTime from 'react-datetime'
import PairUpTile from '../components/PairUpTile'

class PairUpFormContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dateTime: new Date(),
      events: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleEventSubmit = this.handleEventSubmit.bind(this)
  }

  handleChange(event) {
    let value = event._d
    this.setState({ dateTime: value })
    console.log(this.state.dateTime)
  }

  handleEventSubmit(event) {
    event.preventDefault()
    let formPayload = {
      name: "Pair-Up",
      date_time: this.state.dateTime,
      description: "Pair-Up",
      course_id: this.props.course.id
    }
    this.props.handleEventSubmit(formPayload)
  }


  componentDidMount() {
    fetch("../api/v1/events.json", {
      headers: { "Content-Type": "application/json" },
      credentials: "same-origin"
    })
      .then(response => {
        if (response.ok) {
          return response;
        } else {
          let errorMessage = `${response.status} (${response.statusText})`,
          error = new Error(errorMessage);
          throw(error);
        }
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ events: json });
      });
  }

  render() {
    var renderers = {
      renderDay: function( props, currentDate, selectedDate ){
        return <td {...props}>{ currentDate.date() }</td>;
      },
      renderMonth: function( props, month, year, selectedDate){
        return <td {...props}>{ month }</td>;
      },
      renderYear: function( props, year, selectedDate ){
        return <td {...props}>{ year % 100 }</td>;
      }
    }

    let events = this.state.events.map( event => {

      return(
        <PairUpTile
          key={event.id}
          id={event.id}
          time={event.date_time}
          attendees={event.users}
        />
      )
    })

    return(
      <div className="pairup-below-button">
        <div className="translucent-form-overlay">
          <form>
            <div className="dtheadline">Pick a date and time to pair up</div>
            <div className="dtdiv">
              <label>
                <DateTime
                 value={this.state.date_time}
                 name="dateTime"
                 placeholder="Select date and time"
                 onChange={this.handleChange}
                 renderDay={ renderers.renderDay }
                 renderMonth={ renderers.renderMonth }
                 renderYear={ renderers.renderYear }
               />
              </label>
            </div>
            <button type="button" value='Submit' className="primary button expanded search-button" onClick={this.handleEventSubmit}>
                Schedule Pair-Up
            </button>
          </form>
        </div>
        <div className="events">
          <h3 className="pairup-headline">
            Upcoming Pair-Ups
          </h3>
          {events}
        </div>
    </div>
    )
  }
}



export default PairUpFormContainer
