<<<<<<< HEAD
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

=======
///------DEPENDENCIES
require('dotenv').config()
const express = require("express")
const methodOverride = require('method-override')
const app = express();

//Mongoose
const mongoose = require('mongoose')
mongoose.connect(process.env.MONGO_URI, 
    {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => console.log(`connected to MongoDB at ${process.env.MONGO_URI}`))
//------CONFIG
const PORT = 3000
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f

//------MIDDLEWARE
app.set('view engine', 'jsx')
app.engine('jsx', require('express-react-views').createEngine())
app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride('_method'))

<<<<<<< HEAD
//prefix any routes exposed in this controller
app.use("/places", require("./controllers/places"))

//------ROUTES

// / -> sends hello world
=======

app.use("/places", require("./controllers/places"))


>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
app.get("/", (req, res) => {
    res.render("home")
})

<<<<<<< HEAD
//anything not matched will be caught by this route
=======

>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
app.get("*", (req, res) => {
    res.render('home')
})

<<<<<<< HEAD
//------app listens on this port
=======
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
app.listen(process.env.PORT)