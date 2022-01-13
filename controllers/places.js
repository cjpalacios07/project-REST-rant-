<<<<<<< HEAD
const router = require('express').Router();
const db = require('../models')

router.get('/', (req, res) => {
    db.Place.find()
    .then((places) => {
      res.render('places/index', { places })
    })
    .catch(err => {
      console.log(err) 
=======
const router = require('express').Router()
const db = require('../models')

router.get('/', (req, res) => {
  db.Place.find()
  .then((places) => {
      res.redirect('places/index', { places })
  })
  .catch(err => {
      console.log(err)
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
      res.render('error404')
  })
})

router.post('/', (req, res) => {
  db.Place.create(req.body)
  .then(() => {
    
      res.redirect('/places')
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
})

router.get('/new', (req, res) => {
  res.render('places/new')
})

router.get('/:id', (req, res) => {
<<<<<<< HEAD
  db.Place.findById(req.params.id)
  .then(place => {
      res.render('places/show', { place })
  })
  .catch(err => {
      console.log('err', err)
      res.render('error404')
  })
=======
    db.Place.findById(req.params.id)
    .then(place => {
        res.render('places/show', { places })
    })
    .catch(err => {
        console.log('err', err)
        res.render('error404')
    })
>>>>>>> a4058469a450cd0028c0d8ff97faff975a3fda9f
})

router.put('/:id', (req, res) => {
  res.send('PUT /places/:id stub')
})

router.delete('/:id', (req, res) => {
  res.send('DELETE /places/:id stub')
})

router.get('/:id/edit', (req, res) => {
  res.send('GET edit form stub')
})

router.post('/:id/rant', (req, res) => {
  res.send('GET /places/:id/rant stub')
})

router.delete('/:id/rant/:rantId', (req, res) => {
    res.send('GET /places/:id/rant/:rantId stub')
})

module.exports = router