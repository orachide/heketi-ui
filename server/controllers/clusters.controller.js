var HeketiService = require('../services/heketi.service')

_this = this

var detailedCluster = async function(clusterId){
    var currentCluster = await HeketiService.getCluster(clusterId);
    console.log('Current cluster',currentCluster);
    var nodes = [];
    for (let nodeIndex in currentCluster.nodes) {
        console.log('Current node id',currentCluster.nodes[nodeIndex]);
        var node = await HeketiService.getNode(currentCluster.nodes[nodeIndex]);
        nodes.push(node);
    }
    var volumes = [];
    for (let volumeIndex in currentCluster.volumes) {
        console.log('Current volume id',currentCluster.volumes[volumeIndex]);
        var volume = await HeketiService.getVolume(currentCluster.volumes[volumeIndex]);
        volumes.push(volume);
    }
    return {id: clusterId,nodes:nodes,volumes:volumes};
}


exports.getAll = async function(req, res, next){
    try{
        var clustersResponse = [];
        var clusters = await HeketiService.getAllCluster();
        for (let clusterIndex in clusters) {
            var currentClusterId = clusters[clusterIndex];
            clustersResponse.push(await detailedCluster(currentClusterId));
          }
        return res.status(200).json(clustersResponse);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}

exports.getCluster = async function(req, res, next){
    try{
        var cluster = await await detailedCluster(req.params.clusterId);
        return res.status(200).json(cluster);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}