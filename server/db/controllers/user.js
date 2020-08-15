const User = require('../models/User')

function registerUser(req, res, next) {
  res.json('Write logic for register User')
}

function loginUser(req, res, next) {
  res.json('Write logic for login User')
}

module.exports = {
  registerUser,
  loginUser
}
