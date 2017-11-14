var express = require('express')

var router = express.Router()

var AuthController = require('../controllers/auth.controller');

router.post('/login', AuthController.login)
router.post('/logout', AuthController.logout)

module.exports = router;