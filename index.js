// Modules and Globals
require('dotenv').config()
const express = require('express')
const app = express()

// Express 
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())


// Controllers & Routes
app.use('/places', require('./controllers/places'))

app.get('/', (req, res) => {
    res.render('home')
})

app.get('*', (req, res) => {
    res.render('error404')
})

// Listen 
app.listen(process.env.PORT)