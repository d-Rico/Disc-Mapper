import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';

class CourseShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {

    return(
      <div className="course-show-page">
      <Link to={'/'}>Return Home</Link>
        <div>
          hello from course show page
        </div>
      </div>
    )
  }
}

export default CourseShowContainer
