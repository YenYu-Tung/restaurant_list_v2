const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://alpha:camp@cluster0.e6ngl.mongodb.net/restaurant-list?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true })
const Restaurant = require('./models/restaurant')

//載入method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//引用路由器
const routes = require('./routes')
app.use(routes)

// 引用 body-parser
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: true }))

const db = mongoose.connection
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))





app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}.`)
})