import express from 'express'
import cards from '../controllers/cards.js'
import auth from '../controllers/auth.js'
import secureRoute from '../lib/secureRoute.js'

const router = express.Router()

router.route('/cards')
  .get(cards.index)
  .post(secureRoute, cards.create)


router.route('/cards/:id')
  .get(secureRoute, cards.show)
  .put(secureRoute, cards.update)
  .delete(secureRoute, cards.delete)

router.route('/register')
  .post(auth.registerUser)
  .get(auth.userIndex)

router.route('/login')
  .post(auth.loginUser)

router.route('/register/:id')
  .delete(auth.deleteUser)

export default router