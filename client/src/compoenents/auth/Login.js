import React from 'react'
import { Row, Col, TextInput, Button } from 'react-materialize'

function Login(){
  return (
    <div className="container">
      <form className="forms">
        <Row>
          <Col s={12}>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-12"
                  label="Email"
                  noLayout
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-12"
                  label="Password"
                  noLayout
                  password
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}>
                <Button 
                  node="button"
                  type="submit"
                  waves="light"
                  className="blue lighten 2 form-submit-button"
                >Login</Button>
              </Col>
            </Row>
          </Col>
        </Row>

      </form>
    </div>
  )
}

export default Login