import React from 'react'
import { useHistory } from 'react-router-dom'
import { Row, Col, TextInput, Button } from 'react-materialize'
import useForm from '../../utils/useform'
import { loginUser } from '../../lib/api'
import { setToken } from '../../lib/auth'

function Login(){

  const history = useHistory()
  const [error, setError] = React.useState(false)
  const { formdata, handleChange } = useForm({
    email: '',
    password: ''
  })

  const handleLoginSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await loginUser(formdata)
      setToken(data.token)
      history.push('/register')
    } catch (err){
      setError(true)
    }
  }

  const handleErrorMessage = () => setError(true)

  return (
    <div className="container">
      <form className="forms" onSubmit={handleLoginSubmit}>
        <Row>
          <Col s={12}>
            <Row>
              <Col s={12} m={12} l={12}
                className={error ? 'login-error-handler' : ''}
              >
                <TextInput
                  id="TextInput-12"
                  label="Email"
                  noLayout
                  name="email"
                  value={formdata.email}
                  onChange={handleChange}
                  onFocus={handleErrorMessage}
                  className={error ? 'login-error-handler' : ''}
                />
              </Col>
            </Row>
            <Row>
              <Col s={12} m={12} l={12}
                className={error ? 'login-error-handler' : ''}
              >
              
                <TextInput
                  id="TextInput-12"
                  label="Password"
                  noLayout
                  password
                  name="password"
                  vaule={formdata.password}
                  onChange={handleChange}
                  onFocus={handleErrorMessage}
                
                />
              </Col>
            </Row>
            {error &&
            <p className="error-message">Email or Password is Incorrect</p>
            }
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