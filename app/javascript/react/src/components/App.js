import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './Header'
import Main from './Main'

const App = props => {
  return(
    <div>
      <Header />
      <Main />
    </div>
  )
}

export default App
