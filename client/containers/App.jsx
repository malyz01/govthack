import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import Page from './_Pages'

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Page.Landing} />
      </Switch>
    </BrowserRouter>
  )
}

export default App
