import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import PairUpFormContainer from './PairUpFormContainer';
import ReviewsIndex from '../components/ReviewsIndex';

class CourseShowContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      pClicked: true,
      rClicked: false,
      course: {},
      events: [],
      reviews: []
    }
    this.handlePairUpsClick = this.handlePairUpsClick.bind(this)
    this.handleReviewsClick = this.handleReviewsClick.bind(this)
    this.handleEventSubmit = this.handleEventSubmit.bind(this)
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
        let newEventsArray = this.state.events.concat(json.event)
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
    }

  handlePairUpsClick(id) {
    if(this.state.pClicked == false) {
      this.setState({
        pClicked: !this.state.pClicked,
        rClicked: !this.state.rClicked
      })
    }
  }

  handleReviewsClick(id) {
    if(this.state.rClicked == false) {
      this.setState({
        rClicked: !this.state.rClicked,
        pClicked: !this.state.pClicked
      })
    }
  }




  render() {

    // let handleEventSubmit = (formPayload) => {
    //   this.handleEventSubmit(formPayload)
    // }

    let showContent;
    if(this.state.pClicked == true && this.state.rClicked == false) {
      showContent = <PairUpFormContainer handleEventSubmit={this.handleEventSubmit} events={this.state.events} course={this.state.course} />
    } else if (this.state.rClicked == true && this.state.pClicked == false) {
      showContent = <ReviewsIndex  />
    }


    return(
      <div className="course-show-page-container">
        <div className="show-page-cover">
          <div>
            <Link to={'/'}>Return Home</Link>
          </div>
          <div className="course-show-page">

            This is where all of the course stuff goes


          </div>
          <div className="pairup-or-review">
            <div className="row">
              <div className="small-6 medium-6 large-6 columns" onClick={this.handlePairUpsClick}>
                <div className="dtheadline">
                  Pair-Up Form
                </div>
              </div>
              <div className="small-6 medium-6 large-6 columns" onClick={this.handleReviewsClick}>
                <div className="dtheadline">
                  Course Reviews
                </div>
              </div>
            </div>
            <div className="row">
              <div className="small-12 medium-12 large-12 columns">{showContent}</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default CourseShowContainer
