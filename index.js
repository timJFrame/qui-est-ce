import express from 'express'
import { port } from './config/enviroment.js'
import  logger  from './lib/logger.js'
import connectToDataBase from './lib/connectToDb.js'
import router from './config/router.js'
import errorHandler from './lib/errorHandler.js'

const app = express()

async function startServer(){
  try {
    
    await connectToDataBase()
    
    app.use(express.json())

    app.use(logger)
  
    app.use('/api', router)

    app.use(errorHandler)

    app.listen(4000, () => console.log(`Up and running on port ${port}`))

    
  } catch (err){
    console.log('Something went wrong went starting the app')
    console.log(err)
  }
}

startServer()




