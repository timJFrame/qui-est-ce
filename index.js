import express from 'express'
import mongoose from 'mongoose'
const app = express()
const port = 4000
const dbURI = 'mongodb://localhost/qui-est-ce-db'



async function startServer(){
  try {
    await mongoose.connect(dbURI, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })

    app.listen(4000, () => console.log(`Up and running on port ${port}`))

    app.use((req, res, next) => {
      console.log(`Incoming Request: ${req.method} -${req.url}`)
      next()
    })
    
  } catch (err){
    console.log('Something went wrong went starting the app')
    console.log(err)
  }
}

startServer()

const personCardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  eyeColor: { type: String, required: true },
  hairColor: { type: String, required: true },
  glasses: { type: Boolean, required: true },
  moustache: { type: Boolean, required: true },
  beard: { type: Boolean, required: true },
})

const Card = mongoose.model('Card', personCardSchema)
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


