const express = require('express')
const db = require('../db')
const router = express.Router()


router.get('/', (req, res) => {
  res.render('home')
})

router.get('/view', (req, res) => {
  res.render('view')
})

router.get('/veg', (req, res) => {
  res.render('veg')
})

module.exports = router
