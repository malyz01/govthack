const IN_PROD = process.env.NODE_ENV === 'production'
!IN_PROD && require('dotenv').config()
const path = require('path')
const express = require('express')
const cors = require('cors')

const server = express()

server.use(cors())
server.use(express.urlencoded({ extended: false }))
server.use(express.json())
server.use(express.static(path.resolve('server', 'public')))

server.get('*', (_, res) => {
  res.sendFile(path.resolve('server', 'public', 'index.html'))
})

module.exports = server
