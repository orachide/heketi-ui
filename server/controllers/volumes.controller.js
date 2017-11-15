var HeketiService = require('../services/heketi.service')

_this = this


exports.getVolume = async function(req, res, next){
    try{
        var volume = await HeketiService.getVolume(req.params.volumeId);
        return res.status(200).json(volume);
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}