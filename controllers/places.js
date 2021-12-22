const router = require('express').Router()
const placesList = require('../models/places.js')

router.get('/', (req, res) => {
    
    res.send('GET /places')
})

router.get('/:placesId', (req, res) => {
    const placesId = req.params.placesId
    res.send('GET /:placesId ${placesId}')
})
module.exports = router