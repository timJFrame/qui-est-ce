import React from 'react'
import { getAllCards } from '../../lib/api'
import  Loader  from 'react-loader-spinner'
import { Row, Button } from 'react-materialize'
import Card from './Card'

function CardIndex(){

  const [cards, setCards] = React.useState(null)
  const [randomCard, setRandomCard] = React.useState(null)
  let selectedCard 

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

  const randomNumberGenerator = () => {
    return Math.floor(Math.random() * cards.length)
  }

  const handleSelectingRandomCard = () => {
    selectedCard = cards[randomNumberGenerator()]
    setRandomCard(selectedCard)
    console.log(randomCard)
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
      <Button
        onClick={handleSelectingRandomCard}
        node="button"
        waves="light"
        className="blue lighten 2"
      >Play Game</Button>
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

