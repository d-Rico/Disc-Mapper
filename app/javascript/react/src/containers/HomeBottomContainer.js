import React, { Component } from 'react'
import { Switch, Route } from 'react-router-dom'

class HomeBottomContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }


  render() {
    return(
      <div className="home-bottom">
        Hello from Home Bottom Container
      </div>
    )
  }
}

export default HomeBottomContainer
