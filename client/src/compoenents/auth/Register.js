import React from 'react'
import { Row, Col, TextInput, Select, Button } from 'react-materialize'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useform'
import ImageUpload from '../../utils/ImageUpload'
import { registerUser, getUserAddress } from '../../lib/api'

function Register(){

  const history = useHistory()

  const [lat, setLat] = React.useState('')
  const [lon, setLon] = React.useState('')

  const { formdata, handleChange, setErrors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    experience: '',
    latitude: lat,
    longitude: lon,
    profilePhoto: ''
  })

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      console.log(formdata)
      await registerUser(formdata)
      history.push('/')
    } catch (err){
      console.log(err.response.data.errors)
      setErrors(err.response.data.errors)
    }
  }

  const [postCodeData, setPostCodeData] = React.useState({
    postcode: ''
  })

  const handlePostCodeChange = (e) => {
    setPostCodeData({ ... postCodeData, [e.target.name]: e.target.value })
  }


  const handleFindAddress = async e => {
    e.preventDefault()
    try {
      const { data } = await getUserAddress(postCodeData.postcode)
      setPostCodeData({ postcode: 'Address Found!!' })
      // setFormData({ latitude: data[0].lat, longitude: data[0].lon })
      setLon(data[0].lat)
      setLat(data[0].lon)
      console.log()
    } catch (err){
      console.log(err)
    }
  }

  console.log(formdata)

  return (
    <div className="container">
      <form className="forms" onSubmit={handleFormSubmit}>
        <Row >
          <Col s={12}>
            <Row >
              <Col s={12} m={12} l={12} >
                <TextInput
                  id="TextInput-12"
                  label="Username"
                  noLayout
                  name="username"
                  value={formdata.username}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-4"
                  label="Email"
                  noLayout
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-4"
                  label="Password"
                  password
                  noLayout
                  name="password"
                  value={formdata.password}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-4"
                  label="Password Confirmation"
                  password
                  noLayout
                  name="passwordConfirmation"
                  value={formdata.passwordConfirmation}
                  onChange={handleChange}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="experience"
                  value={formdata.experience}
                  onChange={function noRefCheck(){}, handleChange}
                  options={{
                    classes: '',
                    dropdownOptions: {
                      alignment: 'left',
                      autoTrigger: true,
                      closeOnClick: true,
                      constrainWidth: true,
                      coverTrigger: true,
                      hover: false,
                      inDuration: 150,
                      onCloseEnd: null,
                      onCloseStart: null,
                      onOpenEnd: null,
                      onOpenStart: null,
                      outDuration: 250
                    }
                  }}
                  
                >
                  <option
                    disabled
                    value=""
                  >
    What is your speaking level
                  </option>
                  <option>
    Beginner
                  </option>
                  <option>
    Intermediate
                  </option>
                  <option>
    Advanced
                  </option>
                </Select>
              </Col>
            </Row>

            <Row>
              <Col s={6} m={6} l={6}>
                <TextInput
                  id="TextInput-4"
                  label="Find Location"
                  noLayout
                  name="postcode"
                  value={postCodeData.postcode}
                  onChange={handlePostCodeChange}
                />
              
              </Col>
              <Col s={6} m={6} l={6}>
               
                <Button
                  onClick={handleFindAddress}
                  node="button"
                  waves="light"
                  className="blue lighten 2 form-submit-button">
              Search
                </Button>
               
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>

                <ImageUpload
                  onChange={handleChange}
                  value={formdata.profilePhoto}
                  name="profilePhoto"
                />
              </Col>
            </Row>
            <Button
              node="button"
              type="submit"
              waves="light"
              className="blue lighten 2 form-submit-button">
              Submit
            </Button>

          </Col>
        </Row>
      </form>
    </div>


  )
}

export default Register