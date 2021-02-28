import Card from '../models/cards.js'
import { notFound } from '../lib/errorHandler.js'

async function cardIndex(reg, res){
  const cards = await Card.find()
  return res.status(200).json(cards)
}
  

async function createCard(req, res, next){
  try {
    const newCard = await Card.create(req.body)
    return res.status(201).json(newCard)
  } catch (err){
    next(err)
  }
}
  
async function cardShow(req, res, next){
  const { id } = req.params
  try {
    const card = await Card.findById(id)
    if (!card) throw new Error(notFound)
    return res.status(200).json(card)
  } catch (err){
    next(err)

  }
}

async function cardUpadte(req, res, next){
  const { id } = req.params
  try {
    const cardToEdit = await Card.findById(id)
    if (!cardToEdit) throw new Error(notFound)
    Object.assign(cardToEdit, req.body)
    await cardToEdit.save()
    return res.status(202).json(cardToEdit)
  } catch (err){
    next(err)
  }
}
  
async function cardDelete(req, res, next){
  const { id } = req.params
  try {
    const cardToDelete = await Card.findById(id)
    if (!cardToDelete) throw new Error(notFound)
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
  