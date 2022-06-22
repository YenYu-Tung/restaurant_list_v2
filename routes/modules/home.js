const express = require('express')
const router = express.Router()

const Restaurant = require('../../models/restaurant')

// 定義首頁路由
router.get('/', (req, res) => {
  const sort = req.query.sort
  Restaurant.find()
    .lean()
    .sort({ name: sort })
    .then(restaurants => res.render('index', { restaurants, sort }))
    .catch(error => console.error(error))
})

//搜尋餐廳
router.get('/search', (req, res) => {
  const keyword = req.query.keyword

  Restaurant.find({})
    .lean()
    .then(restaurants => {
      const filterRestaurants = restaurants.filter(
        data =>
          data.name.toLowerCase().includes(keyword) ||
          data.category.includes(keyword)
      )
      res.render("index", {
        restaurants: filterRestaurants,
        keyword,
      })
    })
    .catch(err => console.log(err))
})

module.exports = router