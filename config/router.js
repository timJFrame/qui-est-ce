import express from 'express'
import cards from '../controllers/cards.js'

const router = express.Router()

router.route('/cards')
  .get(cards.index)
  .post(cards.create)


router.route('/cards/:id')
  .get(cards.show)
  .put(cards.update)
  .delete(cards.delete)

export default router