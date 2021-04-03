import React from 'react'
import { Row, Col } from 'react-materialize'
import  Loader  from 'react-loader-spinner'
import { getCurrentUserProfile } from '../../lib/api'

function UserProfile(){

  const [userProfile, setUserProfile] = React.useState(null)
  // const [userLocation, setUserLocation] = React.useState(null)
  // const counter = 0

  React.useEffect(() => {
    const getData = async () => {
      const { data } = await getCurrentUserProfile()
      setUserProfile(data)
    }
    getData()
  }, [])



  // if (userProfile && counter === 0){
  //   console.log(userProfile.longitude, userProfile.latitude)
  //   const getData = async () => {
  //     counter++
  //     const { data } = await findReverseAddy(userProfile.longitude, userProfile.latitude)
  //     setUserLocation(data)
  //     console.log(data)
  //   }
  //   getData()
  // }



  return (userProfile ?
    <Row className="user-profile-page-container">
      <Col s={1} m={1} l={1}></Col>
      <Col s={12} m={5} l={5}
        className="user-container user-details-container"
      >
        <img src={userProfile.profilePhoto} alt={userProfile.username} className="user-profile-photo"/>
        <h3>{userProfile.username}</h3>
        <p>{userProfile.email}</p>
        <p>{userProfile.experience[0].toUpperCase()}{userProfile.experience.slice(1)} Speaking Level</p>
        {/* {userLocation &&
          <p>{userLocation.features[0].context[1].text}, {userLocation.features[0].context[3].text}</p>
        } */}
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