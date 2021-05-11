import React from 'react'
import { Row, Col } from 'react-materialize'
import  Loader  from 'react-loader-spinner'
import { getCurrentUserProfile } from '../../lib/api'

function UserProfile(){

  const [userProfile, setUserProfile] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getCurrentUserProfile()
      setUserProfile(data)
    }
    getData()
  }, [])

  console.log(userProfile)

  
  return (userProfile ?
    <Row className="user-profile-page-container">
      <Col s={1} m={1} l={1}></Col>
      <Col s={12} m={5} l={5}
        className="user-container user-details-container"
      >
        <img src={userProfile.profilePhoto} alt={userProfile.username} className="user-profile-photo"/>

        <h3>{userProfile.username}</h3>
        
        <div className="user-sub-details">
          <p><strong>Email:</strong> {` ${userProfile.email}`}</p>
          <p><strong>Speaking Level:</strong> {` ${userProfile.experience[0].toUpperCase()}${userProfile.experience.slice(1)}`}</p>
          <p><strong>Longitude:</strong> {` ${userProfile.longitude}`}</p>
          <p><strong>Latitude:</strong> {` ${userProfile.latitude}`}</p>
        </div>
      </Col>
      
      <Col s={12} m={5} l={5}
        className="user-container"
      >
        <h3>Created Cards</h3>
      </Col>
      <Col s={1} m={1} l={1}></Col>
    </Row>
    :
    <div className="container loading-spinner-container">
      <Loader
        type="Oval"
        color="#00BFFF"
        height={100}
        width={100}

      />
    </div>
  )
}

export default UserProfile