const mongoose = require('mongoose')

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log('Database connected')
  })
  .catch((error) => {
    console.error(error)
  })

module.exports = mongoose
