const router = require('express').Router()

const User = require('../db/controllers/user')

// POST - api/v1/user
router.post('/', User.registerUser)

module.exports = router
