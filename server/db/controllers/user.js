const User = require('../models/User')

async function registerUser(req, res, next) {
  try {
    const userData = req.body
    const user = await User.create(userData)
    const { id, email } = user
    res.status(200).json({ id, email })
  } catch (e) {
    console.error(e)
    // create your own custom error
    res.status(400).json('Email already exist')
  }
}

function loginUser(req, res, next) {
  try {
    const userData = req.body
    // Add logic for login
  } catch (e) {
    console.error(e)
  }
}

module.exports = {
  registerUser,
  loginUser
}
