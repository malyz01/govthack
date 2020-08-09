const User = require('../models/User')

async function registerUser(req, res, next) {
  try {
    const userData = req.body
    const user = await User.create(userData)
    const { id, email } = user
    res.status(200).json({ id, email })
  } catch (e) {
    console.error(e)
    const errors = e.errors ? Object.keys(e.errors) : []
    // create your own custom error
    if (errors.length) {
      const messages = errors.map((err) => e.errors[err].message)
      return res.status(400).json(messages)
    }
    if (e.code && e.code === 11000)
      return res.status(400).json('Email already taken')
    res.status(400).json('Something went wrong, please try again later...')
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
