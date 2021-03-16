import React from 'react'
import { Row, Col, TextInput, Select, Button } from 'react-materialize'

function Register(){
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
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-4"
                  label="Email"
                  noLayout
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
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  onChange={function noRefCheck(){}}
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
                  value=""
                >
                  <option
                    disabled
                    value=""
                  >
    What is your speaking level
                  </option>
                  <option value="1">
    Beginner
                  </option>
                  <option value="2">
    Intermediate
                  </option>
                  <option value="3">
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
                />
              </Col>
              <Col s={6} m={6} l={6}>
                <TextInput
                  id="TextInput-4"
                  label="Longitude"
                 
                  noLayout
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-4"
                  label="Profile Photo"
                  type="file"
                  noLayout
                  className="blue lighten 2"
                />
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