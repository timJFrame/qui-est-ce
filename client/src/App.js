import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Nav from './compoenents/shared/Nav'
import Home from './compoenents/shared/Home'
import Register from './compoenents/auth/Register'


function App(){
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
