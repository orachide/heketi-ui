var express = require('express')

var router = express.Router()

var VolumesController = require('../controllers/volumes.controller');


router.get('/:volumeId', VolumesController.getVolume)


module.exports = router;