import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeTopContainer from './HomeTopContainer'
import HomeBottomContainer from './HomeBottomContainer'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
class HomeContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return(
      <div className="home-container">
        <HomeTopContainer />
        <HomeBottomContainer />
      </div>
    )
  }
}

export default HomeContainer
