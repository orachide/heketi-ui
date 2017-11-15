var HeketiService = require('../services/heketi.service')

_this = this

exports.getAll = async function(req, res, next){
    try{
        var clusters = await HeketiService.getAllCluster();
        return res.status(200).json(clusters);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}

exports.getCluster = async function(req, res, next){
    try{
        var cluster = await HeketiService.getCluster(req.params.clusterId);
        return res.status(200).json(cluster);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}