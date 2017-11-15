var HeketiService = require('../services/heketi.service')

_this = this


exports.getNode = async function(req, res, next){
    try{
        var node = await HeketiService.getNode(req.params.nodeId);
        return res.status(200).json(node);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}