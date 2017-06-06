import React from 'react'
import {Router, hashHistory,Route} from 'react-router'


export default () => (
    <Router history={hashHistory}>
      <Route component={Root}>
        <Route path="/" component={Main}  />
      </Route>
    </Router>
  )
