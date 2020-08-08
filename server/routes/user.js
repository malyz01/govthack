const router = require('express').Router()

const User = require('../db/controller/user')

// POST - api/v1/user
router.post('/user', async (req, res) => {
  try {
    const userData = req.body
    const createdUser = await User.registerUser(userData)
    res.status(200).json(createdUser)
  } catch (e) {
    console.error(e)
    res.status(400).json(e.message)
  }
})
