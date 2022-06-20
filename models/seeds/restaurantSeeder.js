const mongoose = require('mongoose')
const Restaurant = require('../restaurant') // 載入 model
mongoose.connect('mongodb+srv://alpha:camp@cluster0.e6ngl.mongodb.net/restaurant-list?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const restaurantList = require("../../restaurant.json").results

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
  Restaurant.create(restaurantList)
    .then(() => {
      console.log("restaurantSeeder done!")
      db.close()
    })
    .catch(err => console.log(err))
})