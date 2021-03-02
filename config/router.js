import express from 'express'
import cards from '../controllers/cards.js'
import auth from '../controllers/auth.js'

const router = express.Router()

router.route('/cards')
  .get(cards.index)
  .post(cards.create)


router.route('/cards/:id')
  .get(cards.show)
  .put(cards.update)
  .delete(cards.delete)

router.route('/register')
  .post(auth.registerUser)

export default router