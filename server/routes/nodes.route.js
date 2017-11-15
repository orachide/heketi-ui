var express = require('express')

var router = express.Router()

var NodesController = require('../controllers/nodes.controller');


router.get('/:nodeId', NodesController.getNode)


module.exports = router;