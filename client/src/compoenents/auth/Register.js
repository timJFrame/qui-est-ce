import React from 'react'
import { Row, Col, TextInput, Select, Button } from 'react-materialize'
import { useHistory } from 'react-router-dom'
import useForm from '../../utils/useform'
import ImageUpload from '../../utils/ImageUpload'
import { registerUser, getUserAddress } from '../../lib/api'

function Register(){

  const history = useHistory()
  const [message, setMessage] = React.useState(false)

  const { formdata, handleChange, setErrors, errors } = useForm({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    experience: '',
    profilePhoto: ''
  })

  const [location, setLocation] = React.useState({
    latitude: '',
    longitude: ''
  })

  const allFormDetails = { ...location, ...formdata }

  const handleFormSubmit = async e => {
    e.preventDefault()
    try {
      await registerUser(allFormDetails)
      history.push('/login')
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
      setPostCodeData({ postcode: `Great your based in ${data.features[0].context[1].text}` })
      setLocation({ latitude: data.features[0].geometry.coordinates[1], longitude: data.features[0].geometry.coordinates[0] })
     
      console.log()
    } catch (err){
      console.log(err)
    }
  }


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
              {
                errors.username && <p className="error-message">Please enter a username</p>
              }
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
              {
                errors.email && <p className="error-message">Please enter a valid email</p>
              }
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
              {
                errors.password && <p className="error-message">Please enter a password</p>
              }
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
              {
                errors.passwordConfirmation && <p className="error-message">Please enter a password confirmation</p>
              }
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
    What is your speaking level in French
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
              {
                errors.experience && <p className="error-message">Please choose an experience level</p>
              }
            </Row>

            <Row>
              <Col s={6} m={6} l={6}>
                <TextInput
                  id="TextInput-4"
                  label="Please enter your post code"
                  noLayout
                  name="postcode"
                  value={postCodeData.postcode}
                  onChange={handlePostCodeChange}
                  className="tooltipped" data-position="botton" data-tooltip="Hello"
                />
                <p 
                  onMouseEnter={() => setMessage(true)}
                  onMouseLeave={() => setMessage(false)}
                  className="register-form-address-message"
                >Why?</p>
              
              </Col>
              <Col s={6} m={6} l={6}>
               
                <Button
                  onClick={handleFindAddress}
                  node="button"
                  waves="light"
                  className="blue lighten 2 form-submit-button">
              Search
                </Button>
                {message &&
                  <p className="register-form-address-message">
                    We take your post code so we can add you to our user map. So you can see where all the other Qui Est-ce users are based around the world.
                  </p>
                }
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
              {
                errors.profilePhoto && <p className="error-message">Please select a profile photo</p>
              }
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