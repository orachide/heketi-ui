
axios = require('axios');
jwtSimple = require('jwt-simple');
sha256 = require('js-sha256');
moment = require('moment');

_this = this

const heketiUrl = process.env.HEKETI_SERVER_URL;
const heketiUser = process.env.HEKETI_SERVER_USER;
const heketiSecret = process.env.HEKETI_SERVER_SECRET;

var heketiServer = axios.create({
    baseURL: heketiUrl
  });

// Add a request interceptor
heketiServer.interceptors.request.use(function (config) {
    // Add Authentication info
    config.headers['Content-Type'] = 'application/json';
    config.headers['Authorization'] = 'Bearer '+ generateJwtToken(config);
    config.params = undefined;
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });

var generateJwtToken = function(httpConfig){
    var user = heketiUser;
    var secret = heketiSecret;
    var hash = sha256.create();
    hash.update(httpConfig.method.toUpperCase()+'&'+httpConfig.url);
    var now = moment();

    var qsh = hash.hex();
    var payload = {
        iss: user,
        iat: now.unix(),
        exp: now.add(7, 'days').unix(),
        qsh: qsh
      }
    var token = jwtSimple.encode(payload, secret);
    return token;
}

exports.getAllCluster = async function(){
    return heketiServer.get('/clusters')
        .then(function(response) {
            return response.data.clusters;
        }).catch(function (error) {
            return Promise.reject(error);
          })
    
}

exports.getCluster = async function(clusterId){
    return heketiServer.get('/clusters/'+clusterId)
        .then(function(response) {
            return response.data;
        }).catch(function (error) {
            return Promise.reject(error);
          })
}

exports.getNode = async function(nodeId){
    return heketiServer.get('/nodes/'+nodeId)
        .then(function(response) {
            return response.data;
        }).catch(function (error) {
            return Promise.reject(error);
          })
}

exports.getVolume = async function(volumeId){
    return heketiServer.get('/volumes/'+volumeId)
        .then(function(response) {
            return response.data;
        }).catch(function (error) {
            return Promise.reject(error);
          })
}

