const mongoose = require('mongoose')
const bluebird = require('bluebird')

mongoose.Promise = bluebird

module.exports = (cb) => {
  const conn = mongoose.createConnection(process.env.MONGO_URL)

  conn.once('error', () => {
    throw new Error('Error connecting mongoDB')
  })

  conn.once('open', () => {
    console.log('Connected to mongoDB')
    cb(conn)
  })
}
