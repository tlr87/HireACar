import React from 'react'
import {HashRouter as Router, Route} from 'react-router-dom'

const App = () => {
  return (
    <h1>Unicorn car rental!</h1>
         <Route exact path = "/" component={Home} />
  )
}

export default App
