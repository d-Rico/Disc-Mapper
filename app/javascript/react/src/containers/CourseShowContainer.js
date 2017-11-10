import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PairUpFormContainer from './PairUpFormContainer';
import ReviewsIndex from '../components/ReviewsIndex';
/* global google */

class CourseShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      course: {},
      events: [],
      reviews: []
    }
    this.handleEventSubmit = this.handleEventSubmit.bind(this)
    this.initMap = this.initMap.bind(this)
  }

  handleEventSubmit(formPayload) {
    fetch("/api/v1/events", {
      method: 'POST',
      credentials: 'same-origin',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formPayload)
    })
      .then((response) => response.json())
      .then(json => {
        debugger;
        let newEventsArray = this.state.events.concat(json)
        this.setState({ events: newEventsArray })
      })
  }


  componentDidMount() {
      let courseId = this.props.match.params.id
      fetch(`/api/v1/courses/${courseId}`, {
        headers: { 'Content-Type': 'application/json' },
        credentials: 'same-origin'
      })
      .then(response => response.json())
      .then(json => {
        this.setState({ course: json })
      });
      window.initMap = this.initMap;
      loadJS('https://maps.googleapis.com/maps/api/js?key=AIzaSyAkkge_ZZgBAKUlmylUvZ7C798ocPW2u4o&callback=initMap')
    }

  initMap() {
    let map = new google.maps.Map(document.getElementById('map'), {
      zoom: 12,
      center: {lat: this.state.course.latitude, lng: this.state.course.longitude}
    });
    let marker = new google.maps.Marker({
      position: {lat: this.state.course.latitude, lng: this.state.course.longitude},
      map: map,
    });
  }



  render() {

    let course = this.state.course
    let hazard
    if( course.water_hazard === true ) {
      hazard = "Yes"
    } else {
      hazard = "No"
    }


    return(
      <div className="course-show-page-container">
          <Link className="small-2 medium-2 large-2 columns home-link" to={'/'}>
            Return Home
          </Link>
          <div className="small-12 medium-12 large-12 columns details">
            <div className="small-12 medium-12 large-4 columns course-show-details">
              <h3>{course.name}</h3>
              <li>Address: {course.address}, {course.city}, {course.state} {course.zip}</li>
              <li>Difficulty: {course.difficulty}</li>
              <li>Water Hazard: {hazard}</li>
            </div>
            <div className="small-12 medium-12 large-4 columns">
            <h3>Course Description</h3>
            <p>{course.description}</p>
            </div>
            <div className="small-12 medium-12 large-4 columns google-map" id="map">

            </div>
            <div className="small-12 medium-12 large-12 columns course-show-photo">
              <img src={course.photo_url} />
            </div>
          </div>
          <div className="bottom-section">
            <PairUpFormContainer handleEventSubmit={this.handleEventSubmit} events={this.state.events} course={this.state.course} />
          </div>
      </div>
    )
  }
}

export default CourseShowContainer

function loadJS(src) {
    var ref = window.document.getElementsByTagName("script")[0];
    var script = window.document.createElement("script");
    script.src = src;
    script.async = true;
    ref.parentNode.insertBefore(script, ref);
}
