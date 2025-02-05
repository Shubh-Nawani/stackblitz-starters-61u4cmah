const express = require('express')
const addMenu = require('../controllers/menuController')
const router = express.Router()

router.post("/menu", addMenu)


module.exports = router