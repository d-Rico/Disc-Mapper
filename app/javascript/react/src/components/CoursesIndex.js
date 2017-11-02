import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CourseTile from './CourseTile'

class CoursesIndex extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {


    let courses = this.props.courses.map( course => {
      return(
        <CourseTile
          key={course.id}
          course={course}
        />
      )
    })


    return(
      <div className="course-section">
        <div>
          Add a park
        </div>
        <div className="courses-list">
          {courses}
        </div>
      </div>
    )
  }
}

export default CoursesIndex
