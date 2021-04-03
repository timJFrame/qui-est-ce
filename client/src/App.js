import React from 'react'
import { Switch, Route, BrowserRouter } from 'react-router-dom'

import Nav from './compoenents/shared/Nav'
import Home from './compoenents/shared/Home'
import Register from './compoenents/auth/Register'
import Login from './compoenents/auth/Login'
import UserProfile from './compoenents/user/UserProfile'
import cardIndex from './compoenents/cards/CardIndex'


function App(){
  return (
    <>
      <BrowserRouter>
        <Nav/>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route path="/register" component={Register}/>
          <Route path="/login" component={Login}/>
          <Route path="/profile" component={UserProfile}/>
          <Route path="/game" component={cardIndex}/>
        </Switch>
      </BrowserRouter>
    </>
  )
}

export default App
