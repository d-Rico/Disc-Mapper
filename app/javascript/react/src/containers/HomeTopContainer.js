import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class HomeTopContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return(
      <div className="home-top">
        <ul className="home-top-ul">Upcoming Events</ul>
        <ul className="home-top-ul">Pair ups</ul>
        <ul className="home-top-ul">Resources</ul>
        <ul className="home-top-ul">About Disc Mapper</ul>
      </div>
    )
  }
}

export default HomeTopContainer
