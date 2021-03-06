import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import uniqueValidator from 'mongoose-unique-validator'

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true, maxlength: 40 },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  experience: { type: String, required: true },
  latitude: { type: Number, required: true },
  longitude: { type: Number, required: true },
  profilePhoto: { type: String, required: true },
})

userSchema.set('toJSON', {
  virtuals: true,
  transform(_doc, json){
    delete json.password
    delete json._v
    return json
  },
})

//*Sets a Virtual Schema for password confirmation that isn't stored in db
userSchema.virtual('passwordConfirmation')
  .set(function(passwordConfirmation) {
    this._passwordConfirmation = passwordConfirmation
  })

userSchema.virtual('createdCards', {
  ref: 'Card',
  localField: '_id',
  foreignField: 'owner',

})

//*Validates the password and password confirmation match. Will only run when user is created or password is edited
userSchema.pre('validate', function(next){
  if (this.isModified('password') && this.password !== this._passwordConfirmation){
    this.invalidate('passwordConfirmation', 'does not match')
  }
  next()
})

//*Encrypts password
userSchema.pre('save', function(next){
  if (this.isModified('password')) {
    this.password = bcrypt.hashSync(this.password, bcrypt.genSaltSync())
  }
  next()
})


//*Used when user logins into website. Method will hash the password supplied by user and compare it to the hashed password held in the database
userSchema.methods.validatePassword = function(password){
  return bcrypt.compareSync(password, this.password)
}

userSchema.plugin(uniqueValidator)

userSchema.set('toJSON', { virtuals: true })

export default mongoose.model('User', userSchema)
