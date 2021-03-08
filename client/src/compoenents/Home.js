import React from 'react'
import logo from '../images/home-page-logo.png'

function Home(){
  return (
    <div className="mdl-grid">
      <div className="mdl-cell mdl-cell--12-col">
        <div className="mdl-cell--middle"><img src={logo} alt='home page logo' className="logo"/></div>
      </div>
    </div>
  )
}

export default Home