const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    trim: true,
    unique: true,
    required: 'please enter valid email',
    validate: {
      validator: validateEmail,
      message: ({ value }) => `${value} is not a valid email address`
    }
  },
  password: {
    type: String,
    min: [8, 'Password is too short'],
    required: 'please enter a password'
  }
})

module.exports = mongoose.model('User', userSchema)
