<<<<<<< HEAD
require('dotenv').config();
=======
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./places')