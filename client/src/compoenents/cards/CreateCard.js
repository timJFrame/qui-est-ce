/* eslint-disable no-unused-vars */
import React from 'react'
import { Row, Col, TextInput, Select, Checkbox, Button } from 'react-materialize'
import useForm from '../../utils/useform'
import cardImages from './cardImageData'
import postCard from '../../lib/api'


function CreateCard(){

  let imageString
  const [gender, setGender] = React.useState('')
  const [eyeColor, setEyeColor] = React.useState('')
  const [hairColor, setHairColor] = React.useState('')
  const [image, setImage] = React.useState()




  const { formdata, handleChange } = useForm({
    name: '',
    gender: '',
    eyeColor: '',
    hairColor: '',
    glasses: false,
    moustache: false,
    beard: false,
    image: ''
  })

  //Handle submitting card to data base
  const handleCardSubmit = async (e) => {
    e.preventDefault()
    console.log('yes')
  }

  //Sets gender into state
  const handleGender = (e) => {
    const genderString = e.target.value
    console.log(genderString)
    setGender(genderString)
    
  }

  //Gender handle change function
  const handleChangeAndGender = (e) => {
    handleGender(e)
    handleChange(e)
  }
  
  //Sets Eye color into state and updates image
  const handleEyeColor = (e) => {
    const eyeColorString = e.target.value
    console.log(eyeColorString)
    setEyeColor(eyeColorString)
    
    cardImages.forEach(image => {
      if (image[`${gender}${eyeColorString}`]){
        imageString = image[`${gender}${eyeColorString}`]
      }
    })
    setImage(imageString)
  }

  //Eye color handle change function
  const handleChangeAndEyeColor = (e) => {
    handleChange(e)
    handleEyeColor(e)
  }

  //Sets eye color into state and updates image
  const handleHairColor = (e) => {
    const hairColorString = e.target.value
    setHairColor(hairColorString)
    
    cardImages.forEach(image =>{
      if (image[`${gender}${eyeColor}${hairColorString}`]){
        imageString = image[`${gender}${eyeColor}${hairColorString}`]
      }
    })
    setImage(imageString)
  }

  //Hair color handle change function
  const handleChangeAndHairColor = (e) => {
    handleChange(e)
    handleHairColor(e)
  }

  //Sets glasses into state and updates image
  const handleGlasses = () => {
    if (!formdata.glasses){
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}wg`]){
          imageString = image[`${gender}${eyeColor}${hairColor}wg`]
        }
      })
    
    } else {
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}`]){
          imageString = image[`${gender}${eyeColor}${hairColor}`]
        }
      })
    }
    setImage(imageString)
  }
 
  //Glasses change function
  const handleChangeAndGlasses = (e) => {
    handleChange(e)
    handleGlasses()
  }

  //Sets moustache into state and updates image
  const handleMoustache = () => {
    if (!formdata.moustache){
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}wm`]){
          imageString = image[`${gender}${eyeColor}${hairColor}wm`]
        }
      })
    
    } else {
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}`]){
          imageString = image[`${gender}${eyeColor}${hairColor}`]
        }
      })
    }
    setImage(imageString)
  }

  //Moustache change function
  const handleChangeAndMoustache = (e) => {
    handleChange(e)
    handleMoustache()
  }

  //Sets Beard into state and updates image
  const handleBeard = () => {
    if (!formdata.beard){
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}wb`]){
          imageString = image[`${gender}${eyeColor}${hairColor}wb`]
        }
      })
    
    } else {
      cardImages.forEach(image => {
        if (image[`${gender}${eyeColor}${hairColor}`]){
          imageString = image[`${gender}${eyeColor}${hairColor}`]
        }
      })
    }
    setImage(imageString)
  }

  //Beard change function
  const handleChangeAndBeard = (e) => {
    handleChange(e)
    handleBeard()
  }

  console.log(formdata)

  return (
    <div className="container">
      <form className="forms" onSubmit={handleCardSubmit}>
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
              <Col s={12} m={4} l={4}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="gender"
                  value={formdata.gender}
                  label ="Choose Gender"
                  onChange={handleChangeAndGender}
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
            

              {gender &&
           
              <Col s={12} m={4} l={4}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="eyeColor"
                  value={formdata.eyeColor}
                  label ="Choose Eye Color"
                  onChange={function noRefCheck(){}, handleChangeAndEyeColor}
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
              }
              { eyeColor &&
              <Col s={12} m={4} l={4}>
                <Select
                  noLayout
                  id="Select-9"
                  multiple={false}
                  name="hairColor"
                  value={formdata.hairColor}
                  label ="Choose Hair Color"
                  onChange={function noRefCheck(){}, handleChangeAndHairColor}
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
                     Choose Hair Color
                  </option>
                  <option>
                      blonds
                  </option>
                  <option>
                     bruns
                  </option>
                  <option>
                    noirs
                  </option>
                  <option>
                     roux
                  </option>
                </Select>
              </Col>
              }
            </Row>
        
            <Row>

              { hairColor &&
              <Col s={12} m={4} l={4}>
                <Checkbox
                  id="Checkbox_3"
                  name="glasses"
                  label="Glasses?"
                  value={formdata.glasses}
                  onChange={handleChangeAndGlasses}
                  checked={formdata.glasses}
                />
              </Col>
              }
        
              { gender === 'homme' &&
              <>
              
                <Col s={12} m={4} l={4}>
                  <Checkbox
                    id="Checkbox_4"
                    name="moustache"
                    label="Moustache?"
                    value={formdata.moustache}
                    onChange={handleChangeAndMoustache}
                    checked={formdata.moustache}
                  />
                </Col>
                

             
                <Col s={12} m={4} l={4}>
                  <Checkbox
                    id="Checkbox_5"
                    name="beard"
                    label="Beard?"
                    value={formdata.beard}
                    onChange={handleChangeAndBeard}
                    checked={formdata.beard}
                  />
                </Col>
                
              </>
              }
            </Row>
            




          </Col>
        </Row>
        {image &&
        <div className="create-card-continer">
          <div className="create-card">
            <img src={image} alt="creating-card" className="create-card-image"/>
          </div>
        </div>
        }
        <div className="card-submit-button">
          <Button
            node="button"
            type="submit"
            waves="orange"
          
          >
          Create Card
          </Button>
        </div>
      </form>
      
    </div>
  )
}

export default CreateCard