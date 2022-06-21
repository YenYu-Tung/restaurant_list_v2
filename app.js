const express = require('express')
const app = express()
const port = 3000
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

require('./config/mongoose')

const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')


app.use(express.static('public'))





app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}.`)
})