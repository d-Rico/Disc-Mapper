import React from 'react'
import { Switch, Route } from 'react-router-dom'
import HomeContainer from '../containers/HomeContainer'
import HomeTopContainer from '../containers/HomeTopContainer'
import CourseShowContainer from '../containers/CourseShowContainer'

// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Main = props => {
  return(
    <Switch>
      <Route exact path="/" component={HomeContainer} />
      <Route exact path="/upcoming-events" component={HomeTopContainer} />
      <Route exact path="/pair-ups" component={HomeTopContainer} />
      <Route exact path="/resources" component={HomeTopContainer} />
      <Route exact path="/about-disc-mapper" component={HomeTopContainer} />
      <Route exact path="/courses" component={HomeContainer} />
      <Route exact path="/courses/:id" component={CourseShowContainer} />

    </Switch>
  )
}

export default Main
