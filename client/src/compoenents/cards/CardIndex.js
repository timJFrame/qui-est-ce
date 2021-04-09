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

  const [eyeColorQuestion, setEyeColorQuestion] = React.useState(null)
  const [eyeColorAnswer, setEyeColorAnswer] = React.useState(null)
  const [selectedEyeColor, setSelectedEyeColor] = React.useState(null)

  const [finalMesage, setFinalMessage] = React.useState(null)

  let randomCard
  let playerGenderChoice
  let genderChoiceAnswer
  let playerHairColorChoice
  let hairChoiceColorAnswer
  let playerEyeColorChoice
  let eyeColorChoiceAnswer



 

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
        const filteredEyeColor = filterHairColor.filter(selected => {
          return selected.eyeColor === selectedEyeColor
        })
        if (filteredEyeColor.length > 0){
          setCards(filteredEyeColor)
        } else if (filterHairColor.length > 0){
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
  }, [selectedGender, selectedHairColor, selectedEyeColor])
  


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

  const handlePlayerHairColorChoice = (e) => {
    playerHairColorChoice = e.target.innerHTML
    setHairColorQuestion(null)
    handleHairColorAnswer()
    setHairColorAnswer(hairChoiceColorAnswer)
  }

  const loadEyeColorQuestion = () => {
    setHairColorAnswer(null)
    setSelectedHairColor(computerChoice.hairColor)
    setEyeColorQuestion(computerChoice.gender === 'homme' ? 'Il a les yeux:' : 'Elle a les yeux:')
  }

  const handlePlayerEyeColorChoice = (e) => {
    playerEyeColorChoice =  e.target.innerHTML
    setEyeColorQuestion(null)
    handleEyeColorAnswer()
    setEyeColorAnswer(eyeColorChoiceAnswer)
  } 

  const handleEyeColorAnswer = () => {
    if (playerEyeColorChoice === computerChoice.eyeColor){
      eyeColorChoiceAnswer = `Oui j'ai les yeux ${playerEyeColorChoice}`
    } else {
      eyeColorChoiceAnswer = `Non j'n'ai pa les yeux ${playerEyeColorChoice}. J'ai les yeux ${computerChoice.eyeColor}`
    }
  }

  const handleRevealCard = () => {
    setSelectedEyeColor(computerChoice.eyeColor)
    setEyeColorAnswer(null)
    setFinalMessage(`Salut, je m'appelle ${computerChoice.name}. J'ai les cheveux ${computerChoice.hairColor} et j'ai les yeux ${computerChoice.eyeColor}`)
  }

  const resetGame  = () => {
    setFinalMessage(null)
    setGenderQuestion('Est tu')
    setSelectedGender(null)
    setSelectedHairColor(null)
    setSelectedEyeColor(null)
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
        <Button className="blue lighten 2"  onClick={handleGenderChoice}>Homme</Button>
        <h5>ou une </h5>
        <Button className="blue lighten 2" onClick={handleGenderChoice}>Femme</Button>
      </div>
      }
      {genderAnswer &&
      <div className="gender-answer-div">
        <h5>{genderAnswer}</h5>
        <Button className="blue lighten 2" onClick={loadHairColorQuestion}>Question suivante</Button>
      </div>
      }
      
      {hairColorQuestion &&
      <div className="hair-color-question-div">
        <h5>{hairColorQuestion}</h5>
        <div className="hair-color-question-buttons">
          <Button onClick={handlePlayerHairColorChoice} className="hair-button blue lighten 2">noirs</Button>
          <Button onClick={handlePlayerHairColorChoice} className="hair-button blue lighten 2">bruns</Button>
          <Button onClick={handlePlayerHairColorChoice} className="hair-button blue lighten 2">blonds</Button>
          <Button onClick={handlePlayerHairColorChoice} className="hair-button blue lighten 2">roux</Button>
        </div>
      </div>
      }

      {hairColorAnswer &&
      <div className="hair-color-answer-div">
        <h5>{hairColorAnswer}</h5>
        <Button className="blue lighten 2" onClick={loadEyeColorQuestion}>Question suivante</Button>
      </div>
      }
     
      {eyeColorQuestion &&
      <div className="eye-color-question-div">
        <h5>{eyeColorQuestion}</h5>
        <div className="eye-color-question-buttons">
          <Button className="eye-color-button blue lighten 2" onClick={handlePlayerEyeColorChoice}>bleus</Button>
          <Button className="eye-color-button blue lighten 2" onClick={handlePlayerEyeColorChoice}>marron</Button>
          <Button className="eye-color-button blue lighten 2" onClick={handlePlayerEyeColorChoice}>verts</Button>
          <Button className="eye-color-button blue lighten 2" onClick={handlePlayerEyeColorChoice}>gris</Button>
        </div>
      </div>
      }

      {eyeColorAnswer &&
      <div className="eye-color-answer-div">
        <h5>{eyeColorAnswer}</h5>
        <Button className="blue lighten 2" onClick={handleRevealCard}>{'d\'accord'}</Button>
      </div>
      }

      {finalMesage &&
      <div className="final-message-div">
        <h5>{finalMesage}</h5>
        <Button className="blue lighten 2" onClick={resetGame}>Play Again</Button>
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

