import User from '../models/user.js'

async function registerUser(req, res, next){
  try {
    const newUser = await User.create(req.body)
    return res.status(201).json({ message: `Welcome${newUser.username}` })
  } catch (err){
    next(err)
  }
}

async function deleteUser(req, res, next){
  const { id } = req.params
  try {
    const userToDelete = await User.findById(id)
    if (!userToDelete) throw new Error()
    await userToDelete.remove()
    return res.sendStatus(204)
  } catch (err){
    next(err)
  }
}

async function userIndex(reg, res){
  const cards = await User.find()
  return res.status(200).json(cards)
}



export default {
  registerUser,
  deleteUser,
  userIndex,
}