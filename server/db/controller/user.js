const User = require('../models/User')

async function registerUser(userData) {
  try {
    const user = await User.create(userData)
    const { id, email } = user
    return { id, email }
  } catch (e) {
    console.log(e.message)
    // create your own custom error
    throw new Error('Email already exist')
  }
}

function loginUser(userData) {
  try {
  } catch (e) {}
}

module.exports = {
  registerUser,
  loginUser
}
