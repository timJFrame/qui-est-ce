import jwt from 'jsonwebtoken'
import { secret } from '../config/enviroment.js'
import User from '../models/user.js'

export default async function secureRoute(req, res, next){  
  try {

    //*If user has no token throw error
    if (!req.headers.authorization){
      throw new Error('Missing Required Header')
    }

    //*Extracts the token from the headers
    const token = req.headers.authorization.replace('Bearer ', '')

    //*Checks the token and the secert
    const payload = jwt.verify(token, secret)

    //*Looks for user via user id stored in the token
    const userToVerify = await User.findById(payload.sub)

    if (!userToVerify){
      throw new Error('User Not Found')
    }

    req.currentUser = userToVerify
    console.log('current user is', req.currentUser)
    next()

  } catch (err){
    console.log('✋ Authorisation Error', err.name, err.message)
    return res.status(401).json({ message: 'Unathorized' })
  }
}