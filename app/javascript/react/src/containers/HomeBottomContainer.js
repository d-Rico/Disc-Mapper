import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import CourseTile from '../components/CourseTile'
import SearchBar from './SearchBar'

class HomeBottomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      courses: []
    }
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  componentDidMount() {
    fetch('api/v1/courses', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
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
        this.setState({ courses: json });
      });
  }

  handleSearchChange(event) {
    this.setState({search: event.target.value})
  }

  render() {

    let courses;
    if (this.state.search !== '') {
      courses = this.state.courses.filter(course => {
          return course.name.toLowerCase().indexOf(this.state.search.toLowerCase()) !== -1
        })

      courses = courses.map(course => {
        return(
          <CourseTile
            key={course.id}
            course={course}
          />
        )
      })
    } else {
      courses = this.state.courses.map(course => {
        return(
          <CourseTile
            key={course.id}
            course={course}
          />
        )
      })
    }

    return(
      <div className="home-bottom">

        <br />
        <br />

        <div className="searchbar">
          <SearchBar
            value={this.state.search}
            handleSearchChange = {this.handleSearchChange}
          />
        </div>

        <div className="course-section">
          <div>
            Add a park
          </div>
          <div className="courses-list">
            {courses}
          </div>
        </div>
      </div>
    )
  }
}

export default HomeBottomContainer
