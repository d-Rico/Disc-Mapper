import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

class CourseShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
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
      <div className="course-show-page">
      <Link to={'/'}>Return Home</Link>
        <div>
          hello from course show page
        </div>
        <div>
          This is where the reviews go
        </div>
      </div>
    )
  }
}

export default CourseShowContainer
