//------DEPENDENCIES
require('dotenv').config();
const express = require("express")
const methodOverride = require('method-override')
const app = express();
//Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
  })


//------MIDDLEWARE
app.set('views', __dirname + '/views')
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))


//prefix any routes exposed in this controller
app.use("/places", require("./controllers/places"))

app.get("/", (req, res) => {
    res.render("home")
})


app.get("*", (req, res) => {
    res.render('home')
})

//------app listens on this port
app.listen(process.env.PORT)