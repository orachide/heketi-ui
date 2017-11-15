var express = require('express')

var router = express.Router()

var clusters = require('./clusters.route')
var volumes = require('./volumes.route')
var nodes = require('./nodes.route')


router.use('/clusters', clusters);
router.use('/nodes', nodes);
router.use('/volumes', volumes);



module.exports = router;