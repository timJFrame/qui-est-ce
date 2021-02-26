import express from 'express'
import Card from './models/cards.js'
import { port } from './config/enviroment.js'
import  logger  from './lib/logger.js'
import connectToDataBase from './lib/connectToDb.js'
const app = express()

async function startServer(){
  try {
    

    app.listen(4000, () => console.log(`Up and running on port ${port}`))

    connectToDataBase()

    app.use(logger)
  
    
  } catch (err){
    console.log('Something went wrong went starting the app')
    console.log(err)
  }
}

startServer()


app.use(express.json())

app.get('/cards', async (_reg, res) => {
  const cards = await Card.find()
  return res.status(200).json(cards)
})

app.post('/cards', async(req, res) => {
  try {
    const newCard = await Card.create(req.body)
    return res.status(201).json(newCard)
  } catch (err){
    console.log(err)
    return res.status(422).json(err)
  }
})

app.get('/cards/:id', async (req, res) => {
  const { id } = req.params
  try {
    const card = await Card.findById(id)
    if (!card) throw new Error()
    return res.status(200).json(card)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
})

app.delete('/cards/:id', async (req, res) => {
  const { id } = req.params
  try {
    const cardToDelete = await Card.findById(id)
    if (!cardToDelete) throw new Error()
    await cardToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
})

app.put('/cards/:id', async(req, res) => {
  const { id } = req.params
  try {
    const cardToEdit = await Card.findById(id)
    if (!cardToEdit) throw new Error()
    Object.assign(cardToEdit, req.body)
    await cardToEdit.save()
    return res.status(202).json(cardToEdit)
  } catch (err){
    console.log(err)
    return res.status(404).json({ 'message': 'Not Found' })
  }
})
