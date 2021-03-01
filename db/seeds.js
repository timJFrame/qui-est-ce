import mongoose from 'mongoose'
import connectToDataBase from '../lib/connectToDb.js'
import Card from '../models/cards.js'
import cardData from './data/cards.js'



async function seedDatabase(){
  try {
    await connectToDataBase()
    console.log('👍 Database connected')

    await mongoose.connection.db.dropDatabase()
    console.log('👍 Database dropped')

    const cards = await Card.create(cardData)
    console.log(`${cards.length} cards created`)

    await mongoose.connection.close()
    console.log('Database closed')

  } catch (err){
    console.log(err)

    await mongoose.connection.close()
    console.log('Database closed')
    
  }
}

seedDatabase()