const mongoose = require('mongoose')

const validateEmail = (email) => {
  var reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.[a-zA-Z]{2,3})+$/
  return reg.test(email)
}

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
    minlength: [8, 'Password must have a minimum of 8 characters'],
    required: 'please enter a password'
  }
})

module.exports = mongoose.model('User', userSchema)
