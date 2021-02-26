import mongoose from 'mongoose'
import { dbURI } from '../config/enviroment.js'


export default function connectToDataBase(){
  const options = {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  }
  return mongoose.connect(dbURI, options)
}


