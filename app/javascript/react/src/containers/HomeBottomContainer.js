import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CoursesIndex from '../components/CoursesIndex'

class HomeBottomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      courses: []
    }
  }

  componentDidMount() {
    this.getCourses()
  }

  getCourses() {
    fetch('api/v1/courses', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ courses: json });
      });
  }

  render() {

    return(
      <div className="home-bottom">

        <div>
          This is where the search bar goes
        </div>

        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />

        <div>
          <CoursesIndex
            courses={this.state.courses}
          />
        </div>

      </div>
    )
  }
}

export default HomeBottomContainer
