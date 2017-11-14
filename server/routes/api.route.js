var express = require('express')

var router = express.Router()
var clusters = require('./clusters.route')


router.use('/clusters', clusters);


module.exports = router;