import React from 'react'
import logo from '../../images/home-page-logo.png'

function Home(){
  return (
    <div className="container">
      <div className="row">
        <div className="col s12 m12 l12 home-logo-holder">
          <img src={logo} 
            alt='home page logo' 
            className="responsive-img"/>
        </div>
      </div>
     
    </div>
    
  )
}

export default Home