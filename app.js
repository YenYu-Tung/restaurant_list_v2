const express = require('express')
const app = express()
const port = 3000
//載入model
const Restaurant = require('./models/restaurant')

//載入method-override
const methodOverride = require('method-override')
app.use(methodOverride('_method'))

//引用路由器
const routes = require('./routes')
app.use(routes)

//重購mongoose
require('./config/mongoose')

//express-handlebars
const exphbs = require('express-handlebars')
app.engine('hbs', exphbs({ defaultLayout: 'main', extname: '.hbs' }))
app.set('view engine', 'hbs')

//靜態資料
app.use(express.static('public'))

app.listen(port, () => {
  console.log(`Express is listening on localhost: ${port}.`)
})