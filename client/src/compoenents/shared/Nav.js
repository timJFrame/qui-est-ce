import React from 'react'
// import logo from '../../images/home-page-logo.png'
import { Link } from 'react-router-dom'
import 'materialize-css'
import { Navbar, Icon, Button } from 'react-materialize'





function Nav(){

  return (
   
    <Navbar
      alignLinks="right"
      // brand={<img src={logo} alt="logo" className="brand-logo responsive-img nav-logo right-align"/>}
      // centerChildren
      
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
      className="white lighten-2 z-depth-0 "
    >
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
      
    </Navbar>
   
    
  )
}

export default Nav