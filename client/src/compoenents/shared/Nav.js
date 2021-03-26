import React from 'react'
import logo from '../../images/home-page-logo.png'
import { Link, useHistory, useLocation } from 'react-router-dom'
import 'materialize-css'
import { Navbar, Icon, Button } from 'react-materialize'
import { logout, isAuthenticated } from '../../lib/auth'





function Nav(){

  const history = useHistory()
  const isLoggedIn = isAuthenticated()
  useLocation()

  

  const handleLogOut = () => {
    logout()
    history.push('/')
  }

  const goHome = () => {
    history.push('/')
  }

  return (
   
    <Navbar
      alignLinks="right"
      brand={
        <img src={logo} alt="logo" className="brand-logo responsive-img nav-logo right-align"
          onClick={goHome}
        />}
      centerChildren
      id="mobile-nav"
      menuIcon={<Icon className="black-text" right>menu</Icon>}
      options={{
        draggable: true,
        edge: 'right',
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true
      }}
      className="white lighten-2 z-depth-0 ">
      {!isLoggedIn ?

        <div style={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center' }}>
          <Link className="nav-item" to="/register" >
            <Button
              waves="light"
              className="blue lighten 2"
            >
          Register
            </Button>
          </Link>

          <Link className="nav-item" to="/login" >
            <Button
              waves="light"
              className="blue lighten 2"
            >
          Login
            </Button>
          </Link>
        </div>
        
        :
        <div style={{ display: 'flex', flexWrap: 'wrap',  justifyContent: 'center' }}>
         
          <Link className="nav-item" to="/profile" >
            <Button
              waves="light"
              className="blue lighten 2"
            >
          My Profile
            </Button>
          </Link>

          <Link className="nav-item" to="" >
            <Button
              waves="light"
              className="red lighten 2"
              onClick={handleLogOut}
            >
          Logout
            </Button>
          </Link>

        </div>
      }
      
    </Navbar>
   
    
  )
}

export default Nav