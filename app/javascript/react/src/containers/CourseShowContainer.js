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
      reviews: []
    }
    this.handlePairUpsClick = this.handlePairUpsClick.bind(this)
    this.handleReviewsClick = this.handleReviewsClick.bind(this)
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

  getReviews() {
    fetch('', {
      headers: { 'Content-Type': 'application/json' },
      credentials: 'same-origin'
    })
      .then(response => response.json())
      .then(json => {
        this.setState({ reviews: json });
      });
  }

  render() {

    let showContent;
    if(this.state.pClicked == true && this.state.rClicked == false) {
      showContent = <PairUpFormContainer />
    } else if (this.state.rClicked == true && this.state.pClicked == false) {
      showContent = <ReviewsIndex  />
    }


    return(
      <div className="course-show-page">
      <Link to={'/'}>Return Home</Link>
        <div>
          hello from course show page
        </div>
        <div>
          <div onClick={this.handlePairUpsClick}>Pair-Up Form</div>
          <div onClick={this.handleReviewsClick}>Course Reviews</div>
          {showContent}
        </div>
      </div>
    )
  }
}

export default CourseShowContainer
