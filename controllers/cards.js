import Card from '../models/cards.js'
import { notFound, forbidden } from '../lib/errorHandler.js'

//*Get all cards
async function cardIndex(reg, res){
  const cards = await Card.find().populate('owner')
  return res.status(200).json(cards)
}
  
//*Create Card
async function createCard(req, res, next){
  try {
    const newCardData = { ...req.body, owner: req.currentUser._id }
    const newCard = await Card.create(newCardData)
    return res.status(201).json(newCard)
  } catch (err){
    next(err)
  }
}
  
//*Get single card
async function cardShow(req, res, next){
  const { id } = req.params
  try {
    const card = await Card.findById(id).populate('owner')
    if (!card) throw new Error(notFound)
    return res.status(200).json(card)
  } catch (err){
    next(err)

  }
}

//*Edit Card
async function cardUpadte(req, res, next){
  const { id } = req.params
  try {
    const cardToEdit = await Card.findById(id).populate('owner')
    if (!cardToEdit) throw new Error(notFound)
    Object.assign(cardToEdit, req.body)
    await cardToEdit.save()
    return res.status(202).json(cardToEdit)
  } catch (err){
    next(err)
  }
}
  
//*Delete Card
async function cardDelete(req, res, next){
  const { id } = req.params
  try {

    const cardToDelete = await Card.findById(id)
    if (!cardToDelete) throw new Error(notFound)
    if (!cardToDelete.owner.equals(req.currentUser._id)) 
      throw new Error(forbidden)

    await cardToDelete.remove()
    return res.sendStatus(204)

  } catch (err){
    next(err)
  }
}
  
export default {
  index: cardIndex,
  create: createCard,
  show: cardShow,
  update: cardUpadte,
  delete: cardDelete,
}
  