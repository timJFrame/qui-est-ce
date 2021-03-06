import mongoose from 'mongoose'

const personCardSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true },
  gender: { type: String, required: true },
  eyeColor: { type: String, required: true },
  hairColor: { type: String, required: true },
  glasses: { type: Boolean, required: true },
  moustache: { type: Boolean, required: true },
  beard: { type: Boolean, required: true },
  owner: { type: mongoose.Schema.ObjectId, ref: 'User', required: true },
})
  
export default mongoose.model('Card', personCardSchema)