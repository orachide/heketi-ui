var HeketiService = require('../services/heketi.service')

_this = this

exports.login = async function(req, res, next){
    try{
        console.log('User: '+req.body.user + '& Secret: '+req.body.secret);
        req.session.username = req.body.user;
        req.session.secret = req.body.secret;
        var clusters = await HeketiService.getAllCluster(req);
        return res.status(200).json({status: 200, message: "Succesfully login"});
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}

exports.logout = async function(req, res, next){
    try{
        return res.status(200).json({status: 200,message: "Succesfully login"});
    }catch(error){
        console.log(error);
        return res.status(error.response.status).json({status: error.response.status, message: error.message});
    }
}