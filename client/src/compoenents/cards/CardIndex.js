import React from 'react'
import { getAllCards } from '../../lib/api'
import  Loader  from 'react-loader-spinner'
import { Row, Button } from 'react-materialize'
import Card from './Card'

function CardIndex(){

  const [cards, setCards] = React.useState(null)
  const [computerChoice, setComputerChoice] = React.useState(null)

  const [genderQuestion, setGenderQuestion] = React.useState('Est tu')
  const [genderAnswer, setGenderAnswer] = React.useState(null)
  const [selectedGender, setSelectedGender] = React.useState(null)

  const [hairColorQuestion, setHairColorQuestion] = React.useState(null)
  const [hairColorAnswer, setHairColorAnswer] = React.useState(null)
  const [selectedHairColor, setSelectedHairColor] = React.useState(null)

  let randomCard
  let playerGenderChoice
  let genderChoiceAnswer
  let playerHairColorChoice
  let hairChoiceColorAnswer



 

  React.useEffect(() => {
    const getData = async() => {
      try {
        const { data } = await getAllCards()
        console.log(data)
        const filteredGender = data.filter(selected => {
          return selected.gender === selectedGender
        })
        const filterHairColor = filteredGender.filter(selected => {
          return selected.hairColor === selectedHairColor
        })
        if (filterHairColor.length > 0){
          return setCards(filterHairColor)
        } else if (filteredGender.length > 0){
          return setCards(filteredGender)
        } else {
          return setCards(data)
        }
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [selectedGender, selectedHairColor])
  


  const computerChoiceGen = () => {
    const randomNumber = Math.floor(Math.random() * cards.length)
    randomCard = cards[randomNumber]  
  }

  const handleGenderAnswer = () => {
    if (playerGenderChoice === randomCard.gender){
      genderChoiceAnswer = `Oui je suis ${ playerGenderChoice === 'homme' ? 'un' : 'une' } ${playerGenderChoice}`
    } else {
      genderChoiceAnswer = `Non, Je ne suis pa ${playerGenderChoice === 'homme' ? 'un' : 'une'} ${playerGenderChoice}.
      Je suis ${randomCard.gender === 'homme' ? 'un' : 'une'} ${randomCard.gender}`
    }
  }

  const handleGenderChoice = (e) => {
    playerGenderChoice = e.target.innerHTML.toLowerCase()
    computerChoiceGen()
    setComputerChoice(randomCard)
    handleGenderAnswer()
    setGenderAnswer(genderChoiceAnswer)
    setGenderQuestion(null)
  }

  const loadHairColorQuestion = () => {
    setGenderAnswer(null)
    setSelectedGender(computerChoice.gender)
    setHairColorQuestion(computerChoice.gender === 'homme' ? 'Il a les cheveux:' : 'Elle a les cheveux:')
  }

  const handleHairColorAnswer = () => {
    if (playerHairColorChoice === computerChoice.hairColor){
      hairChoiceColorAnswer = `Oui, j'ai les cheveux ${playerHairColorChoice}`
    } else {
      hairChoiceColorAnswer = `Non, j'n'ai pa les cheveux ${playerHairColorChoice}. J'ai les cheveux ${computerChoice.hairColor}`
    }
  }

  const handlePlayerEyeColorChoice = (e) => {
    playerHairColorChoice = e.target.innerHTML
    setHairColorQuestion(null)
    handleHairColorAnswer()
    setHairColorAnswer(hairChoiceColorAnswer)
  }

  const handleEyeColorQuestion = () => {
    setHairColorAnswer(null)
    setSelectedHairColor(computerChoice.hairColor)
  }


  return (cards ?
    <div className="card-index-container">
      <Row className="card-master-container">
        {cards.map(card => (
          <Card
            key={card._id}{...card}
          />
        ))}
      </Row>
      
     
      

      {genderQuestion &&
      <div className="gender-question-div">
        <h5>{`${genderQuestion} un  `}</h5>
        <Button onClick={handleGenderChoice}>Homme</Button>
        <h5>ou une </h5>
        <Button onClick={handleGenderChoice}>Femme</Button>
      </div>
      }
      {genderAnswer &&
      <div className="gender-answer-div">
        <h5>{genderAnswer}</h5>
        <Button onClick={loadHairColorQuestion}>Question suivante</Button>
      </div>
      }
      
      {hairColorQuestion &&
      <div className="hair-color-question-div">
        <h5>{hairColorQuestion}</h5>
        <div className="hair-color-question-buttons">
          <Button onClick={handlePlayerEyeColorChoice} className="hair-button">noirs</Button>
          <Button onClick={handlePlayerEyeColorChoice} className="hair-button">bruns</Button>
          <Button onClick={handlePlayerEyeColorChoice} className="hair-button">blonds</Button>
          <Button onClick={handlePlayerEyeColorChoice} className="hair-button">roux</Button>
        </div>
      </div>
      }

      {hairColorAnswer &&
      <div className="hair-color-answer-div">
        <h5>{hairColorAnswer}</h5>
        <Button onClick={handleEyeColorQuestion}>Question suivante</Button>
      </div>
      }
     

    </div>
      
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

export default CardIndex

