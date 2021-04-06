import React from 'react'
import { getAllCards } from '../../lib/api'
import  Loader  from 'react-loader-spinner'
import { Row, Button } from 'react-materialize'
import Card from './Card'

function CardIndex(){

  const [cards, setCards] = React.useState(null)
  const [computerChoice, setComputerChoice] = React.useState(null)

  const [genderAnswer, setGenderAnswer] = React.useState(null)

  let randomCard
  let playerGenderChoice
  let genderChoiceAnswer


 

  React.useEffect(() => {
    const getData = async() => {
      try {
        const { data } = await getAllCards()
        console.log(data)
        setCards(data)
      } catch (err){
        console.log(err)
      }
    }
    getData()
  }, [])
  


  const computerChoiceGen = () => {
    const randomNumber = Math.floor(Math.random() * cards.length)
    randomCard = cards[randomNumber]

  
  }

  const handleGenderAnswer = () => {
    if (playerGenderChoice === randomCard.gender){
      genderChoiceAnswer = `Oui je suis ${ playerGenderChoice === 'homme' ? 'un' : 'une' } ${playerGenderChoice}`
    } else {
      genderChoiceAnswer = `Non, Je ne suis pa ${playerGenderChoice === 'homme' ? 'un' : 'une'} ${playerGenderChoice}`
    }
  }

  const handleGenderChoice = (e) => {
    playerGenderChoice = e.target.innerHTML.toLowerCase()
    computerChoiceGen()
    setComputerChoice(randomCard)
    handleGenderAnswer()
    setGenderAnswer(genderChoiceAnswer)
    console.log(computerChoice)
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
      

      {!genderAnswer &&
      <div className="gender-question-div">
        <h5>Are you a un:</h5>
        <Button onClick={handleGenderChoice}>Homme</Button>
        <h5>ou une </h5>
        <Button onClick={handleGenderChoice}>Femme</Button>
      </div>
      }
      {genderAnswer &&
      <div className="gender-answer-div">
        <h5>{genderAnswer}</h5>
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

