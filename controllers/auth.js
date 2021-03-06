import User from '../models/user.js'
import jwt from 'jsonwebtoken'
import  { unauthorized  } from  '../lib/errorHandler.js'
import { secret } from '../config/enviroment.js'

async function registerUser(req, res, next){
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome${newUser.username}` })
  } catch (err){
    next(err)
  }
}

async function loginUser( req, res, next){
  try {

    //*Finds user in db via email provided by user logging in
    //*Find email or password provided bu user logging in is invalid throw error
    const userToLogin = await User.findOne({ email: req.body.email })
    if ((!userToLogin) || (!userToLogin.validatePassword(req.body.password))){
      throw new Error(unauthorized)
    }

    //*Makes token
    const token = jwt.sign({ sub: userToLogin._id }, secret, { expiresIn: '7 days' })

    //*Returns tokem in response
    return res.status(202).json({ nessage: `Welcome back ${userToLogin.username}`, token })

  } catch (err){
    next(err)
  }
}







export default {
  registerUser,
  loginUser,
}