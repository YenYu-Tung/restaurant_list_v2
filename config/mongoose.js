const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alpha:camp@cluster0.e6ngl.mongodb.net/restaurant-list?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })

const db = mongoose.connection

db.on('error', () => {
  console.log('mongoDB error!')
})
db.once('open', () => {
  console.log('mongDB connected!')
})

module.exports = db