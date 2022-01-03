const router = require('express').Router()


router.get('/', (req, res) => {
    res.render('places/index', { places })
  })

module.exports = router