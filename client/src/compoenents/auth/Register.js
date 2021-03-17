import React from 'react'
import { Row, Col, TextInput, Select, Button } from 'react-materialize'
import useForm from '../../utils/useform'
import ImageUpload from '../../utils/ImageUpload'

function Register(){

  const { formdata, handleChange } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    experience: '',
    latitude: '',
    longitude: '',
    profilePhoto: ''
  })

  console.log(formdata)


  return (
    <div className="container">
      <form className="forms">
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
                  label="Latitude"
                  noLayout
                  name="latitude"
                  value={formdata.latitude}
                  onChange={handleChange}
                />
              </Col>
              <Col s={6} m={6} l={6}>
                <TextInput
                  id="TextInput-4"
                  label="Longitude"
                  noLayout
                  name="longitude"
                  value={formdata.longitude}
                  onChange={handleChange}
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <ImageUpload/>
              </Col>
            </Row>
            <Button
              node="button"
              type="submit"
              waves="light"
              className="blue lighten 2 form-submit-button"
              
            >
              Submit
            </Button>

          </Col>
        </Row>
      </form>
    </div>


  )
}

export default Register