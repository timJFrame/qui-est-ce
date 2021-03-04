import jwt from 'jsonwebtoken'
import { secret } from '../config/enviroment.js'
import User from '../models/user.js'

export default async function secureRoute(req, res, next){  
  try {
    if (!req.headers.authorisation){
      throw new Error('Missing Required Header')
    }
  } catch (err){
    console.log(err)
  }
}