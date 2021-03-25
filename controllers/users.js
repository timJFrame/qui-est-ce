import User from '../models/user.js'
import { forbidden, notFound } from '../lib/errorHandler.js'

//*Get all users pr
async function userIndex(reg, res){
  const users = await User.find()
  return res.status(200).json(users)
}

//*Delete a user profile
async function deleteUser(req, res, next){
  const { id } = req.params
  try {
    const userToDelete = await User.findById(id)
    if (!userToDelete) throw new Error(notFound)
    console.log(req.currentUser)
    if (!userToDelete._id.equals(req.currentUser._id)) throw new Error(forbidden)
    await userToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    console.log(err)
    next(err)
  }
}
  
//*Get a single users profile
async function getSingleUser(req, res, next){
  const { id } = req.params 
  try {
    const user = await User.findById(id).populate('createdCards')
    if (!user) throw new Error(notFound)
    return res.status(200).json(user)
  } catch (err){
    next(err)
  }
}

//*Get current users profile
async function userProfile(req, res, next){
  try {
    console.log(req.currentUser)
    const user = await User.findById(req.currentUser._id)
    if (!user) throw new Error(notFound)
    return res.status(200).json(user)
  } catch (err){
    next(err)
  }
}

export default {
  index: userIndex,
  delete: deleteUser,
  show: getSingleUser,
  profile: userProfile,
}