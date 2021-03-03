import mongoose from 'mongoose'
import connectToDataBase from '../lib/connectToDb.js'
import Card from '../models/cards.js'
import User from '../models/user.js'
import cardData from './data/cards.js'
import userData from './data/users.js'



async function seedDatabase(){
  try {
    await connectToDataBase()
    console.log('👍 Database connected')

    await mongoose.connection.db.dropDatabase()
    console.log('👍 Database dropped')

    const users = await User.create(userData)
    console.log(`${users.length} users created`)

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