/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col, TextInput, Select } from 'react-materialize'
import useForm from '../../utils/useform'
import cardImages from './cardImageData'




//*Femme
import femmebleus from '../../images/femme/femmebleus.png'
import femmeverts from '../../images/femme/femmeverts.png'
import femmemarron from '../../images/femme/femmemarron.png'
import femmegris from   '../../images/femme/femmegris.png'
import cardImageData from './cardImageData'


function CreateCard(){

  const [gender, setGender] = React.useState('')
  const [eyeColor, setEyeColor] = React.useState('')
  const [image, setImage] = React.useState()



  const { formdata, handleChange } = useForm({
    name: '',
    gender: '',
    eyeColor: '',
    hairColor: '',
    glasses: '',
    moustache: '',
    beard: '',
    image: ''
  })

  const handleGender = (e) => {
    setGender(e.target.value)
  }

 
  

  const handleEyeColor = (e) => {
    const eyeColorString = e.target.value
    setEyeColor(eyeColorString)
    let imageString
    cardImageData.forEach(image => {
      if (image[`${gender}${eyeColorString}`]){
        imageString = image[`${gender}${eyeColorString}`]
      }
    })
    setImage(imageString)
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
                  onChange={handleChange}
                  name="name"
                  value={formdata.name}
                />
              </Col>
            </Row>

            <Row>
              <Col s={12} m={12} l={12}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="gender"
                  value={formdata.gender}
                  label ="Choose Gender"
                  onChange={function noRefCheck(){}, handleChange, handleGender}
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
                     Choose Gender
                  </option>
                  <option>
                      femme
                    
                  </option>
                  <option>
                     homme
                  </option>
                </Select>
              </Col>
            </Row>

            {gender &&
            <Row>
              <Col s={12} m={12} l={12}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="eyeColor"
                  value={formdata.eyeColor}
                  label ="Choose Eye Color"
                  onChange={function noRefCheck(){}, handleChange, handleEyeColor}
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
                     Choose Eye Color
                  </option>
                  <option>
                      bleus
                  </option>
                  <option>
                     verts
                  </option>
                  <option>
                     marron
                  </option>
                  <option>
                     gris
                  </option>
                </Select>
              </Col>
            </Row>
            }

          </Col>
        </Row>
        {image &&
        <div className="create-card-image-container">
          <img src={image} alt="creating-card"/>
         
        </div>
        }
      </form>
    </div>
  )
}

export default CreateCard