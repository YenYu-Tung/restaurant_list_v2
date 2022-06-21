const Restaurant = require('../restaurant') // 載入 model

const db = require('../../config/mongoose')

const restaurantList = require("../../restaurant.json").results


db.once('open', () => {
  Restaurant.create(restaurantList)
    .then(() => {
      console.log("restaurantSeeder done!")
      db.close()
    })
    .catch(err => console.log(err))
})