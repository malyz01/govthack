import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Landing from './_Landing'
import Page1 from './_Page1'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/page1" component={Page1} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
