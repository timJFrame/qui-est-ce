import React from 'react'
import { Row, Col, TextInput, RadioGroup } from 'react-materialize'

function CreateCard(){


  const genderCheck = (e) => {
    console.log(e.target)
  }

  return (
    <div className="container">
      <form className="forms">
        <Row>
          <Col s={12}>
            <Row>
              <Col s={12} m={12} l={12}>
                <TextInput
                  id="TextInput-12"
                  label="Name"
                  noLayout
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <RadioGroup
                  label="Gender"
                  onChange={genderCheck}
                  options={[
                    {
                      label: 'Homme',
                      value: 'homme'
                    },
                    {
                      label: 'Femme',
                      value: 'femme'
                    }
                  ]}
                />
              </Col>
            </Row>

          </Col>
        </Row>
      </form>
    </div>
  )
}

export default CreateCard