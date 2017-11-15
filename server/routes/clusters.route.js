var express = require('express')

var router = express.Router()

var ClustersController = require('../controllers/clusters.controller');

router.get('/', ClustersController.getAll)
router.get('/:clusterId', ClustersController.getCluster)
// router.post('/', ClustersController.create)
// router.put('/', ClustersController.update)
// router.delete('/:id',ClustersController.removeTodo)

module.exports = router;